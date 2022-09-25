import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Not made by Nate Stringham <img src="https://media-exp1.licdn.com/dms/image/D5635AQHvdeQTlHbFbw/profile-framedphoto-shrink_200_200/0/1660266091311?e=1664748000&v=beta&t=83MggqTfb21ZN8e45kLzNOSrfvJuU_8n779qlhB-0QU" alt="Netlify Logo" className={styles.logo} /> for you
      </footer>
    </>
  )
}
