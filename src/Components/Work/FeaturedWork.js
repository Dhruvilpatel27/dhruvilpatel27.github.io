import { useEffect, useRef } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import './FeaturedWork.css';

// One project's story: what it is, what I did, impact and tools on the left,
// and a small animated architecture flow on the right.
export const CaseStudy = ({ item, labels = {} }) => {
  const L = { what: 'What it is', did: 'What I did', flow: 'How it fits together', ...labels };

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

      <aside className="fw-flow" aria-label={L.flow}>
        <p className="fw-label">{L.flow}</p>
        <ol>
          {item.flow.map((node, i) => (
            <li key={node.name} className="fw-node" style={{ animationDelay: `${120 + i * 110}ms` }}>
              <span className="fw-node-name">{node.name}</span>
              {node.note && <span className="fw-node-note">{node.note}</span>}
            </li>
          ))}
        </ol>
      </aside>
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
