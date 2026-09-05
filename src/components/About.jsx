import React from 'react';
import { GraduationCap, Code2, ShieldCheck, Cpu, UserCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './About.css';

export default function About() {
  const { personal } = resumeData;

  const keyHighlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Computer Science & IT undergraduate at SNIST maintaining a stellar 9.0 CGPA."
    },
    {
      icon: Code2,
      title: "MERN Stack Expertise",
      description: "Hands-on experience building full-stack web applications with 20+ REST APIs, JWT, and RBAC."
    },
    {
      icon: ShieldCheck,
      title: "DevSecOps & Cloud Security",
      description: "Automating cloud CI/CD pipelines on AWS using CodePipeline, CodeBuild, Terraform, Docker & Bandit SAST."
    },
    {
      icon: Cpu,
      title: "Algorithmic Foundation",
      description: "Strong DSA background in Java with custom self-balancing AVL Tree implementation."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <UserCheck size={15} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate About Building <span className="gradient-text">Scalable & Secure</span> Systems
          </h2>
          <p className="section-subtitle">
            A comprehensive snapshot of my background, technical focus, and value as a technology professional.
          </p>
        </div>

        <div className="about-grid">
          {/* Detailed Summary Card */}
          <div className="glass-card about-main-card">
            <h3 className="about-card-title">
              <Sparkles size={20} className="text-accent" />
              <span>Professional Overview</span>
            </h3>

            <p className="about-text">
              {personal.summary}
            </p>

            <div className="about-bullets">
              <div className="bullet-item">
                <CheckCircle2 size={18} className="bullet-icon" />
                <div>
                  <strong>Degree & Specialization:</strong> {personal.degree} at {personal.institution} ({personal.duration})
                </div>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={18} className="bullet-icon" />
                <div>
                  <strong>Academic Distinction:</strong> Maintained a high academic standard with <strong>CGPA 9.0</strong>
                </div>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={18} className="bullet-icon" />
                <div>
                  <strong>Project Recognition:</strong> Awarded <strong>3rd Prize</strong> in College Project Expo for DevSecOps AWS Security Pipeline
                </div>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={18} className="bullet-icon" />
                <div>
                  <strong>Certifications:</strong> Merit Certificate in DevOps and Full Stack Development
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="about-highlights">
            {keyHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="glass-card highlight-card">
                  <div className="highlight-icon-box">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="highlight-title">{item.title}</h4>
                    <p className="highlight-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
