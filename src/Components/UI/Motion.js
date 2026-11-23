import { useEffect, useRef, useState } from 'react';
import './Motion.css';

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Thin accent bar across the top that fills as the page scrolls.
export const ScrollProgress = () => {
  const ref = useRef(null);

  useEffect(() => {
    let frame = null;
    const update = () => {
      frame = null;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      ref.current?.style.setProperty('--progress', max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return <div ref={ref} className="scroll-progress" aria-hidden="true" />;
};

// Types each word, holds it, deletes it, then moves to the next one.
export const RotatingText = ({ prefix, words }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reducedMotion() ? words[0] : '');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion()) return undefined;
    const word = words[index];
    let delay = deleting ? 35 : 70;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === '') delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <p className="rotating">
      <span className="sr-only">{`${prefix} ${words.join(', ')}`}</span>
      <span aria-hidden="true">
        {prefix} <span className="rotating-word">{text}</span>
        <span className="rotating-caret" />
      </span>
    </p>
  );
};

export const Aurora = () => (
  <div className="aurora" aria-hidden="true">
    <span />
    <span />
  </div>
);

// Mouse-move handler that tilts a card toward the pointer (fine pointers only).
export const tiltHandlers = {
  onMouseMove: (e) => {
    if (reducedMotion() || !window.matchMedia('(pointer: fine)').matches) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--ry', `${(px * 7).toFixed(2)}deg`);
    el.style.setProperty('--rx', `${(-py * 7).toFixed(2)}deg`);
  },
  onMouseLeave: (e) => {
    e.currentTarget.style.setProperty('--rx', '0deg');
    e.currentTarget.style.setProperty('--ry', '0deg');
  },
};

// Splits text into word spans (for the section-title reveal).
export const Words = ({ text }) =>
  text.split(' ').map((w, i, arr) => (
    <span key={`${w}-${i}`} className="word" style={{ '--i': i }}>
      {w}
      {i < arr.length - 1 ? ' ' : ''}
    </span>
  ));

// Splits text into letter spans (for the hero name).
export const Letters = ({ text }) => (
  <>
    <span className="sr-only">{text}</span>
    <span aria-hidden="true">
      {[...text].map((c, i) => (
        <span key={i} className="ch" style={{ '--i': i }}>
          {c === ' ' ? ' ' : c}
        </span>
      ))}
    </span>
  </>
);

// Pulls a button a few pixels toward the cursor; springs back on leave.
export const magnetHandlers = {
  onMouseMove: (e) => {
    if (reducedMotion() || !window.matchMedia('(pointer: fine)').matches) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.18;
    const y = (e.clientY - r.top - r.height / 2) * 0.3;
    el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
  },
  onMouseLeave: (e) => {
    e.currentTarget.style.transform = '';
  },
};
