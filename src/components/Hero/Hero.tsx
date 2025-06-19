import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Jason Young</span>
          </h1>
          <h2 className={styles.subtitle}>
            Engineering Manager at LEGO Group
          </h2>
          <p className={styles.description}>
            Passionate about digital transformation, test automation, and building 
            scalable solutions that make a difference. I lead teams that deliver 
            innovative software experiences.
          </p>
          <div className={styles.cta}>
            <a 
              href="https://www.linkedin.com/in/jaseyoung/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.button}
            >
              Connect on LinkedIn
            </a>
            <a 
              href="#contact" 
              className={`${styles.button} ${styles.buttonSecondary}`}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero