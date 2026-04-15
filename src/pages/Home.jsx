import About from "../components/home/About"
import Hero from "../components/home/Hero"
import MNRESection from "../components/home/MNRESection"
import Savings from "../components/home/Savings"
import SavingsCalculatorBox from "../components/home/SavingsCalculatorBox"
import Services from "../components/home/Services"
import SolarModels from "../components/home/SolarModels"
import Stats from "../components/home/Stats"
import Timeline from "../components/home/Timeline"

export default function Home({ openQuote }) {  return (
    <>
<Hero onQuoteClick={openQuote} />
      <Stats />
      <About />
      <Timeline />
      <SolarModels />
      
      <Services />
      <MNRESection />
      <Savings />
      
    </>
  )
}