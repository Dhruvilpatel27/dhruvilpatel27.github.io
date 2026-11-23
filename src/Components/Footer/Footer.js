import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <span>© {new Date().getFullYear()} Dhruvil Patel · Designed and built by me with React, deployed on GitHub Pages.</span>
      <a href="#home" className="footer-top">Back to top ↑</a>
    </div>
  </footer>
);

export default Footer;
