import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';
import Reveal from '../UI/Reveal';
import { Aurora, RotatingText, Letters, magnetHandlers } from '../UI/Motion';
import { CONTACT, HERO, TERMINAL } from '../../data/profile';

// Timeline for the terminal: each command types at a fixed speed, then its output appears.
const TYPE_MS = 45;
const PAUSE_MS = 350;
const START_MS = 700;

const SCRIPT = (() => {
  let t = START_MS;
  return TERMINAL.map((step) => {
    const typeAt = t;
    const typeFor = step.cmd.length * TYPE_MS;
    const outAt = typeAt + typeFor + 150;
    t = outAt + step.out.length * 90 + PAUSE_MS;
    return { ...step, typeAt, typeFor, outAt };
  });
})();
const END_MS = SCRIPT[SCRIPT.length - 1].outAt + SCRIPT[SCRIPT.length - 1].out.length * 90 + 200;

const SOCIALS = [
  { label: 'GitHub', href: CONTACT.github, icon: <FiGithub /> },
  { label: 'LinkedIn', href: CONTACT.linkedin, icon: <FiLinkedin /> },
  { label: 'LeetCode', href: CONTACT.leetcode, icon: <SiLeetcode /> },
  { label: 'Email', href: `mailto:${CONTACT.email}`, icon: <FiMail /> },
];

const Hero = () => {
  return (
    <section id="home" className="hero">
      <Aurora />
      <div className="hero-inner">
        <div className="hero-text">
          <Reveal as="p" className="hero-greeting">
            <span className="hero-status" aria-hidden="true" /> Hi, I&apos;m
          </Reveal>
          <Reveal as="h1" delay={80} className="hero-name">
            <Letters text="Dhruvil Patel" />
          </Reveal>
          <Reveal as="p" delay={160} className="hero-role">
            {HERO.role} at <span>{HERO.company}</span> · {CONTACT.location}
          </Reveal>
          <Reveal delay={200}>
            <RotatingText prefix="I build" words={HERO.rotating} />
          </Reveal>
          <Reveal as="p" delay={240} className="hero-intro">
            {HERO.intro}
          </Reveal>
          <Reveal delay={320} className="hero-actions">
            <a href="#experience" className="btn btn-primary" {...magnetHandlers}>
              View experience <FiArrowRight aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-quiet" {...magnetHandlers}>Get in touch</a>
          </Reveal>
          <Reveal delay={400} className="hero-socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="icon-button"
                aria-label={s.label}
                title={s.label}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal delay={250} className="terminal" aria-hidden="true">
          <div className="terminal-bar">
            <span /><span /><span />
            <p>dhruvil@vancouver: ~</p>
          </div>
          <div className="terminal-body">
            {SCRIPT.map((step) => (
              <div key={step.cmd} className="term-step">
                <p className="term-cmd">
                  <span className="term-prompt">›</span>
                  <span
                    className="term-typed"
                    style={{
                      '--chars': step.cmd.length,
                      animationDelay: `${step.typeAt}ms`,
                      animationDuration: `${step.typeFor}ms`,
                    }}
                  >
                    {step.cmd}
                  </span>
                </p>
                {step.out.map((cols, i) => (
                  <p
                    key={i}
                    className={`term-out ${cols.length > 1 ? 'term-log' : ''}`}
                    style={{ animationDelay: `${step.outAt + i * 90}ms` }}
                  >
                    {cols.map((col, j) => (
                      <span key={j}>{col}</span>
                    ))}
                  </p>
                ))}
              </div>
            ))}
            <p className="term-cmd term-idle" style={{ animationDelay: `${END_MS}ms` }}>
              <span className="term-prompt">›</span>
              <span className="term-caret" />
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
