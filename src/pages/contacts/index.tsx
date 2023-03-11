import Button from "@/components/Button";
import Image from "next/image";
import styles from './contacts.module.scss'

export default function Contacts() {
  return (
    <div className={styles.container}>
      <strong>Contacts</strong>
      <div className={styles.socialmedias}>
        <div className={styles.instagram}>
          <Image src="/images/instagram.png" alt="Instagram" height={25} width={25} />
          <h1>Instagram</h1>
        </div>
        <div className={styles.github}>
          <Image src="/images/github.png" alt="GitHub" height={25} width={25} />
          <h1>GitHub</h1>
        </div>
        <div className={styles.linkedin}>
          <Image src="/images/linkedin.png" alt="Linkedin" height={25} width={25} />
          <h1>LinkedIn</h1>
        </div>
        <div className={styles.email}>
          <Image src="/images/email.png" alt="Linkedin" height={32} width={32} />
          <h1>azbitomsg@proton.me</h1>
        </div>
      </div>
    </div>
  )
}