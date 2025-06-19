import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Let's Connect</h2>
        <p className={styles.subtitle}>
          Interested in collaboration or just want to say hello? I'd love to hear from you.
        </p>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.card}>
              <h3>Professional</h3>
              <a 
                href="https://www.linkedin.com/in/jaseyoung/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                LinkedIn Profile
              </a>
            </div>
            <div className={styles.card}>
              <h3>Location</h3>
              <p>Available for remote opportunities</p>
            </div>
          </div>
          <div className={styles.cta}>
            <p>
              Ready to discuss your next project or explore opportunities? 
              Connect with me on LinkedIn to start the conversation.
            </p>
            <a 
              href="https://www.linkedin.com/in/jaseyoung/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.button}
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact