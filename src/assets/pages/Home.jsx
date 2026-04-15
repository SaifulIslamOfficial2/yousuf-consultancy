

// import { Features } from 'tailwindcss'
import Features from '../../component/features/Features'
import Hero from '../../component/hero/Hero'
import TeamCarousel from '../../component/ourTeam/TeamCarousel'
import MainService from '../../component/services/MainService'
import UmrahBanner from '../../component/umrah/UmrahBanner'
import VisaTicket from '../../component/visa/VisaTicket'

function Home() {
 
  return (
   <div >
    <Hero></Hero>

      <UmrahBanner></UmrahBanner>
     <MainService></MainService>
        
    <VisaTicket></VisaTicket>
  <TeamCarousel></TeamCarousel>
  <Features></Features>
    
   </div>
  )
}

export default Home