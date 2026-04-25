'use client';
import { useState, useRef, useEffect } from 'react';
import { skills } from '../../data/portfolioData';
import styles from './Skills.module.css';

const categories = ['All', ...Array.from(new Set(skills.map(s => s.category)))];

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

function SkillCard({ skill, index, inView }) {
  return (
    <div
      className={`${styles.skillCard} ${inView ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className={styles.skillIconWrap}>
        <img src={skill.icon} alt={skill.name} className={styles.skillIcon} width={36} height={36} />
      </div>
      <div className={styles.skillInfo}>
        <div className={styles.skillHeader}>
          <span className={styles.skillName}>{skill.name}</span>
          <span className={styles.skillLevel}>{skill.level}%</span>
        </div>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressBar}
            style={{ width: inView ? `${skill.level}%` : '0%', transitionDelay: `${index * 50 + 300}ms` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView(0.1);

  const filtered = activeCategory === 'All' ? skills : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className={`section ${styles.skills}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            Tech Stack
          </div>
          <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
          <p className="section-subtitle">Tools and technologies I use to build scalable solutions</p>
        </div>

        {/* Category filter chips */}
        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterChip} ${activeCategory === cat ? styles.activeChip : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className={styles.grid}>
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
