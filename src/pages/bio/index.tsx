import styles from '../../styles/bio.module.scss'

export default function Bio() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>About me</h1>
        <div className={styles.description}>
          <p>My name is Thiago and my nickname is Azbito. I'm 18, brazilian, front-end developer and artist. I'm able to talk in Portuguese, English and French. Studying coding since november, 2022, I decided to deepen in this branch.</p>
        </div>
      </div>
    </div>
  )
}