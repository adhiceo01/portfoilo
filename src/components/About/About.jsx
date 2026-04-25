'use client';
import { useRef, useEffect, useState } from 'react';
import { personalInfo, aboutMe, socialLinks } from '../../data/portfolioData';
import styles from './About.module.css';

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function About() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="about" className={`section ${styles.about}`} ref={ref}>
      <div className="container">
        {/* Header */}
        <div className={`section-header ${inView ? styles.visible : ''}`}>
          <div className="section-chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
            About Me
          </div>
          <h2 className="section-title">Passionate about <span className="gradient-text">backend engineering</span></h2>
          <p className="section-subtitle">A developer who loves building things that scale</p>
        </div>

        <div className={styles.grid}>
          {/* Left: avatar + stats */}
          <div className={`${styles.left} ${inView ? styles.slideIn : ''}`}>
            <div className={styles.avatarCard}>
              {/* Avatar placeholder with Google-color border */}
              <div className={styles.avatarBorder}>
                <div className={styles.avatar}>
                  <span className={styles.avatarInitials}>AK</span>
                </div>
              </div>
              <div className={styles.avatarInfo}>
                <h3>{personalInfo.name}</h3>
                <p>{personalInfo.role}</p>
                <div className={styles.avatarLinks}>
                  <a href={socialLinks.email} className={styles.avatarLink}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    {personalInfo.email}
                  </a>
                  <a href={socialLinks.phone} className={styles.avatarLink}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.89 12.5"/></svg>
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              {aboutMe.stats.map((s, i) => (
                <div key={i} className={styles.stat}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: text + highlights */}
          <div className={`${styles.right} ${inView ? styles.slideInRight : ''}`}>
            <div className={styles.textBlock}>
              {aboutMe.description.split('\n\n').map((para, i) => (
                <p key={i} className={styles.para}>{para}</p>
              ))}
            </div>

            <div className={styles.highlights}>
              {aboutMe.highlights.map((h, i) => (
                <div key={i} className={styles.highlight}>
                  <div className={styles.highlightIcon}>{h.icon}</div>
                  <div>
                    <div className={styles.highlightLabel}>{h.label}</div>
                    <div className={styles.highlightDesc}>{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <a href="/files/ADHITHYA.pdf" download className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Resume
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outlined">
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
