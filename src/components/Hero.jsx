import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Award, CheckCircle2, ShieldCheck, Server, Code } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './Hero.css';

export default function Hero({ onOpenResume }) {
  const { personal } = resumeData;

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Subtle Grid Ambient Overlay */}
      <div className="hero-bg-overlay" />

      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot" />
            <span>Open to Internships & Full-Time Roles</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personal.name}</span>
          </h1>

          <h2 className="hero-subtitle">
            Computer Science Undergraduate | Full Stack & DevSecOps Engineer
          </h2>

          <p className="hero-description">
            Detail-oriented Computer Science undergraduate (CGPA 9.0) with hands-on experience building scalable MERN web applications, automated DevSecOps cloud pipelines on AWS, and AI-driven recommendation engines.
          </p>

          {/* Quick Metrics Bar */}
          <div className="hero-metrics">
            <div className="metric-pill">
              <span className="metric-val">{personal.cgpa}</span>
              <span className="metric-lbl">CGPA (SNIST)</span>
            </div>
            <div className="metric-pill">
              <span className="metric-val">4+</span>
              <span className="metric-lbl">Core Projects</span>
            </div>
            <div className="metric-pill">
              <span className="metric-val">AWS & MERN</span>
              <span className="metric-lbl">Tech Focus</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-ctas">
            <a href="#projects" onClick={scrollToProjects} className="btn btn-primary">
              <span>View My Work</span>
              <ArrowRight size={18} />
            </a>
            <button onClick={onOpenResume} className="btn btn-secondary">
              <Download size={18} />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Contact / Social links from resume */}
          <div className="hero-socials">
            <span className="social-label">Connect:</span>
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
            <a
              href={`mailto:${personal.email}`}
              className="social-btn"
              aria-label="Email Contact"
              title="Send Email"
            >
              <Mail size={20} />
            </a>
            <div className="location-tag">
              <MapPin size={15} />
              <span>{personal.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Sophisticated Tech / Code Matrix Visual */}
        <div className="hero-visual">
          <div className="visual-card-wrapper">
            {/* Terminal Window Header */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="dot red" />
                <div className="dot yellow" />
                <div className="dot green" />
                <span className="terminal-title">shirisha@devsecops-workstation:~</span>
              </div>
              <div className="terminal-body">
                <div className="code-line"><span className="code-keyword">class</span> <span className="code-class">SoftwareEngineer</span> &#123;</div>
                <div className="code-line indent-1"><span className="code-property">name</span>: <span className="code-string">"{personal.name}"</span>,</div>
                <div className="code-line indent-1"><span className="code-property">education</span>: <span className="code-string">"B.Tech CSE(IT) - SNIST"</span>,</div>
                <div className="code-line indent-1"><span className="code-property">cgpa</span>: <span className="code-number">{personal.cgpa}</span>,</div>
                <div className="code-line indent-1"><span className="code-property">skills</span>: [</div>
                <div className="code-line indent-2"><span className="code-string">"React.js"</span>, <span className="code-string">"Node.js"</span>, <span className="code-string">"AWS"</span>,</div>
                <div className="code-line indent-2"><span className="code-string">"DevSecOps"</span>, <span className="code-string">"Java"</span>, <span className="code-string">"DSA"</span></div>
                <div className="code-line indent-1">],</div>
                <div className="code-line indent-1"><span className="code-property">status</span>: <span className="code-string">"Ready for Opportunities 🚀"</span></div>
                <div className="code-line">&#125;;</div>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <div className="floating-badge badge-1">
              <ShieldCheck size={18} className="badge-icon green" />
              <div>
                <div className="badge-title">DevSecOps Pipeline</div>
                <div className="badge-sub">Automated SAST & AWS</div>
              </div>
            </div>

            <div className="floating-badge badge-2">
              <Server size={18} className="badge-icon indigo" />
              <div>
                <div className="badge-title">MERN Stack</div>
                <div className="badge-sub">20+ RESTful APIs</div>
              </div>
            </div>

            <div className="floating-badge badge-3">
              <Award size={18} className="badge-icon yellow" />
              <div>
                <div className="badge-title">3rd Prize Winner</div>
                <div className="badge-sub">College Project Expo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
