

import Hero from '../../component/hero/Hero'
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
 
    
   </div>
  )
}

export default Home