import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Experience from '../../components/Experience/Experience'
import Contact from '../../components/Contact/Contact'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home