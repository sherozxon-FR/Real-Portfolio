
import { useState } from 'react'
import Image from '../../image/image.png'
import styles from './Project.module.css'

const projects = [
  {
    id: 1,
    img: Image,
    title: 'E-Commerce Platform',
    description: 'javascript va localStorage asosida qurilgan to\'liq funksional onlayn do\'kon. ',
    link: 'https://shop-loyhasi.vercel.app/',
    tag: 'Javascript',
  }

]

function ProjectCard({ project, index }) {



  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className={styles.imageWrap}>
        <img src={project.img} alt={project.title} className={styles.img} />
        <span className={styles.tag}>{project.tag}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <span>Ko'rish</span>
          <svg viewBox="0 0 16 16" fill="none" className={styles.arrow}>
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </article>
  )
}

function Project() {
  const [OpenProject, setOpenProject] = useState(true)



  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Portfolio</p>
        <h1 className={styles.heading}>Mening Loyihalarim</h1>
        <p className={styles.sub}>Har bir loyiha — yangi muammo va yangi yechim.</p>
      </header>

      {OpenProject ? (
        <div className={styles.grid}>
          {projects.map((project, i) => (<ProjectCard key={project.id} project={project} index={i} />))}
        </div>
      )
        :
        (<div className={styles.empty}>
          <p className={styles.emptyText}>Loyihalar sahifasi tez orada yangilanadi...</p>
        </div>
        )}
    </div>
  )
}

export default Project