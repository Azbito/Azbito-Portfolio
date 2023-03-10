import { useRouter } from 'next/router'
import styles from './navbar.module.scss'

export default function NavBar() {
  const router = useRouter()

  // function scrollBack() {
  //   if (router.pathname == "/") {
  //     scroll.scrollToTop()
  //   } else {
  //     router.push('/')
  //   }
  // }

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