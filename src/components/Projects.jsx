import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Award, CheckCircle2, Zap, Shield, Cpu, Layers, X, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './Projects.css';

export default function Projects() {
  const { projects } = resumeData;
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'cartify-ai': return Zap;
      case 'devsecops-pipeline': return Shield;
      case 'campus-connect': return Layers;
      case 'avl-tree': return Cpu;
      default: return FolderGit2;
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={15} />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world applications spanning AI-driven recommendation engines, automated cloud DevSecOps pipelines, MERN full-stack platforms, and data structures.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = getProjectIcon(project.id);
            return (
              <div
                key={project.id}
                className="glass-card project-card"
                onClick={() => setSelectedProject(project)}
              >
                {/* Award Badge if Present */}
                {project.award && (
                  <div className="project-award-badge">
                    <Award size={14} />
                    <span>{project.award}</span>
                  </div>
                )}

                <div className="project-card-header">
                  <div className="project-icon-box">
                    <Icon size={22} />
                  </div>
                  <span className="project-category">{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Key Metrics Pill Row */}
                {project.metrics && (
                  <div className="project-metrics-row">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="project-metric-pill">
                        <span className="metric-num">{m.value}</span>
                        <span className="metric-text">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div className="project-tech-chips">
                  {project.technologies.slice(0, 5).map((tech, idx) => (
                    <span key={idx} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="tech-chip tech-chip-more">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Footer Buttons */}
                <div className="project-card-footer">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <span>Details & Architecture</span>
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link-btn"
                      onClick={(e) => e.stopPropagation()}
                      title="View GitHub Repository"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close Project Details"
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <span className="project-category">{selectedProject.category}</span>
              {selectedProject.award && (
                <div className="project-award-badge inline-badge">
                  <Award size={14} />
                  <span>{selectedProject.award}</span>
                </div>
              )}
            </div>

            <h2 className="modal-title">{selectedProject.title}</h2>
            <p className="modal-subtitle">{selectedProject.subtitle}</p>

            <div className="modal-section">
              <h4>Overview & Key Features</h4>
              <p>{selectedProject.description}</p>
            </div>

            <div className="modal-section">
              <h4>Key Accomplishments</h4>
              <ul className="modal-highlights-list">
                {selectedProject.highlights.map((h, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h4>Technologies & Tools Used</h4>
              <div className="project-tech-chips">
                {selectedProject.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-chip font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-actions">
              {selectedProject.github ? (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Github size={18} />
                  <span>View Repository on GitHub</span>
                </a>
              ) : (
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn btn-primary"
                >
                  <span>Close Overview</span>
                </button>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="btn btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
