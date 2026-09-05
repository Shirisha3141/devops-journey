import React, { useState } from 'react';
import { Code, Cloud, Terminal, Database, Shield, Layers, Users, Wrench, Sparkles, CheckCircle } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './Skills.css';

export default function Skills() {
  const { skills } = resumeData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: Layers },
    { name: 'Programming Languages', icon: Code },
    { name: 'Web Development', icon: Database },
    { name: 'Cloud & DevSecOps', icon: Cloud },
    { name: 'Tools', icon: Wrench },
    { name: 'Core Concepts', icon: Terminal },
    { name: 'Soft Skills', icon: Users }
  ];

  const skillGroups = [
    {
      title: 'Programming Languages',
      icon: Code,
      items: skills.programming.map(s => s.name)
    },
    {
      title: 'Web Development',
      icon: Database,
      items: skills.webDevelopment.map(s => s.name)
    },
    {
      title: 'Cloud & DevSecOps',
      icon: Cloud,
      items: skills.cloudDevOpsSecurity.map(s => s.name)
    },
    {
      title: 'Tools',
      icon: Wrench,
      items: skills.tools.map(s => s.name)
    },
    {
      title: 'Core Concepts',
      icon: Terminal,
      items: skills.coreConcepts.map(s => s.name)
    },
    {
      title: 'Soft Skills',
      icon: Users,
      items: skills.softSkills
    }
  ];

  const filteredGroups = activeCategory === 'All' 
    ? skillGroups 
    : skillGroups.filter(g => g.title === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={15} />
            <span>Technical Portfolio</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive, verified inventory of programming languages, web stacks, cloud security tools, and core computer science principles from my resume.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-tabs">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`filter-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={16} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredGroups.map((group, groupIdx) => {
            const GroupIcon = group.icon;
            return (
              <div key={groupIdx} className="glass-card skill-group-card">
                <div className="group-header">
                  <div className="group-icon-wrapper">
                    <GroupIcon size={20} />
                  </div>
                  <h3 className="group-title">{group.title}</h3>
                </div>

                <div className="badges-list">
                  {group.items.map((skillName, idx) => (
                    <div key={idx} className="skill-item-badge">
                      <CheckCircle size={14} className="badge-check" />
                      <span>{skillName}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
