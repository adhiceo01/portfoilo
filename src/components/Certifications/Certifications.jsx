'use client';
import { useRef, useEffect, useState } from 'react';
import { certifications } from '../../data/portfolioData';
import styles from './Certifications.module.css';

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

export default function Certifications() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="certifications" className={`section ${styles.certifications}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
            Certifications
          </div>
          <h2 className="section-title">Credentials & <span className="gradient-text">Learning</span></h2>
          <p className="section-subtitle">Continuous learning through structured courses and certifications</p>
        </div>

        <div className={styles.grid}>
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className={`${styles.card} ${inView ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={styles.iconWrap} style={{ background: `${cert.color}18` }}>
                <span className={styles.icon}>{cert.icon}</span>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{cert.name}</h3>
                <div className={styles.meta}>
                  <span className={styles.issuer}>{cert.issuer}</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.date}>{cert.date}</span>
                </div>
              </div>
              <div className={styles.badge} style={{ color: cert.color, background: `${cert.color}14` }}>
                Certified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
