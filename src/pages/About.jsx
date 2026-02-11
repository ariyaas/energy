import PageBanner from "../components/PageBanner";
import {
  FaSolarPanel,
  FaIndustry,
  FaHome,
  FaBuilding,
  FaTools,
  FaShieldAlt,
  FaClock,
  FaHeadset
} from "react-icons/fa";import solarWorker from "../assets/solar-worker.png";
export default function About({ onQuoteClick }) {
  return (
    <>
      {/* PAGE BANNER */}
      <PageBanner title="About Us" />

      {/* ================= BIG INTRO ================= */}
<section className="bg-white py-10 md:py-8">
  <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">

    <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#0B1F33] mb-4 md:mb-6 animate-slide-right leading-tight">
      About <span className="text-[#84cc16]">Seapol Energy</span>
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed animate-fade-in px-2">
      Delivering reliable, efficient and future-ready solar EPC solutions
      backed by decades of engineering excellence and innovation.
    </p>

  </div>
</section>

      {/* ================= CEO MESSAGE (NEW SECTION) ================= */}
    <section className="bg-[#F7F9FC] py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-5 md:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

    {/* IMAGE */}
    <div className="rounded-3xl overflow-hidden shadow-xl h-[260px] sm:h-[320px] md:h-[420px]">
      <img
        src={solarWorker}
        alt="Solar worker"
        className="w-full h-full object-cover"
      />
    </div>

    {/* TEXT */}
    <div className="animate-fade-in">
      <p className="text-[#84cc16] font-semibold mb-2 md:mb-3 text-sm md:text-base">
        FROM THE DESK OF CEO & CTO
      </p>

      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1F33] mb-4 md:mb-6 leading-tight">
        Engineering Expertise Meets Solar Innovation
      </h3>

      <p className="text-gray-600 leading-relaxed mb-4 md:mb-5 text-sm md:text-base">
        With nearly 30 years of experience in Electrical Engineering,
        Seapol Energy delivers reliable and future-ready solar EPC solutions.
      </p>

      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
        Our partnership with leading solar technology providers allows us to
        deliver projects that are larger, faster and more efficient —
        creating real value for our clients.
      </p>
    </div>

  </div>
</section>


{/* ================= COMPANY STATS ================= */}
<section className="bg-[#0B1F33] py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-5 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center text-white">

    {[
      { value: "1500+ MW", label: "Inverters & Modules Supplied" },
      { value: "200+ MW", label: "Projects Installed" },
      { value: "1.7+ Million", label: "Tons of CO₂ Reduced" },
      { value: "30+", label: "Years Experience" },
    ].map((item,i)=>(
      <div key={i} className="animate-fade-in">
        <h3 className="text-2xl md:text-4xl font-bold text-[#FFC107]">
          {item.value}
        </h3>
        <p className="mt-1 md:mt-2 text-xs md:text-base text-gray-300">
          {item.label}
        </p>
      </div>
    ))}

  </div>
</section>


{/* ================= OUR EXPERTISE ================= */}
<section className="bg-[#F7F9FC] py-24">
  <div className="max-w-7xl mx-auto px-6 text-center mb-16">
    <h2 className="text-4xl font-bold text-[#0B1F33]">
      Our <span className="text-[#84cc16]">Expertise</span>
    </h2>
  </div>

  <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8">

    {[
      { icon:<FaHome/>, title:"Residential Solar" },
      { icon:<FaBuilding/>, title:"Commercial Solar" },
      { icon:<FaIndustry/>, title:"Industrial Solar" },
      { icon:<FaSolarPanel/>, title:"Utility Solar Parks" },
    ].map((item,i)=>(
      <div key={i}
        className="bg-white p-10 rounded-3xl text-center shadow-md
        hover:-translate-y-3 hover:shadow-2xl transition duration-500">

        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-[#ECFDF5]
                        flex items-center justify-center text-[#84cc16] text-3xl animate-pulse">
          {item.icon}
        </div>

        <h3 className="font-semibold text-[#0B1F33] text-lg">{item.title}</h3>
      </div>
    ))}

  </div>
</section>

{/* ================= OUR EXPERTISE ================= */}


     {/* ================= WHY CHOOSE US ================= */}
<section className="bg-[#F7F9FC] py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-5 md:px-6 text-center mb-10 md:mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F33]">
      Our <span className="text-[#84cc16]">Expertise</span>
    </h2>
  </div>

  <div className="max-w-7xl mx-auto px-5 md:px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

    {[
      { icon:<FaHome/>, title:"Residential Solar" },
      { icon:<FaBuilding/>, title:"Commercial Solar" },
      { icon:<FaIndustry/>, title:"Industrial Solar" },
      { icon:<FaSolarPanel/>, title:"Utility Solar Parks" },
    ].map((item,i)=>(
      <div key={i}
        className="bg-white p-6 md:p-10 rounded-3xl text-center shadow-md
        hover:-translate-y-3 hover:shadow-2xl transition duration-500">

        <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-xl bg-[#ECFDF5]
                        flex items-center justify-center text-[#84cc16] text-2xl md:text-3xl animate-pulse">
          {item.icon}
        </div>

        <h3 className="font-semibold text-[#0B1F33] text-sm md:text-lg">
          {item.title}
        </h3>
      </div>
    ))}

  </div>
</section>
     

      {/* ================= CTA ================= */}
     <section className="bg-[#0B1F33] py-16 md:py-28 text-center text-white px-4">
  <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-5 md:mb-6 leading-tight">
    Ready to Start Your Solar Journey?
  </h2>

  <button
    onClick={onQuoteClick}
    className="bg-[#FFC107] text-black font-bold px-8 md:px-10 py-3 md:py-4 rounded-xl hover:scale-105 transition"
  >
    Get Free Quote
  </button>
</section>
    </>
  );
}