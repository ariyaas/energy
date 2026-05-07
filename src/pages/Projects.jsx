import { useState } from "react";
import PageBanner from "../components/PageBanner"
import SolarModels from "../components/common/SolarModels"
import {
  FaSolarPanel,
  FaIndustry,
  FaHome,
  FaBolt,
  FaCheckCircle,
} from "react-icons/fa"
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project5.png";

export default function Projects({ onQuoteClick }) {

  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      {/* PAGE BANNER */}
      <PageBanner title="Our Projects" />

      {/* HERO */}
<section className="bg-white py-14 md:py-20 text-center px-4">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1F33] leading-tight">
          Solar Projects Across <span className="text-brandPrimary">India</span>
        </h1>
        <div className="w-24 h-1 bg-brandPrimary mx-auto mt-5 mb-6" />
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
              <h3 className="text-4xl font-bold text-brandPrimary">{item[0]}</h3>
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
          bg-[#ECFDF5] text-brandPrimary flex items-center justify-center text-xl md:text-2xl">
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
   <section className="bg-white py-14 md:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* TITLE */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F33] text-center mb-10 md:mb-14">
      Our Residential Project
    </h2>

    <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">

      {/* LEFT - IMAGE GRID */}
      <div className="grid grid-cols-2 gap-3 sm:gap-5">

        {[project1, project2, project3, project4].map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl sm:rounded-2xl shadow-md group cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Project ${i}`}
              className="
                w-full 
                h-32 sm:h-44 md:h-52 
                object-cover 
                transition-transform duration-300 
                group-hover:scale-110
              "
            />
          </div>
        ))}

      </div>

      {/* RIGHT - CONTENT */}
      <div className="text-center md:text-left">

        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0B1F33] mb-4 md:mb-5 leading-snug">
          Residential Solar Installation – Chennai
        </h3>

        {/* INFO BOX */}
        <div className="bg-[#F7F9FC] rounded-xl p-4 sm:p-5 mb-5 md:mb-6 space-y-2 sm:space-y-3 border border-gray-100 text-sm sm:text-base">

          <p className="text-gray-700">
            <span className="font-semibold text-[#0B1F33]">Capacity:</span> 5 kW
          </p>

          <p className="text-gray-700">
            <span className="font-semibold text-[#0B1F33]">Type:</span> Residential
          </p>

          <p className="text-gray-700">
            <span className="font-semibold text-[#0B1F33]">Location:</span> Kayalpattinam, Tamilnadu.
          </p>

        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
          This residential rooftop solar project was designed to maximize energy
          efficiency while reducing long-term electricity costs. Our team handled
          complete EPC execution including design, installation, and commissioning
          using high-quality components to ensure long-lasting performance.
        </p>

      </div>

    </div>
  </div>
</section>


 {selectedImage && (
  <div
    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
    onClick={() => setSelectedImage(null)}
  >
    <img
      src={selectedImage}
      alt="Full View"
      className="w-full max-w-4xl max-h-[90vh] object-contain rounded-xl"
    />
  </div>
)}

      {/* WHY PROJECTS SUCCEED */}
      <section className="py-16 md:py-24 bg-[#0B1F33] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Why Our Projects <span className="text-brandPrimary">Succeed</span>
          </h2>

<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">   
             {[
              "In-house EPC Execution",
              "Premium Components",
              "On-Time Delivery",
              "Long-Term Performance",
            ].map((text, i) => (
              <div key={i} className="bg-white/10 backdrop-blur p-8 rounded-2xl">
                <FaCheckCircle className="text-brandPrimary text-2xl mx-auto mb-3"/>
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