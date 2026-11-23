import { FiArrowUpRight, FiAward, FiBookOpen } from 'react-icons/fi';
import './Skills.css';
import './Toolkit.css';
import Reveal from '../UI/Reveal';
import SectionHead from '../UI/SectionHead';
import { SKILLS, PROJECTS, CERTIFICATIONS, PUBLICATION } from '../../data/profile';

// Skills on the left; academic projects and certifications on the right, in one section.
const Toolkit = () => (
  <section id="skills" className="page-section">
    <SectionHead index="02" label="Skills" title="Tools, projects & certifications" />

    <div className="toolkit">
      <dl className="skill-groups toolkit-skills">
        {SKILLS.map((group, idx) => (
          <Reveal key={group.label} delay={idx * 50} className="skill-group">
            <dt>{group.label}</dt>
            <dd>
              <ul>
                {group.items.map((item, i) => (
                  <li key={item} style={{ '--i': i }}>{item}</li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>

      <div className="toolkit-side">
        <Reveal className="toolkit-card">
          <h3 className="toolkit-heading">Academic projects</h3>
          <ul className="toolkit-projects">
            {PROJECTS.map((project) => (
              <li key={project.title}>
                <p className="toolkit-kind">{project.kind}</p>
                <p className="toolkit-title">
                  {project.link ? (
                    <a href={project.link.href} target="_blank" rel="noopener noreferrer">
                      {project.title} <FiArrowUpRight aria-hidden="true" />
                    </a>
                  ) : project.title}
                </p>
                <p className="toolkit-summary">{project.summary}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="toolkit-card">
          <h3 className="toolkit-heading"><FiAward aria-hidden="true" /> Certifications</h3>
          <ul className="toolkit-certs">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert.name}>
                <span>{cert.name}</span>
                <span className="toolkit-meta">{cert.issuer} · {cert.year}</span>
              </li>
            ))}
          </ul>
          <a href={PUBLICATION.href} target="_blank" rel="noopener noreferrer" className="toolkit-pub">
            <FiBookOpen aria-hidden="true" /> Published: {PUBLICATION.title} ({PUBLICATION.venue}, {PUBLICATION.date})
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Toolkit;
