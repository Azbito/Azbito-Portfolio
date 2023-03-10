import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>

      <div className={styles.content}>
        <div className={styles.banner}>
          <p className={styles.welcome}>Welcome to my portfolio!</p>
          <button>GO TO MY BIOGRAPHY</button>

        </div>
      </div>
      <div className={styles.azbito}>
        <h1 className={styles.title}>Summary</h1>
        <p className={styles.description}>Ahoy! My name is Thiago and also my nickname is Azbito. I'm a Brazilian front-end developer and pixelartist. I'm always looking forward to improvement.</p>
      </div>
      <Image className={styles.picture} src="/images/photo.jpg" alt="Me" width={500} height={500} />
    </div>
  )
}
