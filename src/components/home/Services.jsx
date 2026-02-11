import epcIcon from "../../assets/icons/epc.svg"
import omIcon from "../../assets/icons/om.svg"
import manufacturingIcon from "../../assets/icons/manufacturing1.svg"
import heroBg from "../../assets/solar-installation.webp"

import { MdCheckCircle } from "react-icons/md"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

function Services() {
  return (
    <section id="services" className="relative py-14 sm:py-16 md:py-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F33]/95 via-[#0B1F33]/90 to-[#0B1F33]/95"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h2>

          <div className="mt-3 h-[3px] w-24 sm:w-28 bg-[#84cc16] mx-auto rounded-full" />

          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto">
            Manufacturing, EPC & O&M — All Under One Roof
          </p>
        </motion.div>

        {/* SERVICE CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid gap-6 sm:gap-8 md:grid-cols-3 mb-14 md:mb-16"
        >

          {/* CARD COMPONENT */}
          {[
            {
              icon: epcIcon,
              title: "Engineering, Procurement & Construction (EPC)",
              text: "In-house engineers manage design, procurement, installation and commissioning using premium solar technologies."
            },
            {
              icon: omIcon,
              title: "Operations & Maintenance (O&M)",
              text: "Routine cleaning, inspection and real-time monitoring to ensure peak performance and system life."
            }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp}
              className="bg-white/95 rounded-2xl p-6 sm:p-7 md:p-8 hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <img src={item.icon} className="w-12 h-12 sm:w-14 sm:h-14 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-[#0B1F33] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#5B6B7C] leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}

          {/* Manufacturing Card */}
          <motion.div variants={fadeUp}
            className="bg-white/95 rounded-2xl p-6 sm:p-7 md:p-8 hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <img src={manufacturingIcon} className="w-12 h-12 sm:w-14 sm:h-14 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-[#0B1F33] mb-3">
              Manufacturing Capabilities
            </h3>

            <ul className="space-y-2 text-sm text-[#5B6B7C]">
              {["Solar Inverters","PV Modules","Mounting Structures & Combiner Boxes"].map((t,i)=>(
                <li key={i} className="flex items-start gap-2">
                  <MdCheckCircle className="text-[#84cc16] mt-[2px]" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>

        {/* CTA BOX */}
        <motion.div
          initial={{ opacity: 0, scale: .96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#65a30d] to-[#84cc16] rounded-2xl sm:rounded-3xl px-6 sm:px-10 md:px-16 py-8 sm:py-10 text-white"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
            True One-Call Solar Solution
          </h3>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">

            {/* LEFT */}
            <div className="text-sm sm:text-base">
              <p className="mb-5">
                Seapol delivers a <span className="font-semibold">fully integrated solar solution</span>:
              </p>

              <ul className="space-y-2">
                {[
                  "Own manufacturing",
                  "In-house EPC & O&M",
                  "24×7 online support",
                  "Single-point accountability"
                ].map((t,i)=>(
                  <li key={i} className="flex gap-2">
                    <MdCheckCircle className="mt-[3px]" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT */}
            <div className="bg-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-sm sm:text-base">
              <p className="font-semibold mb-4">This ensures</p>
              <ul className="space-y-2">
                {["Better Quality","Faster Execution","Long-term Reliability"].map((t,i)=>(
                  <li key={i} className="flex justify-center gap-2">
                    <MdCheckCircle /> {t}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Services