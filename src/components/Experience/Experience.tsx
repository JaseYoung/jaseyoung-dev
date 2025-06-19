import styles from './Experience.module.css'

const Experience = () => {
  const experiences = [
    {
      company: "LEGO Group",
      role: "Engineering Manager",
      period: "Current",
      achievements: [
        "Leading digital transformation initiatives",
        "Overseeing responsive shop redesign with decoupled architecture",
        "Managing cross-functional engineering teams"
      ]
    },
    {
      company: "Telegraph Media Group",
      role: "Senior Software Engineer",
      period: "Previous",
      achievements: [
        "Developed digital platform solutions",
        "Implemented test automation reducing lead times from 12 to 3 months",
        "Contributed to major platform improvements"
      ]
    }
  ]

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.role}>{exp.role}</h3>
                <div className={styles.meta}>
                  <span className={styles.company}>{exp.company}</span>
                  <span className={styles.period}>{exp.period}</span>
                </div>
              </div>
              <ul className={styles.achievements}>
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.education}>
          <h3 className={styles.sectionTitle}>Education</h3>
          <div className={styles.eduCard}>
            <h4>University of Hertfordshire</h4>
            <p>2010 - 2013</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience