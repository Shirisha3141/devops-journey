import React from 'react';
import { Briefcase, Calendar, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './Experience.css';

export default function Experience() {
  const { experience } = resumeData;

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={15} />
            <span>Practical Training</span>
          </div>
          <h2 className="section-title">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on technical experience in authorization security, access control, and application security architecture.
          </p>
        </div>

        <div className="timeline-container">
          {experience.map((exp) => (
            <div key={exp.id} className="glass-card timeline-card">
              <div className="timeline-badge">
                <ShieldCheck size={24} />
              </div>

              <div className="timeline-header">
                <div>
                  <h3 className="exp-role">{exp.project} — {exp.role}</h3>
                  <div className="exp-org">{exp.organization} ({exp.type})</div>
                </div>

                <div className="exp-duration">
                  <Calendar size={15} />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <div className="exp-body">
                <ul className="exp-highlights-list">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="exp-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="exp-skills-row">
                <Tag size={15} className="text-dim" />
                <div className="exp-tags">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="tech-chip font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
