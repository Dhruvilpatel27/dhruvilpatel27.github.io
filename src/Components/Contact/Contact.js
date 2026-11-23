import { useState } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import './Contact.css';
import Reveal from '../UI/Reveal';
import SectionHead from '../UI/SectionHead';
import { CONTACT } from '../../data/profile';

const LINKS = [
  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}`, icon: <FiMail /> },
  { label: 'Phone', value: CONTACT.phone, href: CONTACT.phoneHref, icon: <FiPhone /> },
  { label: 'LinkedIn', value: 'dhruvil-patel-dev', href: CONTACT.linkedin, icon: <FiLinkedin /> },
  { label: 'GitHub', value: 'Dhruvilpatel27', href: CONTACT.github, icon: <FiGithub /> },
  { label: 'LeetCode', value: 'Dhruvildragon', href: CONTACT.leetcode, icon: <SiLeetcode /> },
];

const MIN_MESSAGE = 30;
const EMAIL_RE = /^\S+@\S+\.\S+$/;

// The form has no backend: on submit it opens the visitor's mail app with the message filled in.
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);

  const errors = {
    name: form.name.trim() === '' ? 'Please add your name.' : '',
    email: !EMAIL_RE.test(form.email.trim()) ? 'Please enter a valid email.' : '',
    message:
      form.message.trim().length < MIN_MESSAGE ? `Please write at least ${MIN_MESSAGE} characters.` : '',
  };
  const valid = !errors.name && !errors.email && !errors.message;

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const blur = (field) => () => setTouched((t) => ({ ...t, [field]: true }));

  const submit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!valid) return;
    const subject = encodeURIComponent(`Portfolio message from ${form.name.trim()}`);
    const body = encodeURIComponent(`${form.message.trim()}\n\n${form.name.trim()}\n${form.email.trim()}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field = (name, label, input) => (
    <label className={`field ${touched[name] && errors[name] ? 'has-error' : ''}`}>
      <span className="field-label">{label}</span>
      {input}
      {touched[name] && errors[name] && <span className="field-error">{errors[name]}</span>}
    </label>
  );

  return (
    <section id="contact" className="page-section">
      <SectionHead
        index="04"
        label="Contact"
        title="Let's talk"
        intro="Have a question or an opportunity in mind? Send a message or reach me directly."
      />

      <div className="contact-grid">
        <Reveal as="form" className="contact-form" onSubmit={submit} noValidate>
          {field('name', 'Name', (
            <input type="text" value={form.name} onChange={update('name')} onBlur={blur('name')} maxLength={60} autoComplete="name" />
          ))}
          {field('email', 'Email', (
            <input type="email" value={form.email} onChange={update('email')} onBlur={blur('email')} autoComplete="email" />
          ))}
          {field('message', 'Message', (
            <textarea rows={5} value={form.message} onChange={update('message')} onBlur={blur('message')} maxLength={800} />
          ))}
          <div className="form-footer">
            <button type="submit" className="btn btn-primary">
              Send message <FiSend aria-hidden="true" />
            </button>
            {sent && <p className="form-note">Your email app should open with the message ready to send.</p>}
          </div>
        </Reveal>

        <Reveal delay={120} as="ul" className="contact-links">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">{link.icon}</span>
                <span>
                  <span className="contact-label">{link.label}</span>
                  <span className="contact-value">{link.value}</span>
                </span>
              </a>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
