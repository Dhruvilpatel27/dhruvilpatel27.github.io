import Reveal from './Reveal';
import { Words } from './Motion';

// Numbered mono label plus display title, shared by every section.
const SectionHead = ({ index, label, title, intro, children }) => (
  <Reveal className="section-head">
    <span className="eyebrow">
      <span className="eyebrow-index">{index}</span> / {label}
    </span>
    <h2 className="section-title"><Words text={title} /></h2>
    {intro && <p className="section-intro">{intro}</p>}
    {children}
  </Reveal>
);

export default SectionHead;
