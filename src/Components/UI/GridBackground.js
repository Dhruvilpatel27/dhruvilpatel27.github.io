import { useEffect, useRef } from 'react';
import './GridBackground.css';

const SPACING = 28;
const RADIUS = 110;

// Fixed dot grid behind the page. Dots near the cursor brighten slightly.
// Redraws only when the pointer moves or the window resizes.
const GridBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const interactive =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let frame = null;
    let colors = {};
    const pointer = { x: -9999, y: -9999 };

    const readColors = () => {
      const styles = getComputedStyle(document.documentElement);
      colors = {
        dot: styles.getPropertyValue('--grid-dot').trim() || '232, 235, 239',
        accent: styles.getPropertyValue('--grid-accent').trim() || '197, 243, 107',
      };
    };

    const draw = () => {
      frame = null;
      ctx.clearRect(0, 0, width, height);
      for (let x = SPACING / 2; x < width; x += SPACING) {
        for (let y = SPACING / 2; y < height; y += SPACING) {
          const d = Math.hypot(x - pointer.x, y - pointer.y);
          const t = d < RADIUS ? 1 - d / RADIUS : 0;
          ctx.fillStyle = t > 0
            ? `rgba(${colors.accent}, ${0.1 + t * 0.35})`
            : `rgba(${colors.dot}, 0.09)`;
          ctx.beginPath();
          ctx.arc(x, y, 1 + t * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(draw);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      schedule();
    };

    const onMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      schedule();
    };

    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      schedule();
    };

    // repaint in the new palette when the theme toggle flips data-theme
    const themeObserver = new MutationObserver(() => {
      readColors();
      schedule();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    readColors();
    resize();
    window.addEventListener('resize', resize);
    if (interactive) {
      window.addEventListener('mousemove', onMove);
      document.addEventListener('mouseleave', onLeave);
    }

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      themeObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="grid-bg" aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="grid-bg-glow" />
      <div className="grid-bg-fade" />
    </div>
  );
};

export default GridBackground;
