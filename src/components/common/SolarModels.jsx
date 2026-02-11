import { FaMoneyBillWave, FaChartLine, FaSolarPanel } from "react-icons/fa";

export default function SolarModels() {
  const models = [
    {
      title: "CAPEX",
      desc: "Own your solar plant and maximize long-term returns",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "OPEX / PPA",
      desc: "Zero upfront investment with predictable energy costs",
      icon: <FaChartLine />,
    },
    {
      title: "Solar Parks",
      desc: "Ready-to-use ground-mounted solar infrastructure",
      icon: <FaSolarPanel />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="px-[6%] lg:px-[10%]">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1F33]">
            Our Solar Models
          </h2>

          <div className="w-16 md:w-20 h-[3px] md:h-1 bg-[#84CC16] mx-auto mt-3 md:mt-4" />

          <p className="mt-3 md:mt-4 text-gray-600 text-sm md:text-base px-4">
            Flexible Solar Investment Options
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {models.map((item, i) => (
            <div
              key={i}
              className="
                group bg-white rounded-2xl border border-gray-200
                p-6 md:p-8 transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl hover:border-[#84CC16]
              "
            >
              {/* ICON */}
              <div className="
                w-12 h-12 md:w-14 md:h-14 rounded-xl
                bg-[#ECFDF5] text-[#84CC16]
                flex items-center justify-center mb-4 md:mb-5
                text-lg md:text-xl
                group-hover:bg-[#84CC16] group-hover:text-white transition
              ">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg md:text-xl font-bold text-[#0B1F33] mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* FOOT NOTE */}
        <div className="
          mt-10 md:mt-14 bg-[#0B1F33] text-white text-center
          py-4 md:py-5 px-4 rounded-xl font-semibold text-sm md:text-base
        ">
          Suitable for Residential, Commercial, Industrial & Utility-scale applications
        </div>

      </div>
    </section>
  );
}