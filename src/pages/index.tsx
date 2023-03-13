import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Grow from '@mui/material/Grow';
import { useRouter } from 'next/router';
import Card from '@/components/Card';
import Divider from '@/components/Divider';

export default function Home() {

  const router = useRouter()

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.banner}>
          <Grow in={true}>
            <p className={styles.welcome}>Welcome to my portfolio!</p>
          </Grow>
          <button onClick={() => router.push('/bio')}>GO TO MY BIOGRAPHY</button>
        </div>
      </div>
      <div className={styles.container}>
        <Image className={styles.picture} src="/images/photo.jpg" alt="Me" width={500} height={500} />
        <div className={styles.azbito}>
          <h1 className={styles.title}>Summary</h1>
          <p className={styles.description}>Ahoy! My name is Thiago and also my nickname is Azbito. I'm a Brazilian front-end developer and pixelartist. I'm always looking forward to improvement.</p>
        </div>
      </div>
      <Divider />
      <div className={styles.cards}>
        <Card iconSizeX={80} iconSizeY={80} image='images/code.svg' alt='Codes' title='My Repositories' description='Getting curious about what I made so far? Check it out!' buttonProps={{ title: "Repositories", onClick: () => router.push('/repositories') }} />
        <Card iconSizeX={80} iconSizeY={80} image='images/chat.svg' alt='Chat' title='How may I help you?' description='Contact me for professional purpose' buttonProps={{ title: "Contacts", onClick: () => router.push('/contacts') }} />
        <Card iconSizeX={80} iconSizeY={80} image='images/pixel.svg' alt='Pixelart' title='My Pixel Frames' description='Getting curious about what I made so far? Check it out!' buttonProps={{ title: "Pixel Frames", onClick: () => router.push('/gallery') }} />
      </div>
    </div>
  )
}
