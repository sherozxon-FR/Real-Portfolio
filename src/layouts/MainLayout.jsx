import { Outlet } from "react-router-dom"
import Header from '../components/header/Header'
import styles from './MainLayout.module.css'

function MainLayout() {
  return (
    <section className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </section>
  )
}

export default MainLayout