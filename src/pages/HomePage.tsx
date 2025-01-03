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
    <div className="bg-purple-50 text-purple-600 text-center py-2 text-sm border-b">
      <span className="font-semibold text-xl tracking-wider uppercase">
        Mature Event Planners Company Ltd.
      </span>
      <span className="hidden sm:inline mx-2">|</span>
      <span className="hidden sm:inline italic text-xl">Excellence in Event Management</span>
    </div>
    <Misssion />
    <Services />
    <Contact />
    
  </div>
  )
}
