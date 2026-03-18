import React from 'react';
import styles from './About.module.css';
import { NavLink } from 'react-router-dom';

const skills = [
  { name: 'React', level: 70 },
  { name: 'JavaScript', level: 75 },
  { name: 'CSS / Module CSS', level: 88 },
  { name: 'HTML5', level: 95 },
  { name: 'Git & GitHub', level: 80 },
  { name: 'Responsive Design', level: 92 },
  { name: 'Redux toolkit', level: 45 },
  { name: "Tailwind CSS", level: 50 }
];



function About() {
  return (
    <div className={styles.page}>
      <div className={styles.noiseBg} />

      <div className={styles.container}>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <span className={styles.eyebrow}>Frontend Developer</span>
            <h1 className={styles.name}>
              Eshmamatov<br />
              <em className={styles.nameAccent}>Sherozxon</em>
            </h1>
            <p className={styles.bio}>
              Salom! Men Sherozxon — frontend dasturchiman.
              Zamonaviy, foydalanuvchi uchun qulay va
              chiroyli web ilovalar yaratish
            </p>
            <div className={styles.heroBadges}>
              <span className={styles.heroBadge}>⚡ React</span>
              <span className={styles.heroBadge}>🎨 CSS</span>
              <span className={styles.heroBadge}>📦 JavaScript</span>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.avatarWrap}>
              <div className={styles.avatarRing} />
              <div className={styles.avatar}>ES</div>
              <div className={styles.avatarDot} />
            </div>
          </div>
        </section>

        {/* Stats */}
        {/* <section className={styles.stats}>
          {[
            { val: '2+', label: 'Yillik tajriba' },
            { val: '15+', label: 'Loyiha' },
            { val: '100%', label: 'Sifat' },
          ].map((s) => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statVal}>{s.val}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </section> */}

        {/* Skills */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>Ko'nikmalar</span>
            <h2 className={styles.sectionTitle}>Texnologiyalar</h2>
          </div>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <div key={skill.name} className={styles.skillItem}>
                <div className={styles.skillTop}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillPercent}>{skill.level}%</span>
                </div>
                <div className={styles.skillTrack}>
                  <div
                    className={styles.skillFill}
                    style={{ '--w': `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        {/* Projects */}
        {/* <section className={styles.section}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>Portfolio</span>
            <h2 className={styles.sectionTitle}>Loyihalar</h2>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((p, i) => (
              <div key={p.title} className={styles.projectCard}>
                <span className={styles.projectYear}>{p.year}</span>
                <div className={styles.projectNum}>0{i + 1}</div>
                <h3 className={styles.projectTitle}>{p.title}</h3>
                <p className={styles.projectDesc}>{p.desc}</p>
                <div className={styles.projectTags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.projectTag}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section> */}

        <div className={styles.divider} />

        {/* CTA */}
        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Birga ishlaylikmi?</h2>
          <p className={styles.ctaText}>
            Yangi loyiha yoki hamkorlik bo'yicha murojaat qiling.
          </p>
          < NavLink to="/contact" className={styles.ctaBtn}>
            Bog'lanish <span>→</span>
          </ NavLink>
        </section>

      </div>
    </div>
  );
}

export default About;