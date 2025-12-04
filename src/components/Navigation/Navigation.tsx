import { Link, useLocation } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
  const location = useLocation()

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Jason Young
        </Link>
        <div className={styles.links}>
          <Link 
            to="/" 
            className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/blog" 
            className={`${styles.link} ${location.pathname === '/blog' ? styles.active : ''}`}
          >
            Blog
          </Link>
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
    </nav>
  )
}

export default Navigation