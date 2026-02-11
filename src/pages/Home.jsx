import About from "../components/home/About"
import Hero from "../components/home/Hero"
import Savings from "../components/home/Savings"
import SavingsCalculatorBox from "../components/home/SavingsCalculatorBox"
import Services from "../components/home/Services"
import SolarModels from "../components/home/SolarModels"
import Stats from "../components/home/Stats"

export default function Home({ openQuote }) {  return (
    <>
<Hero onQuoteClick={openQuote} />
      <Stats />
      <About />
      <SolarModels />
      <Services />
      <Savings />
      
    </>
  )
}