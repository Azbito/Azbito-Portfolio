import styles from './sendemailform.module.scss'
import emailjs from 'emailjs-com'
import { useState } from 'react';
import Loader from '../Loader';
import isValidEmail from '@/utils/isValidEmail';

export default function SendEmailForm() {
  const [isLoading, setIsLoading] = useState(false)

  function sendEmail(e: any) {
    const email = e.target.email.value;
    if (isValidEmail(email)) {
      setIsLoading(true)
      e.preventDefault();
      emailjs.sendForm('service_2e2ny8l', 'template_hh5limr', e.target, `${process.env.NEXT_PUBLIC_API_KEY}`
      )
        .then((result) => {
          alert(result.text);
          setIsLoading(false)
        }, (error) => {
          alert(error.text);
          setIsLoading(false)
        });
      e.target.reset()
      return
    }
    alert("Please, type a valid email.")
  }

  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Send me an email</h1>
          <form onSubmit={sendEmail} className={styles.form}>
            <div className={styles.inputbox}>
              <input name="name" />
              <span>Name</span>
            </div>
            <div className={styles.inputbox}>
              <input name="email" onBlur={() => isValidEmail} />
              <span>Email</span>
            </div>
            <div className={styles.textareabox}>
              <span>Message</span>
              <textarea name="message" />
            </div>
            <button type="submit" value="Send Message">Send</button>
          </form>
        </div>
      </div>
    </>
  )
}