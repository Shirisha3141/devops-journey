import React from 'react';
import { Award, Trophy, Users, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './Achievements.css';

export default function Achievements() {
  const { certifications, achievements } = resumeData;

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={15} />
            <span>Honors & Leadership</span>
          </div>
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Recognitions for engineering excellence, competitive project expos, and student organization contributions.
          </p>
        </div>

        <div className="achievements-container">
          {/* Column 1: Certifications */}
          <div className="achieve-column">
            <div className="column-title-box">
              <Award size={20} className="column-icon yellow" />
              <h3>Certifications</h3>
            </div>

            {certifications.map((cert) => (
              <div key={cert.id} className="glass-card cert-card">
                <div className="cert-badge-ribbon">
                  <Star size={16} />
                  <span>Merit</span>
                </div>
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-sub">{cert.issuedFor}</p>
                <p className="cert-details">{cert.details}</p>
              </div>
            ))}
          </div>

          {/* Column 2: Academic & Extracurricular Achievements */}
          <div className="achieve-column">
            <div className="column-title-box">
              <Trophy size={20} className="column-icon indigo" />
              <h3>Expos & Leadership</h3>
            </div>

            {achievements.map((ach) => (
              <div key={ach.id} className="glass-card achieve-card">
                <div className="achieve-header">
                  {ach.id === 'achieve-project-expo' ? (
                    <div className="award-pill">
                      <Trophy size={14} />
                      <span>3rd Prize</span>
                    </div>
                  ) : (
                    <div className="community-pill">
                      <Users size={14} />
                      <span>Student Clubs</span>
                    </div>
                  )}
                  <span className="achieve-category">{ach.category}</span>
                </div>

                <h4 className="achieve-card-title">{ach.title}</h4>
                <p className="achieve-card-desc">{ach.description}</p>

                {ach.id === 'achieve-extracurricular' && (
                  <div className="club-tags">
                    <span className="club-tag">SDC Member</span>
                    <span className="club-tag">Bachpan Prayas</span>
                    <span className="club-tag">CSAC @ SNIST</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
