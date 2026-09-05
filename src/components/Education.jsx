import React from 'react';
import { GraduationCap, Calendar, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './Education.css';

export default function Education() {
  const { education } = resumeData;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={15} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Solid foundation in Computer Science, Data Structures & Algorithms, and Information Technology.
          </p>
        </div>

        <div className="education-grid">
          {education.map((edu, idx) => (
            <div key={idx} className="glass-card edu-card">
              <div className="edu-header">
                <div className="edu-icon-wrapper">
                  <GraduationCap size={26} />
                </div>
                <div className="edu-cgpa-pill">
                  <Award size={16} />
                  <span>CGPA: {edu.cgpa}</span>
                </div>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-field">{edu.field}</h4>
              <p className="edu-institution">{edu.institution}</p>

              <div className="edu-meta-row">
                <div className="edu-meta-item">
                  <Calendar size={15} />
                  <span>Duration: {edu.duration}</span>
                </div>
                <div className="edu-meta-item">
                  <BookOpen size={15} />
                  <span>{edu.status}</span>
                </div>
              </div>

              <div className="edu-highlights">
                {edu.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="edu-highlight-item">
                    <CheckCircle2 size={16} className="text-tertiary" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
