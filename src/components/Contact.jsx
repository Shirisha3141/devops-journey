import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, MessageSquare, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './Contact.css';

export default function Contact() {
  const { personal } = resumeData;
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={15} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Connect for <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="section-subtitle">
            Whether you are a recruiter, engineering manager, or hiring manager, feel free to reach out via email, phone, or LinkedIn.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Contact Cards */}
          <div className="contact-info-col">
            <div className="glass-card contact-item-card">
              <div className="contact-icon-box">
                <Mail size={22} />
              </div>
              <div className="contact-details">
                <span className="contact-label">Email Address</span>
                <a href={`mailto:${personal.email}`} className="contact-value">
                  {personal.email}
                </a>
              </div>
              <button
                onClick={() => handleCopy(personal.email, 'email')}
                className="copy-btn"
                title="Copy email to clipboard"
              >
                {copiedField === 'email' ? <Check size={16} className="text-tertiary" /> : <Copy size={16} />}
              </button>
            </div>

            <div className="glass-card contact-item-card">
              <div className="contact-icon-box">
                <Phone size={22} />
              </div>
              <div className="contact-details">
                <span className="contact-label">Phone Number</span>
                <a href={`tel:${personal.phone}`} className="contact-value">
                  {personal.phone}
                </a>
              </div>
              <button
                onClick={() => handleCopy(personal.phone, 'phone')}
                className="copy-btn"
                title="Copy phone to clipboard"
              >
                {copiedField === 'phone' ? <Check size={16} className="text-tertiary" /> : <Copy size={16} />}
              </button>
            </div>

            <div className="glass-card contact-item-card">
              <div className="contact-icon-box">
                <MapPin size={22} />
              </div>
              <div className="contact-details">
                <span className="contact-label">Location</span>
                <span className="contact-value">{personal.location}</span>
              </div>
            </div>

            <div className="glass-card social-links-card">
              <span className="social-card-title">Professional Links</span>
              <div className="social-buttons-grid">
                {personal.github && (
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary social-link-btn"
                  >
                    <Github size={18} />
                    <span>GitHub Profile</span>
                  </a>
                )}
                {personal.linkedin && (
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary social-link-btn"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn Profile</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Recruiter Form */}
          <div className="glass-card contact-form-card">
            <h3 className="form-card-title">
              <MessageSquare size={20} className="text-accent" />
              <span>Send a Direct Message</span>
            </h3>

            {submitted ? (
              <div className="form-success-box">
                <div className="success-icon">
                  <Check size={28} />
                </div>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out. I will get back to you promptly at your provided email.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Full Name / Company</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. John Doe / Tech Corp"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="e.g. recruiter@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Hi Shirisha, we reviewed your portfolio and would like to discuss an opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-full-width"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
