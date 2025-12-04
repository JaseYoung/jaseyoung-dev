import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.brand}>Jason Young</p>
            <p className={styles.tagline}>Senior Engineering Manager</p>
          </div>
          <div className={styles.links}>
            <a 
              href="https://github.com/JaseYoung" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/jaseyoung/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© {currentYear} Jason Young. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
