'use client';
import { useState, useRef, useEffect } from 'react';
import { projects } from '../../data/portfolioData';
import styles from './Projects.module.css';

const allCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function ProjectCard({ project, index, inView }) {
  return (
    <div
      className={`${styles.card} ${inView ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Card header with emoji */}
      <div className={styles.cardTop} style={{ background: `${project.color}14` }}>
        <div className={styles.cardEmoji} style={{ color: project.color }}>
          {project.emoji}
        </div>
        <div className={styles.cardCategory}>{project.category}</div>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>

        <div className={styles.techList}>
          {project.tech.slice(0, 4).map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="tech-tag">+{project.tech.length - 4}</span>
          )}
        </div>
      </div>

      <div className={styles.cardFooter}>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View Code
        </a>
        {project.live && project.live !== '#' && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.liveBtn}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView(0.1);

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className={`section ${styles.projects}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            Projects
          </div>
          <h2 className="section-title">Things I've <span className="gradient-text">Built</span></h2>
          <p className="section-subtitle">A collection of projects that showcase my skills and interests</p>
        </div>

        {/* Filter */}
        <div className={styles.filters}>
          {allCategories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.activeFilter : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
