import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoText}>Sherozxon</span>
        <span className={styles.logoDot}></span>
      </div>

      <nav className={styles.nav}>
        <NavLink to='/' end className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link}>
          Home
        </NavLink>
        <NavLink to='/project' className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link}>
          Projects
        </NavLink>
        <NavLink to='/about' className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link}>
          About
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link}>
          Contact
        </NavLink>
      </nav>

      <button className={styles.darkMode} aria-label="Toggle dark mode">
        🌙
      </button>
    </header>
  )
}

export default Header