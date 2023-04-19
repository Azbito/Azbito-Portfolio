import { Box, InputLabel, TextField } from '@mui/material';
import styles from './sendemailform.module.scss'
import emailjs from 'emailjs-com'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function SendEmailForm() {

  function sendEmail(e: any) {
    e.preventDefault();

    emailjs.sendForm('service_2e2ny8l', 'template_hh5limr', e.target, 'UO8RAbjDr7wffFbuB')
      .then((result) => {
        alert(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Send me an email</h1>
        <form onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: 32, width: "50% " }}>
          <div className={styles.inputbox}>
            <input name="name" />
            <span>Name</span>
          </div>
          <div className={styles.inputbox}>
            <input name="email" />
            <span>Email</span>
          </div>
          <div className={styles.textareabox}>
            <span>Message</span>
            <textarea name="message" />
          </div>

          <button type="submit" value="Send Message">Enviar</button>
        </form>
      </div>
    </div>
  )
}