import homeIcon from "../../assets/icons/home-white.svg"
import growthIcon from "../../assets/icons/growth.svg"
import SavingsCalculatorBox from "./SavingsCalculatorBox"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7 }
  }
}

function Savings() {
  return (
    <section id="savings" className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-4">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#0B1F33]">
            Start Saving from Day One
          </h2>

          <div className="mt-2 h-[3px] w-[260px] md:w-[380px] bg-[#84cc16] mx-auto" />

          <p className="mt-3 text-[15px] md:text-[17px] text-[#6B7280]">
            Residential Solar Systems
          </p>
        </motion.div>

        {/* SAVINGS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">

          {[
            { power:"3 kW", home:"Small Home", units:"~720 units", bill:"₹7,200", total:"~₹10.8 Lakhs" },
            { power:"5 kW", home:"Medium Home", units:"~1200 units", bill:"₹12,000", total:"~₹18 Lakhs" },
            { power:"10 kW", home:"Large Home", units:"~2400 units", bill:"₹24,000", total:"~₹36 Lakhs" },
          ].map((item,i)=>(
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once:true }}
              className="border border-[#E1E7EE] rounded-2xl overflow-hidden hover:shadow-xl transition"
            >

              {/* GREEN TOP STRIP */}
              <div className="h-2 bg-gradient-to-r from-[#65a30d] to-[#84cc16]" />

              <div className="p-6 md:p-8">
                <h3 className="text-[20px] font-semibold text-[#0B1F33] flex items-center gap-2">
                  <img src={homeIcon} className="w-5 h-5" />
                  {item.power}
                </h3>

                <p className="text-sm text-gray-500 mb-5">{item.home}</p>

                <div className="space-y-4">

                  <div className="bg-[#F5F6F8] rounded-xl p-4">
                    <p className="text-xs text-gray-500">Generates per bill</p>
                    <p className="font-semibold">{item.units}</p>
                  </div>

                  <div className="bg-[#EFFFF4] rounded-xl p-4">
                    <p className="text-xs text-gray-500">Approx savings per bill</p>
                    <p className="font-semibold text-[#16A34A]">{item.bill}</p>
                  </div>

                  <div className="bg-[#F0FDF4] rounded-xl p-4">
                    <p className="text-xs text-gray-500">25-year total savings</p>
                    <p className="font-semibold text-[#15803D]">{item.total}</p>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* CALCULATOR */}
        <SavingsCalculatorBox />

        {/* COMMERCIAL CTA */}
        <motion.div
          initial={{opacity:0,scale:0.95}}
          whileInView={{opacity:1,scale:1}}
          viewport={{once:true}}
          className="mt-14 bg-gradient-to-r from-[#65a30d] to-[#84cc16] rounded-2xl py-10 text-center text-white"
        >
          <img src={growthIcon} className="mx-auto w-10 mb-4" />
          <h3 className="text-[24px] md:text-[26px] font-bold">
            Commercial & Industrial Projects
          </h3>
          <p className="mt-2 text-white/90">
            Free ROI & IRR evaluation available
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Savings