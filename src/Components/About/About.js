import './About.css';
import '../Recommendations/Recommendations.css';
import Reveal from '../UI/Reveal';
import SectionHead from '../UI/SectionHead';
import { RECOMMENDATIONS } from '../../data/profile';
import mountains from '../../assets/photo-mountains.jpg';
import temple from '../../assets/photo-temple.jpg';

// Initials avatar so the cards don't depend on profile photos.
const initials = (name) => name.split(' ').map((p) => p[0]).join('').slice(0, 2);

const PHOTOS = [
  { src: mountains, alt: 'Dhruvil at a mountain viewpoint above a forested valley', caption: 'Yosemite, California' },
  { src: temple, alt: 'Dhruvil on a bridge in front of a red temple and green mountains', caption: 'Byodo-In Temple, Oʻahu' },
];

const About = () => {
  return (
    <section id="about" className="page-section">
      <div className="about-grid">
        <div>
          <SectionHead index="03" label="About" title="A bit about me" />
          <Reveal delay={100} className="about-copy">
            <p>
              I&apos;m a software engineer who likes solving real problems with practical solutions. I enjoy
              work that spans the whole stack, from interfaces people use every day to the services and
              cloud infrastructure behind them, and lately the engineering that makes AI trustworthy.
            </p>
            <p>
              Currently, I&apos;m a Software Development Engineer II at Amazon, where I work on tax
              technology: an AI assistant for tax teams, a reusable chat UI platform, and tools for
              exploring legal entities and data lineage. Before that, I worked on inventory systems for
              Amazon&apos;s physical stores and on a state government benefits platform.
            </p>
            <p>
              I studied computer science at SRM University in Chennai and did my master&apos;s at UNC
              Charlotte. When I&apos;m not working, you will probably find me playing Call of Duty or
              Counter-Strike, always aiming for that perfect headshot.
            </p>
          </Reveal>
          <div className="about-photos">
            {PHOTOS.map((photo, idx) => (
              <Reveal as="figure" key={photo.caption} delay={150 + idx * 120} className={`snapshot snapshot-${idx + 1}`}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <figcaption>{photo.caption}</figcaption>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="about-recs">
          <Reveal as="h3" className="about-recs-heading">What colleagues say</Reveal>
          {RECOMMENDATIONS.map((rec, idx) => (
            <Reveal as="figure" key={rec.name} delay={idx * 120} className="rec">
              <span className="rec-mark" aria-hidden="true">“</span>
              <blockquote>{rec.quote}</blockquote>
              <figcaption>
                <span className="rec-avatar" aria-hidden="true">{initials(rec.name)}</span>
                <span>
                  <span className="rec-name">{rec.name}</span>
                  <span className="rec-title">{rec.title} · {rec.relation}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
