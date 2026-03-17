import styles from './Home.module.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className={styles.container}>

      {/* Orqa fon bezaklari */}
      <div className={styles.bgBlob1} />
      <div className={styles.bgBlob2} />

      {/* Hero */}
      <section className={styles.hero}>
        <p className={styles.greeting}></p>
        <h1 className={styles.name}> Frontend</h1>
        <h2 className={styles.role}>Frontend Developer</h2>
        <p className={styles.bio}>
          Zamonaviy va chiroyli interfeyslar yarataman. React, CSS va ijodiy
          yondashuv bilan foydalanuvchi tajribasini yangi darajaga olib chiqaman.
        </p>

        <div className={styles.actions}>
          <NavLink to="/project" className={styles.btnPrimary}>Loyihalarni ko'rish</NavLink>
          <NavLink to="/contact" className={styles.btnOutline}>Bog'lanish</NavLink>
        </div>

      </section>

      {/* Texnologiyalar */}
     

    </div>
  )
}

export default Home