import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/code-the-north.webp" alt="Code the North Logo" className={styles.logo} />
      </footer>
    </>
  )
}
