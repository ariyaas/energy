import capexIcon from "../../assets/icons/capex.svg"
import opexIcon from "../../assets/icons/opex.svg"
import solarParkIcon from "../../assets/icons/solar-park.svg"
import { motion } from "framer-motion"

export default function SolarModels() {

  const services = [
    {
      icon: capexIcon,
      title: "CAPEX Model",
      text: "Own your solar plant and maximize long-term returns"
    },
    {
      icon: opexIcon,
      title: "OPEX / PPA",
      text: "Zero upfront investment with predictable energy costs"
    },
    {
      icon: solarParkIcon,
      title: "Solar Parks",
      text: "Ready-to-use ground-mounted solar infrastructure"
    }
  ]

  return (
    <section className="bg-[#F7F9FC] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-[#84cc16] font-semibold mb-3">OUR SOLAR MODELS</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1F33]">
            Flexible Solar Investment Options
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden bg-white p-8 rounded-3xl shadow-md"
            >

              {/* GREEN HOVER BACKGROUND */}
              <div className="absolute inset-0 bg-[#84cc16] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

              {/* CONTENT */}
              <div className="relative z-10 text-center">

                {/* ICON */}
             <div className="w-14 h-14 mx-auto mb-6">
  <img src={item.icon} className="w-14 h-14" />
</div>
                {/* TITLE */}
                <h3 className="text-xl font-bold text-[#0B1F33] group-hover:text-white transition mb-3">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="text-gray-600 group-hover:text-white/90 transition text-sm leading-relaxed">
                  {item.text}
                </p>

                {/* READ MORE */}
                <div className="mt-6 flex justify-center items-center gap-2 font-semibold text-[#84cc16] group-hover:text-white transition">
                  <span>Read More</span>
                  <span>→</span>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}