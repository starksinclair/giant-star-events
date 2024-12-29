import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Services from '../components/Services'
import SEO from '../components/SEO'
import Misssion from '../components/Mission'

export const HomePage = () => {
  return (
    <div className="min-h-screen">
    <SEO />
    <Hero />
    <Misssion />
    <Services />
    <Contact />
    
  </div>
  )
}
