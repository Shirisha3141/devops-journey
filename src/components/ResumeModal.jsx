import React from 'react';
import { X, Download, Printer, ExternalLink, ShieldCheck, Mail, Phone, MapPin, Github, Linkedin, Award } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './ResumeModal.css';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, skills, projects, experience, education, certifications, achievements } = resumeData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Triggers download of generated PDF or opening print view
    window.print();
  };

  return (
    <div className="resume-modal-backdrop" onClick={onClose}>
      <div className="resume-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Controls Bar */}
        <div className="resume-modal-toolbar">
          <div className="toolbar-left">
            <ShieldCheck size={18} className="text-tertiary" />
            <span className="toolbar-title">Verified Candidate Resume Document</span>
          </div>

          <div className="toolbar-actions">
            <button onClick={handlePrint} className="btn btn-secondary btn-sm" title="Print Resume">
              <Printer size={16} />
              <span>Print</span>
            </button>
            <button onClick={handleDownloadPDF} className="btn btn-primary btn-sm" title="Save as PDF">
              <Download size={16} />
              <span>Download PDF</span>
            </button>
            <button onClick={onClose} className="resume-close-btn" aria-label="Close Resume Viewer">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Formatted Resume Paper View */}
        <div className="resume-paper" id="printable-resume">
          {/* Header */}
          <div className="paper-header">
            <h1 className="paper-name">{personal.name}</h1>
            <div className="paper-contact-bar">
              <span>{personal.location}</span>
              <span>•</span>
              <a href={`tel:${personal.phone}`}>{personal.phone}</a>
              <span>•</span>
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
              <span>•</span>
              <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
              <span>•</span>
              <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="paper-section">
            <h2 className="paper-section-title">PROFILE SUMMARY</h2>
            <p className="paper-text">{personal.summary}</p>
          </div>

          {/* Education */}
          <div className="paper-section">
            <h2 className="paper-section-title">EDUCATION</h2>
            {education.map((edu, idx) => (
              <div key={idx} className="paper-item">
                <div className="paper-item-header">
                  <strong>{edu.degree}, {edu.institution}</strong>
                  <span className="paper-date">{edu.duration}</span>
                </div>
                <div className="paper-item-sub">CGPA - {edu.cgpa}</div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="paper-section">
            <h2 className="paper-section-title">SKILLS</h2>
            <div className="paper-skills-grid">
              <div>
                <strong>Programming Languages:</strong> Python, Java, C, JavaScript
              </div>
              <div>
                <strong>Tools:</strong> Git, GitHub, VS Code, MS Office, Canva
              </div>
              <div>
                <strong>Web Development:</strong> HTML5, CSS3, JavaScript, Responsive Web Design, Node.js, SQL, MySQL, MERN Stack developer
              </div>
              <div>
                <strong>Core Concepts:</strong> DSA, SQL, OOP, DBMS, Operating Systems, Basics of Machine Learning
              </div>
              <div>
                <strong>Cloud & DevOps, Security:</strong> AWS, CI/CD, Docker, Terraform, DevSecOps, Bandit SAST, Cloud Security, Secure CI/CD
              </div>
              <div>
                <strong>Soft Skills:</strong> Team Collaboration, Communication, Leadership, Adaptability, Time Management
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="paper-section">
            <h2 className="paper-section-title">PROJECTS</h2>
            {projects.map((proj) => (
              <div key={proj.id} className="paper-item">
                <div className="paper-item-header">
                  <strong>{proj.title}</strong>
                  {proj.github && (
                    <span className="paper-link">GitHub: {proj.github}</span>
                  )}
                </div>
                <ul className="paper-bullet-list">
                  {proj.highlights.map((hl, hlIdx) => (
                    <li key={hlIdx}>{hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Internship Experience */}
          <div className="paper-section">
            <h2 className="paper-section-title">INTERNSHIP EXPERIENCE</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="paper-item">
                <div className="paper-item-header">
                  <strong>{exp.project}</strong>
                  <span className="paper-date">{exp.duration}</span>
                </div>
                <ul className="paper-bullet-list">
                  {exp.highlights.map((hl, hlIdx) => (
                    <li key={hlIdx}>{hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="paper-section">
            <h2 className="paper-section-title">CERTIFICATIONS</h2>
            {certifications.map((cert) => (
              <div key={cert.id} className="paper-item">
                <strong>{cert.title}</strong>
                <ul className="paper-bullet-list">
                  <li>{cert.details}</li>
                </ul>
              </div>
            ))}
          </div>

          {/* Academic & Extracurricular Achievements */}
          <div className="paper-section">
            <h2 className="paper-section-title">ACADEMIC AND EXTRACURRICULAR ACHIEVEMENTS</h2>
            <ul className="paper-bullet-list">
              {achievements.map((ach) => (
                <li key={ach.id}>{ach.description}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
