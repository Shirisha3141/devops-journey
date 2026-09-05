import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './Footer.css';

export default function Footer() {
  const { personal } = resumeData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-icon">SM</div>
            <div>
              <h3 className="footer-title">{personal.name}</h3>
              <p className="footer-subtitle">{personal.degree} Undergraduate | SNIST</p>
            </div>
          </div>

          <div className="footer-socials">
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="GitHub"
              >
                <Github size={18} />
              </a>
            )}
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            )}
            <a
              href={`mailto:${personal.email}`}
              className="social-btn"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Shirisha Mandha. Built with precision for recruiters & placement evaluation.
          </p>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to Top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
