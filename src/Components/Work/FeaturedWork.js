import { useEffect, useRef } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import './FeaturedWork.css';

// One project's story: what it is, what I did, impact and tools.
export const CaseStudy = ({ item, labels = {} }) => {
  const L = { what: 'What it is', did: 'What I did', ...labels };

  return (
    <article className="fw-panel">
      <div className="fw-main">
        <p className="fw-meta">{item.program} · {item.when}</p>
        <h3 className="fw-title">{item.title}</h3>

        <p className="fw-label">{L.what}</p>
        <p className="fw-text">{item.what}</p>

        <p className="fw-label">{L.did}</p>
        <ul className="fw-points">
          {item.did.map((d) => (
            <li key={d}><FiCheck aria-hidden="true" />{d}</li>
          ))}
        </ul>

        <div className="fw-impact">
          {item.impact.map((m) => (
            <span key={m.label} className="fw-metric">
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </span>
          ))}
        </div>

        <ul className="fw-tools">
          {item.tools.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </article>
  );
};

// Case study in a modal dialog. Esc and the backdrop close it.
export const CaseStudyDialog = ({ item, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (item && !dialog.open) dialog.showModal();
    if (!item && dialog.open) dialog.close();
  }, [item]);

  return (
    <dialog
      ref={ref}
      className="fw-dialog"
      aria-label={item ? item.title : 'Project'}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      {item && (
        <>
          <button type="button" className="fw-dialog-close" aria-label="Close" onClick={onClose}>
            <FiX />
          </button>
          <CaseStudy item={item} />
        </>
      )}
    </dialog>
  );
};
