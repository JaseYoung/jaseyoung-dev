import styles from "./Hero.module.css";
import profilePic from "../../assets/1602857461330.jpeg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.flexRow}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Hi, I'm <span className={styles.highlight}>Jason Young</span>
            </h1>
            <h2 className={styles.subtitle}>
              Senior Engineering Manager at LEGO Group
            </h2>
            <p className={styles.description}>
              Experienced Senior Engineering Manager with a strong background in 
              software engineering, team leadership, and technical strategy. Over 
              the past five years, I've led squads across frontend, backend, and 
              full-stack disciplines, currently focusing on backend engineering 
              with TypeScript, AWS, Serverless, Lambda, and EventBridge.
            </p>
            <p className={styles.description}>
              I thrive in collaborative environments where mentoring and empowerment 
              are central to success. My goal is to build high-performing, engaged, 
              and motivated teams by providing engineers with the support and autonomy 
              they need to excel.
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
          <img
            src={profilePic}
            alt="Jason Young LinkedIn"
            className={styles.profilePic}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
