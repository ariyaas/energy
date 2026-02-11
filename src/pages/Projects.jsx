import PageBanner from "../components/PageBanner"
import SolarModels from "../components/common/SolarModels"
import {
  FaSolarPanel,
  FaIndustry,
  FaHome,
  FaBolt,
  FaCheckCircle,
} from "react-icons/fa"

export default function Projects({ onQuoteClick }) {
  return (
    <>
      {/* PAGE BANNER */}
      <PageBanner title="Our Projects" />

      {/* HERO */}
<section className="bg-white py-14 md:py-20 text-center px-4">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1F33] leading-tight">
          Solar Projects Across <span className="text-[#84CC16]">India</span>
        </h1>
        <div className="w-24 h-1 bg-[#84CC16] mx-auto mt-5 mb-6" />
        <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg px-2">
          Delivering reliable, scalable and high-performance solar installations
          across residential, commercial, industrial and utility sectors.
        </p>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[#0B1F33] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            ["250+", "MW Installed"],
            ["500+", "Projects Completed"],
            ["30+", "Years Experience"],
            ["10+", "States Covered"],
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-[#84CC16]">{item[0]}</h3>
              <p className="mt-2 text-white/80">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLAR MODELS */}
      <SolarModels />

      {/* PROJECT CATEGORIES */}
<section className="bg-[#F7F9FC] py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-2xl md:text-4xl font-bold text-[#0B1F33] text-center mb-10 md:mb-14">
      Project Categories
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">

      {[
        { title: "Residential Rooftop", icon: <FaHome /> },
        { title: "Commercial Projects", icon: <FaSolarPanel /> },
        { title: "Industrial Plants", icon: <FaIndustry /> },
        { title: "Utility Scale Parks", icon: <FaBolt /> },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-6 md:p-10 text-center shadow-sm
          hover:-translate-y-2 hover:shadow-xl transition duration-300"
        >

          <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-5 rounded-xl
          bg-[#ECFDF5] text-[#84CC16] flex items-center justify-center text-xl md:text-2xl">
            {item.icon}
          </div>

          <h3 className="font-bold text-sm md:text-lg text-[#0B1F33]">
            {item.title}
          </h3>

        </div>
      ))}

    </div>
  </div>
</section>

      {/* FEATURED PROJECTS */}
   <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F33] text-center mb-16">
            Featured Projects
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 p-6 md:p-10">
            {[
              { name:"Commercial Rooftop – Chennai", capacity:"500 kW", type:"Commercial" },
              { name:"Industrial Plant – Bangalore", capacity:"2 MW", type:"Industrial" },
              { name:"Utility Solar Park – Tamil Nadu", capacity:"50 MW", type:"Utility Scale" },
            ].map((p, i) => (
              <div key={i}
                className="border rounded-2xl p-10 hover:shadow-xl transition">

                <h3 className="font-bold text-xl text-[#0B1F33]">{p.name}</h3>
                <p className="text-gray-600 mt-3">
                  Capacity: <strong>{p.capacity}</strong>
                </p>
                <p className="text-gray-600">Project Type: {p.type}</p>

                <button className="mt-6 text-[#84CC16] font-semibold">
                  View Project →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PROJECTS SUCCEED */}
      <section className="py-16 md:py-24 bg-[#0B1F33] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Why Our Projects <span className="text-[#84CC16]">Succeed</span>
          </h2>

<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">   
             {[
              "In-house EPC Execution",
              "Premium Components",
              "On-Time Delivery",
              "Long-Term Performance",
            ].map((text, i) => (
              <div key={i} className="bg-white/10 backdrop-blur p-8 rounded-2xl">
                <FaCheckCircle className="text-[#84CC16] text-2xl mx-auto mb-3"/>
                <p className="font-semibold">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL GREEN CTA */}
      <section className="bg-[#84CC16] py-16 md:py-24 text-center text-[#0B1F33]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Planning a Solar Project?
        </h2>
        <p className="mb-8 text-base md:text-lg px-2">
          Get free feasibility, design & ROI analysis from our experts.
        </p>

        <button
          onClick={onQuoteClick}
          className="bg-[#0B1F33] text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition">
          Get Free Quote
        </button>
      </section>
    </>
  )
}