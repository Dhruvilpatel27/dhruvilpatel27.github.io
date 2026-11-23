import { useEffect, useState } from 'react';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import './Navbar.css';
import ThemeToggle from '../UI/ThemeToggle';
import LogoMark from '../UI/LogoMark';
import { CONTACT } from '../../data/profile';

export const NAV_LINKS = [
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

// Highlights the nav link for whichever section sits in the middle of the viewport.
const useActiveSection = () => {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return active;
};

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = NAV_LINKS.map((link) => (
    <a
      key={link.href}
      href={link.href}
      className={`nav-link ${active === link.href ? 'active' : ''}`}
      aria-current={active === link.href ? 'location' : undefined}
      onClick={() => setOpen(false)}
    >
      {link.name}
    </a>
  ));

  return (
    <header className={`site-header ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="site-header-inner">
        <a href="#home" className="brand" aria-label="Dhruvil Patel, back to top">
          <LogoMark className="brand-mark" />
          <span className="brand-name">Dhruvil Patel</span>
        </a>

        <nav className="nav-desktop" aria-label="Sections">{links}</nav>

        <div className="nav-actions">
          <a href={CONTACT.resume} download="Dhruvil_Patel_Resume.pdf" className="resume-button">
            Resume <FiDownload aria-hidden="true" />
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="icon-button nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open && <nav className="nav-mobile" aria-label="Sections">{links}</nav>}
    </header>
  );
};

export default NavBar;
