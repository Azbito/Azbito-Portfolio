import { useRouter } from 'next/router'
import styles from './navbar.module.scss'

export default function NavBar() {
  return (
    <div className={styles.bar}>
      <strong className={styles.logo}>AZBITO</strong>
      <div className={styles.items}>
        <p className={styles.pages}>Home</p>
        <p className={styles.pages}>About</p>
        <p className={styles.pages}>Contact</p>
      </div>
    </div>
  )
}