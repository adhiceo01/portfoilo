'use client';
import { useState, useRef, useEffect } from 'react';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import styles from './Contact.module.css';

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

const contactDetails = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: '#4285f4',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.89 12.5 19.79 19.79 0 0 1 1.82 3.93 2 2 0 0 1 3.8 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.12z"/></svg>,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: '#34a853',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    label: 'LinkedIn',
    value: 'adhithya-k-390780292',
    href: socialLinks.linkedin,
    color: '#1a73e8',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
    label: 'GitHub',
    value: 'DEV10ADHI',
    href: socialLinks.github,
    color: '#fbbc04',
  },
];

export default function Contact() {
  const [ref, inView] = useInView(0.1);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) { setErrors(validation); return; }
    setStatus('sending');

    // Replace these with your actual EmailJS credentials from emailjs.com
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    try {
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        to_email: personalInfo.email,
      }, PUBLIC_KEY);
      setStatus('success');
    } catch (err) {
      // Fallback: open mailto
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
      window.open(mailtoUrl);
      setStatus('success');
    }
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className={`section ${styles.contact}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Contact
          </div>
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
          <p className="section-subtitle">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
        </div>

        <div className={`${styles.grid} ${inView ? styles.visible : ''}`}>
          {/* Left info panel */}
          <div className={styles.infoPanel}>
            <div className={styles.infoBanner}>
              <div className={styles.bannerIcon}>✉️</div>
              <div>
                <h3 className={styles.bannerTitle}>Open to Opportunities</h3>
                <p className={styles.bannerText}>Currently looking for backend developer roles and exciting projects to collaborate on.</p>
              </div>
            </div>

            <div className={styles.contactList}>
              {contactDetails.map((item, i) => (
                <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={styles.contactItem}>
                  <div className={styles.contactIconWrap} style={{ background: `${item.color}14`, color: item.color }}>
                    {item.icon}
                  </div>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactLabel}>{item.label}</span>
                    <span className={styles.contactValue}>{item.value}</span>
                  </div>
                  <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right form panel */}
          <div className={styles.formPanel}>
            {status === 'success' ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>✅</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="name">Your Name</label>
                    <input id="name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} className={`${styles.input} ${errors.name ? styles.inputError : ''}`} />
                    {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} className={`${styles.input} ${errors.email ? styles.inputError : ''}`} />
                    {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" placeholder="Project collaboration, job opportunity..." value={form.subject} onChange={handleChange} className={`${styles.input} ${errors.subject ? styles.inputError : ''}`} />
                  {errors.subject && <span className={styles.errorMsg}>{errors.subject}</span>}
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell me about your project or idea..." value={form.message} onChange={handleChange} className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`} />
                  {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                </div>

                <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <><span className={styles.spinner} /> Sending...</>
                  ) : (
                    <><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message</>
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
