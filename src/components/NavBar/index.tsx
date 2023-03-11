import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './navbar.module.scss'
import scrollBack from '@/utils/scroll'

export default function NavBar() {
  const [isBlur, setIsBlur] = useState(false)
  const router = useRouter();

  function onScroll() {
    setIsBlur(window.scrollY < 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={isBlur ? styles.bar : styles.blur}>
      <strong className={styles.logo} onClick={scrollBack}>AZBITO</strong>
      <div className={styles.items}>
        <p className={styles.pages} onClick={scrollBack}>Home</p>
        <p className={styles.pages} onClick={() => router.push('/bio')}>About</p>
        <p className={styles.pages} onClick={() => router.push('/contacts')}>Contacts</p>
      </div>
    </div>
  )
}