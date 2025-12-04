import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I'm a Senior Engineering Manager with a passion for building
              scalable digital solutions and leading high-performing teams.
              Currently at LEGO Group,
            </p>
            <p>Technical Focus</p>
            <p>
              Scalability & Architecture – Transitioning from monoliths to
              microservices, improving deployment pipelines, GitHub Actions, and
              infrastructure-as-code solutions.
            </p>
            <p>
              Resilience & Observability – Ensuring high availability and
              reliability for peak traffic events like Black Friday and May the
              4th, with a focus on monitoring, alerting, and tracing.
            </p>
            <p>
              Collaboration & Impact – Working closely with product managers,
              designers, stakeholders, and senior leadership to align
              engineering efforts with quarterly OKRs and long-term retail
              strategies.
            </p>
            <p>
              Passion & Leadership I’m passionate about mentoring and career
              development, ensuring that every engineer I work with has the
              right opportunities, guidance, and support to grow and perform at
              their best. Whether it’s helping teams navigate technical
              challenges, scaling engineering operations, or ensuring seamless
              product launches, I’m driven by building great teams and
              delivering impactful solutions.
            </p>
            <p>
              If you'd like to connect or discuss engineering leadership,
              hiring, or scaling teams—feel free to reach out!
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
  );
};

export default About;
