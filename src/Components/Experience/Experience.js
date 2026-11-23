import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './Experience.css';
import Reveal from '../UI/Reveal';
import SectionHead from '../UI/SectionHead';
import { EXPERIENCE, EDUCATION, CONTACT, FEATURED_WORK } from '../../data/profile';
import { CaseStudyDialog } from '../Work/FeaturedWork';
import charlotteLogo from '../../assets/logo-charlotte.png';
import srmLogo from '../../assets/logo-srmist.png';

const LOGOS = { charlotte: charlotteLogo, srm: srmLogo };

const Role = ({ role }) => {
  const [open, setOpen] = useState(false);
  const meta = [role.place, role.dates].filter(Boolean).join(' · ');

  return (
    <li className="role">
      <span className="role-dot" aria-hidden="true" />
      <h4 className="role-title">{role.title}</h4>
      <p className="role-meta">
        {meta}
        {role.via && <span className="role-via"> · via {role.via}</span>}
      </p>
      {role.summary && <p className="role-summary">{role.summary}</p>}
      {role.tools && (
        <ul className="role-tools" aria-label="Technologies">
          {role.tools.map((t) => <li key={t}>{t}</li>)}
        </ul>
      )}

      {role.details && (
        <>
          <button
            type="button"
            className="role-toggle"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiMinus /> : <FiPlus />} {open ? 'Hide details' : 'Show details'}
          </button>
          <div className={`role-details ${open ? 'open' : ''}`}>
            <ul>
              {role.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </li>
  );
};

const Experience = () => {
  const [active, setActive] = useState(0);
  const [project, setProject] = useState(null);
  const stint = EXPERIENCE[active];
  const work = FEATURED_WORK.filter((item) => item.stint && item.stint === stint.work);

  // Arrow keys move between tabs, as in a native tab list.
  const onKeyDown = (e) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (active + step + EXPERIENCE.length) % EXPERIENCE.length;
    setActive(next);
    document.getElementById(`job-tab-${next}`)?.focus();
  };

  return (
    <section id="experience" className="page-section">
      <SectionHead index="01" label="Experience" title="Where I've worked" />

      <Reveal className="jobs">
        <div className="job-tabs" role="tablist" aria-label="Employers" onKeyDown={onKeyDown}>
          {EXPERIENCE.map((item, idx) => (
            <button
              key={`${item.company}-${item.period}`}
              id={`job-tab-${idx}`}
              type="button"
              role="tab"
              aria-selected={idx === active}
              aria-controls="job-panel"
              tabIndex={idx === active ? 0 : -1}
              className={`job-tab ${idx === active ? 'active' : ''}`}
              onClick={() => setActive(idx)}
            >
              <span className="job-tab-name">{item.company}</span>
              <span className="job-tab-period">{item.period}</span>
            </button>
          ))}
        </div>

        <div
          key={active}
          id="job-panel"
          role="tabpanel"
          aria-labelledby={`job-tab-${active}`}
          className="job-panel"
        >
          <ol className={`roles ${stint.roles.length > 1 ? 'roles-multi' : ''}`}>
            {stint.roles.map((role) => (
              <Role key={`${role.title}-${role.dates}`} role={role} />
            ))}
          </ol>
          {work.length > 0 && (
            <div className="role-work">
              <p className="role-work-label">Projects</p>
              <ul>
                {work.map((item) => (
                  <li key={item.title}>
                    <button type="button" className="role-work-button" onClick={() => setProject(item)}>
                      {item.short || item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <a className="role-resume" href={CONTACT.resume} target="_blank" rel="noreferrer">
            View full résumé ↗
          </a>
        </div>
      </Reveal>

      <div className="education">
        <Reveal as="h3" className="education-heading">Education</Reveal>
        <div className="education-grid">
          {EDUCATION.map((ed, idx) => (
            <Reveal key={ed.degree} delay={idx * 100} className="degree">
              {ed.logo && <img className="degree-logo" src={LOGOS[ed.logo]} alt={`${ed.school} logo`} />}
              <p className="degree-dates">{ed.dates}</p>
              <h4 className="degree-title">{ed.degree}</h4>
              <p className="degree-school">{ed.school}, {ed.place}</p>
              {ed.note && <p className="degree-note">{ed.note}</p>}
              <p className="degree-gpa">GPA <span>{ed.gpa}</span></p>
            </Reveal>
          ))}
        </div>
      </div>

      <CaseStudyDialog item={project} onClose={() => setProject(null)} />
    </section>
  );
};

export default Experience;
