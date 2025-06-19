import Navigation from '../../components/Navigation/Navigation'
import styles from './Blog.module.css'

const Blog = () => {
  return (
    <div className={styles.blog}>
      <Navigation />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Blog</h1>
          <p>Coming soon - technical insights and thoughts</p>
        </header>
        <div className={styles.placeholder}>
          <p>This section will contain blog posts and technical articles.</p>
        </div>
      </div>
    </div>
  )
}

export default Blog