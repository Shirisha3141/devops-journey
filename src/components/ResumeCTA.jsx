import React from 'react';
import { FileText, Download, Eye, CheckCircle2, ShieldCheck } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './ResumeCTA.css';

export default function ResumeCTA({ onOpenResume }) {
  const { personal } = resumeData;

  const handleDownloadDirect = () => {
    onOpenResume();
  };

  return (
    <section className="section resume-cta-section">
      <div className="container">
        <div className="glass-card cta-card">
          <div className="cta-glow-bg" />

          <div className="cta-content">
            <div className="cta-badge">
              <ShieldCheck size={16} />
              <span>Verified Candidate Profile</span>
            </div>

            <h2 className="cta-title">
              Interested in My Technical Profile?
            </h2>

            <p className="cta-description">
              Explore my verified resume for a detailed overview of my academic background, MERN full-stack projects, AWS DevSecOps security experience, and core computer science competencies.
            </p>

            <div className="cta-highlights">
              <div className="cta-hl-item">
                <CheckCircle2 size={16} className="text-tertiary" />
                <span>CGPA 9.0 (SNIST)</span>
              </div>
              <div className="cta-hl-item">
                <CheckCircle2 size={16} className="text-tertiary" />
                <span>AWS DevSecOps & MERN</span>
              </div>
              <div className="cta-hl-item">
                <CheckCircle2 size={16} className="text-tertiary" />
                <span>Available for Placement & Internships</span>
              </div>
            </div>

            <div className="cta-actions">
              <button onClick={onOpenResume} className="btn btn-primary">
                <Eye size={18} />
                <span>View & Print Resume</span>
              </button>

              <button onClick={handleDownloadDirect} className="btn btn-secondary">
                <Download size={18} />
                <span>Download Resume (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
