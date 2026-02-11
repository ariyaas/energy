import aboutImg from "../../assets/solar-worker.png";
import manufacturingIcon from "../../assets/icons/manufacturing.svg";
import engineeringIcon from "../../assets/icons/engineering.svg";
import serviceIcon from "../../assets/icons/service.svg";
import { motion } from "framer-motion";

export default function About() {

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.25 }
    }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9 } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* TITLE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-[#84cc16] font-semibold mb-3 tracking-wider">
            ABOUT COMPANY
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1F33] max-w-3xl mx-auto leading-tight">
          Seapol is driving the future with sustainable solar energy
          </h2>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center"
        >

          {/* IMAGE */}
          <motion.div
            variants={fadeLeft}
            className="relative h-[300px] sm:h-[420px] lg:h-[520px]"
          >
            <div className="absolute inset-0 bg-[#84cc16] rounded-3xl rotate-6"></div>

            <motion.img
              src={aboutImg}
              alt="Solar worker"
              className="relative z-10 rounded-3xl h-full w-full object-cover shadow-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>

          {/* RIGHT SIDE */}
          <div>

            <motion.div variants={container} className="space-y-5">

              {/* CARD 1 */}
              <motion.div
                variants={fadeRight}
                whileHover={{ scale: 1.04 }}
                className="flex items-start gap-4 p-4 sm:p-5 md:p-6 bg-white rounded-2xl shadow-md text-left transition"
              >
                <img src={manufacturingIcon} className="w-11 h-11" />
                <div>
                  <h3 className="font-semibold text-[16px] sm:text-[18px] text-[#0B1F33] leading-snug">
                    Expert Solar Worker
                  </h3>
                  <p className="text-gray-600 mt-1 text-[13px] sm:text-[14px] leading-relaxed">
                    People in more ways every day, so that all of us can be part of the changing energy system.
                  </p>
                </div>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                variants={fadeRight}
                whileHover={{ scale: 1.04 }}
               className="flex items-start gap-4 p-4 sm:p-5 md:p-6 bg-white rounded-2xl shadow-md text-left transition"
              >
                <img src={engineeringIcon} className="w-11 h-11" />
                <div>
                  <h3 className="font-semibold text-[16px] sm:text-[18px] text-[#0B1F33] leading-snug">
                    Expert Installation
                  </h3>
                  <p className="text-gray-600 mt-1 text-[13px] sm:text-[14px] leading-relaxed">
                    High quality solar installation backed by years of engineering experience.
                  </p>
                </div>
              </motion.div>

              {/* CARD 3 */}
              <motion.div
                variants={fadeRight}
                whileHover={{ scale: 1.04 }}
              className="flex items-start gap-4 p-4 sm:p-5 md:p-6 bg-white rounded-2xl shadow-md text-left transition"
              >
                <img src={serviceIcon} className="w-11 h-11" />
                <div>
                  <h3 className="font-semibold text-[16px] sm:text-[18px] text-[#0B1F33] leading-snug">
                    Modern Technology
                  </h3>
                  <p className="text-gray-600 mt-1 text-[13px] sm:text-[14px] leading-relaxed">
                    Using latest solar technologies to deliver long-term reliable energy solutions.
                  </p>
                </div>
              </motion.div>

            </motion.div>

            {/* BUTTON */}
            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.08 }}
              className="mainBtn mt-8"
            >
              View Our Services →
            </motion.button>

          </div>

        </motion.div>
      </div>
    </section>
  );
}