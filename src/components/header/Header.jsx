import { useState } from "react"
import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa"

function Header() {
  // const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // const toggleDark = () => {
  //   setIsDark(prev => !prev)
  //   document.documentElement.classList.toggle("dark")
  // }

  const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/project", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoText}>
          <NavLink to='/' className={styles.logoLink}>
            sherozxon
          </NavLink>
        </span>
      </div>

      {/* Desktop nav */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className={styles.darkMode}
          // onClick={toggleDark}
          aria-label="Toggle dark mode"
        >
          {/* {isDark ? <FaSun size={18} /> : <FaMoon size={18} />} */}
          <FaMoon size={18} />
        </button>
      </nav>

      {/* Mobile menu button */}
      <button
        className={styles.mobileMenuButton}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header