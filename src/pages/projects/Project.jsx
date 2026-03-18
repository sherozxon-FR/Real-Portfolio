
import { useState } from 'react'
import styles from './Project.module.css'

const projects = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    title: 'E-Commerce Platform',
    description: 'React va Node.js asosida qurilgan to\'liq funksional onlayn do\'kon. Foydalanuvchi autentifikatsiyasi, savat va to\'lov tizimi mavjud.',
    link: 'https://github.com/',
    tag: 'React',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80',
    title: 'Mobile Task App',
    description: 'Flutter bilan yozilgan vazifalar boshqaruv ilovasi. Real-time sinxronizatsiya va offline rejim qo\'llab-quvvatlanadi.',
    link: 'https://github.com',
    tag: 'Flutter',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    title: 'Analytics Dashboard',
    description: 'D3.js va Vue.js yordamida qurilgan interaktiv ma\'lumotlar vizualizatsiya paneli. Jonli grafik va statistikalar.',
    link: 'https://github.com',
    tag: 'Vue.js',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
    title: 'AI Image Generator',
    description: 'Python FastAPI backend va Next.js frontend bilan ishlangan sun\'iy intellekt asosidagi rasm generatsiya xizmati.',
    link: 'https://github.com',
    tag: 'Next.js',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
    title: 'Real-time Chat',
    description: 'Socket.io va Express.js orqali qurilgan real vaqtli chat ilovasi. Guruh xonalari va fayl almashish imkoniyatlari bor.',
    link: 'https://github.com',
    tag: 'Node.js',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
    title: 'Crypto Tracker',
    description: 'Kripto valyutalar narxini kuzatuvchi dashboard. WebSocket orqali jonli narxlar va portfolio hisob-kitobi.',
    link: 'https://github.com',
    tag: 'TypeScript',
  },
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
  const [OpenProject, setOpenProject] = useState(false)
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