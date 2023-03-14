import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './navbar.module.scss'
import scrollBack from '@/utils/scroll'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Slide, useMediaQuery } from '@mui/material';
import { animateScroll as scroll } from 'react-scroll'
import Router from 'next/router'

export default function NavBar() {
  const [isBlur, setIsBlur] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const renderingMobile = useMediaQuery("(max-width: 856px)");

  const router = useRouter();

  function onScroll() {
    setIsBlur(window.scrollY < 100);
  }

  function scrollBack() {
    if (Router.pathname == '/') {
      scroll.scrollToTop()
    } else {
      Router.push('/')
    }
    setIsOpenMenu(false)
  }

  function goToAbout() {
    Router.push('/bio')
    setIsOpenMenu(false)
  }

  function goToContacts() {
    Router.push('/contacts')
    setIsOpenMenu(false)
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
      <div className={styles.button}>
        <MenuIcon className={styles.hamburguer} onClick={() => setIsOpenMenu(true)} />
      </div>
      <Slide in={isOpenMenu && renderingMobile} direction="down">
        <div className={styles.items}>
          <CloseIcon onClick={() => setIsOpenMenu(false)} />
          <p className={styles.pages} onClick={scrollBack}>Home</p>
          <p className={styles.pages} onClick={goToAbout}>About</p>
          <p className={styles.pages} onClick={goToContacts}>Contacts</p>
        </div>
      </Slide>
      {!renderingMobile &&
        <div className={styles.items}>
          <p className={styles.pages} onClick={scrollBack}>Home</p>
          <p className={styles.pages} onClick={() => router.push('/bio')}>About</p>
          <p className={styles.pages} onClick={() => router.push('/contacts')}>Contacts</p>
        </div>
      }
    </div>
  )
}