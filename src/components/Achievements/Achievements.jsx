'use client';
import { useRef, useEffect, useState } from 'react';
import { achievements } from '../../data/portfolioData';
import styles from './Achievements.module.css';

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

export default function Achievements() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="achievements" className={`section ${styles.achievements}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Achievements
          </div>
          <h2 className="section-title">Recognition & <span className="gradient-text">Milestones</span></h2>
          <p className="section-subtitle">Highlights from my academic and professional journey</p>
        </div>

        <div className={styles.grid}>
          {achievements.map((a, i) => (
            <div
              key={a.id}
              className={`${styles.card} ${inView ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className={styles.iconArea} style={{ background: `${a.color}14` }}>
                <span className={styles.icon}>{a.icon}</span>
                <div className={styles.glow} style={{ background: a.color }} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.desc}>{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
