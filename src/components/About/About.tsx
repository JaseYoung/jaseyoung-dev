import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I'm a Senior Engineering Manager with a passion for building scalable 
              digital solutions and leading high-performing teams. Currently at LEGO Group, 
              I focus on digital transformation initiatives that enhance user experiences 
              and drive business value.
            </p>
            <p>
              My journey includes significant contributions to digital platforms at 
              Telegraph Media Group and leading the Digital Brick Project at LEGO, 
              where I introduced responsive shop redesigns with decoupled architecture.
            </p>
            <p>
              I'm particularly interested in test automation, having successfully 
              reduced development lead times from 12 to 3 months through strategic 
              automation implementations.
            </p>
          </div>
          <div className={styles.skills}>
            <h3>Key Areas</h3>
            <div className={styles.skillGrid}>
              <div className={styles.skill}>Software Engineering</div>
              <div className={styles.skill}>Test Automation</div>
              <div className={styles.skill}>Digital Transformation</div>
              <div className={styles.skill}>Agile Methodologies</div>
              <div className={styles.skill}>Team Leadership</div>
              <div className={styles.skill}>Technical Strategy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About