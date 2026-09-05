import React, { useState, useEffect } from 'react';
import { FolderGit2, Github, Award, CheckCircle2, Zap, Shield, Cpu, Layers, X, Eye, Maximize2, ChevronLeft, ChevronRight, User, HelpCircle, Code2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './Projects.css';

export default function Projects() {
  const { projects } = resumeData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      setActiveImageIndex(0);
    }
  }, [selectedProject]);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'cartify-ai': return Zap;
      case 'devsecops-pipeline': return Shield;
      case 'campus-connect': return Layers;
      case 'avl-tree': return Cpu;
      default: return FolderGit2;
    }
  };

  const getImagePath = (imageRelPath) => {
    if (!imageRelPath) return '';
    const baseUrl = import.meta.env.BASE_URL || '/';
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
    return cleanBase + imageRelPath.replace(/^\//, '');
  };

  const currentGallery = selectedProject?.gallery && selectedProject.gallery.length > 0
    ? selectedProject.gallery
    : selectedProject?.image
      ? [{ url: selectedProject.image, caption: selectedProject.title }]
      : [];

  const currentImage = currentGallery[activeImageIndex] || currentGallery[0];

  const handleNextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % currentGallery.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
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
            Real-world applications spanning AI recommendation systems, automated cloud DevSecOps pipelines, MERN full-stack platforms, and data structures.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = getProjectIcon(project.id);
            const imageUrl = getImagePath(project.image);

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

                {/* Project Showcase Image */}
                {imageUrl && (
                  <div className="project-image-container">
                    <img
                      src={imageUrl}
                      alt={project.title}
                      className="project-card-img"
                      loading="lazy"
                    />
                    <div className="project-img-overlay">
                      <span className="view-overlay-btn">
                        <Eye size={16} />
                        <span>View Project Case Study</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Below Image: Project Info */}
                <div className="project-card-body">
                  <div className="project-card-header">
                    <div className="project-icon-box">
                      <Icon size={20} />
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
                      <Eye size={16} />
                      <span>Explore Case Study</span>
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
              </div>
            );
          })}
        </div>
      </div>

      {/* Comprehensive Case Study Project Detail Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-card case-study-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close Project Case Study"
            >
              <X size={20} />
            </button>

            {/* Modal Header Title */}
            <div className="modal-header-info">
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
            </div>

            {/* Interactive Image Gallery Component */}
            {currentGallery.length > 0 && (
              <div className="case-study-gallery">
                {/* Main Large Active Image */}
                <div className="gallery-featured-box" onClick={() => setLightboxOpen(true)}>
                  <img
                    src={getImagePath(currentImage.url)}
                    alt={currentImage.caption || selectedProject.title}
                    className="gallery-featured-img"
                  />
                  
                  <button
                    className="gallery-zoom-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxOpen(true);
                    }}
                    title="Expand Image Lightbox"
                  >
                    <Maximize2 size={18} />
                  </button>

                  {currentGallery.length > 1 && (
                    <>
                      <button className="gallery-nav-btn prev" onClick={handlePrevImage}>
                        <ChevronLeft size={20} />
                      </button>
                      <button className="gallery-nav-btn next" onClick={handleNextImage}>
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}

                  {currentImage.caption && (
                    <div className="gallery-caption-bar">
                      <span>{currentImage.caption}</span>
                    </div>
                  )}
                </div>

                {/* Thumbnails Row */}
                {currentGallery.length > 1 && (
                  <div className="gallery-thumbnails-row">
                    {currentGallery.map((img, idx) => (
                      <div
                        key={idx}
                        className={`thumbnail-item ${idx === activeImageIndex ? 'active' : ''}`}
                        onClick={() => setActiveImageIndex(idx)}
                      >
                        <img
                          src={getImagePath(img.url)}
                          alt={img.caption || `Thumbnail ${idx + 1}`}
                          className="thumbnail-img"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Metrics Bar */}
            {selectedProject.metrics && (
              <div className="case-study-metrics-bar">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} className="case-study-metric-card">
                    <span className="cs-metric-val">{m.value}</span>
                    <span className="cs-metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Case Study Content Sections */}
            <div className="case-study-body">
              {/* Problem / Use Case Box */}
              {selectedProject.problemUseCase && (
                <div className="case-study-box box-problem">
                  <div className="box-title">
                    <HelpCircle size={18} className="text-secondary" />
                    <span>Problem & Use Case</span>
                  </div>
                  <p>{selectedProject.problemUseCase}</p>
                </div>
              )}

              {/* Role & Contribution Box */}
              {selectedProject.roleContribution && (
                <div className="case-study-box box-role">
                  <div className="box-title">
                    <User size={18} className="text-accent" />
                    <span>Role & Key Contributions</span>
                  </div>
                  <p>{selectedProject.roleContribution}</p>
                </div>
              )}

              {/* Project Description */}
              <div className="modal-section">
                <h4>Project Overview</h4>
                <p className="cs-description">{selectedProject.description}</p>
              </div>

              {/* Key Accomplishments & Features */}
              <div className="modal-section">
                <h4>Key Features & Engineering Highlights</h4>
                <ul className="modal-highlights-list">
                  {selectedProject.highlights.map((h, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="text-tertiary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="modal-section">
                <h4>Technologies & Tools Architecture</h4>
                <div className="project-tech-chips">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-chip font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
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
                  <span>Close Case Study</span>
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

      {/* Lightbox Modal for Fullscreen Image Preview */}
      {lightboxOpen && currentImage && (
        <div className="lightbox-backdrop" onClick={() => setLightboxOpen(false)}>
          <button className="lightbox-close-btn" onClick={() => setLightboxOpen(false)}>
            <X size={24} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={getImagePath(currentImage.url)}
              alt={currentImage.caption || 'Expanded Project View'}
              className="lightbox-img"
            />
            {currentImage.caption && (
              <div className="lightbox-caption">{currentImage.caption}</div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
