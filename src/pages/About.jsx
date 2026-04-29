import PageBanner from "../components/PageBanner";
import installationsImg from "../assets/installations.png";
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
      About <span className="text-brandPrimary">Seapol Energy</span>
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed animate-fade-in px-2">
      Delivering reliable, efficient and future-ready solar EPC solutions
      backed by decades of engineering excellence and innovation.
    </p>

  </div>
</section>

      {/* ================= CEO MESSAGE (NEW SECTION) ================= */}
 {/* ================= CEO MESSAGE (FINAL PERFECT ALIGN) ================= */}
<section className="bg-[#F7F9FC] py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-5 md:px-6">

    {/* 🔹 TOP SECTION */}
    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start mb-12">

      {/* IMAGE */}
      <div className="rounded-3xl overflow-hidden shadow-xl h-[260px] sm:h-[320px] md:h-[420px] self-start">
        <img
          src={solarWorker}
          alt="Solar worker"
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="max-w-xl">

        <p className="text-brandPrimary font-semibold mb-2 text-sm uppercase tracking-wide">
          From the Desk of CEO & CTO
        </p>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1F33] mb-5 leading-snug">
          Engineering Expertise Meets Solar Innovation
        </h3>

        {/* ✅ FIRST PARAGRAPH */}
        <p className="text-gray-700 text-sm md:text-base leading-[1.8] text-justify mb-4">
          With nearly 30 years of dedicated experience in the field of Electrical Engineering,
          I have been afforded the privilege of spearheading truly innovative projects and
          cultivating deep, authoritative expertise in my domain.
        </p>

        {/* ✅ MOVED SECOND PARAGRAPH (NOW TOP) */}
        <p className="text-gray-700 text-sm md:text-base leading-[1.8] text-justify">
          My seven year presence within the dynamic solar industry has been consistently driven
          by one singular, powerful purpose: the unwavering commitment to creating robust,
          reliable, and truly future-ready energy solutions.
        </p>

      </div>

    </div>

    {/* 🔹 FULL CONTENT (BOTTOM) */}
    <div className="max-w-4xl mx-auto space-y-5 text-gray-700 text-sm md:text-base leading-[1.8] tracking-wide text-justify">

      <p>
        A pivotal moment in this ambitious journey is our recent amalgamation as an Engineering,
        Procurement, and Construction (EPC) Solar Company with SEAPOL, a distinguished Logistics
        Enterprise boasting more than three decades of operational experience. This landmark event
        marks the strategic birth of SEAPOL Energy Private Limited.
      </p>

      <p>
        This powerful synergy strategically unites my profound engineering focus with their
        extensive operational depth, equipping our combined entity with the enhanced capability
        to deliver solar installations that are larger, faster, and demonstrably more efficient
        than ever before.
      </p>

      <p>
        Furthermore, our long-standing and productive association as a valued channel partner of
        Evolve Energies Pvt Ltd strengthens our dedication to supplying high-performance solutions.
        These solutions are consistently backed by foundational principles of innovation and trust.
      </p>

      <p>
        This strategic collaboration not only fortifies our competitive standing within the market
        but also grants us the ability to seamlessly leverage cutting-edge technologies and an
        significantly expanded support network. Ultimately, this translates directly into superior
        value and benefits for our most valued clients—i.e., YOU.
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
      Our <span className="text-brandPrimary">Expertise</span>
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
                        flex items-center justify-center text-brandPrimary text-3xl animate-pulse">
          {item.icon}
        </div>

        <h3 className="font-semibold text-[#0B1F33] text-lg">{item.title}</h3>
      </div>
    ))}

  </div>
</section>




<section className="bg-white py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-5 md:px-6">

    {/* TITLE */}
    <div className="text-center mb-10 md:mb-14">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0B1F33] tracking-wide">
        INSTALLATIONS
      </h2>

      <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
        Our successful installations across residential, commercial and industrial sectors
        demonstrate our expertise in delivering efficient and reliable solar solutions.
      </p>
    </div>

    {/* IMAGE */}
    <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500">
      <img
        src={installationsImg}
        alt="Solar Installations"
        className="w-full h-auto object-cover"
      />
    </div>

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