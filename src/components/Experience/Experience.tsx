import styles from "./Experience.module.css";

const Experience = () => {
  const experiences = [
    {
      company: "LEGO Group",
      role: "Senior Engineering Manager",
      period: "Current",
    },
  ];

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
  );
};

export default Experience;
