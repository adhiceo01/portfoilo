'use client';
import { useRef, useEffect, useState } from 'react';
import { experience } from '../../data/portfolioData';
import styles from './Experience.module.css';

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

export default function Experience() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="experience" className={`section ${styles.experience}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
            Experience
          </div>
          <h2 className="section-title">Professional <span className="gradient-text">Journey</span></h2>
          <p className="section-subtitle">Internships and hands-on work experience</p>
        </div>

        <div className={styles.timeline}>
          {experience.map((exp, i) => (
            <div
              key={exp.id}
              className={`${styles.item} ${inView ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Timeline line */}
              <div className={styles.lineWrap}>
                <div className={styles.dot} style={{ background: exp.color }} />
                {i < experience.length - 1 && <div className={styles.line} />}
              </div>

              {/* Card */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardTop}>
                    <div>
                      <h3 className={styles.title}>{exp.title}</h3>
                      <div className={styles.company}>
                        <span className={styles.companyName}>{exp.company}</span>
                        <span className={styles.typeBadge}>{exp.type}</span>
                      </div>
                    </div>
                    <div className={styles.period}>{exp.period}</div>
                  </div>
                </div>

                <p className={styles.description}>{exp.description}</p>

                <div className={styles.footer}>
                  <div className={styles.tags}>
                    {exp.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  {exp.certificate && (
                    <a href={exp.certificate} target="_blank" rel="noopener noreferrer" className={styles.certLink}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                      Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
