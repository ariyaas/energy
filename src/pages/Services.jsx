import PageBanner from "../components/PageBanner";
import {
  FaTools,
  FaCogs,
  FaIndustry,
  FaCheckCircle,
  FaBolt,
} from "react-icons/fa";

export default function Services({ onQuoteClick }) {
  return (
    <>
      {/* ================= PAGE BANNER ================= */}
      <PageBanner title="Services" />

      {/* ================= HERO TEXT ================= */}
    <section className="py-16 md:py-20 bg-white text-center animate-up px-4">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1F33] leading-tight">
    Our <span className="text-[#84cc16]">Services</span>
  </h1>

  <div className="w-20 md:w-24 h-[3px] md:h-1 bg-[#FFC107] mx-auto mt-4 md:mt-5 mb-5 md:mb-6" />

  <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg px-2">
    Manufacturing, EPC & O&M — delivering end-to-end solar solutions
    with unmatched quality, reliability, and performance.
  </p>
</section>

      {/* ================= CORE SERVICES ================= */}
      <section className="py-16 md:py-24 bg-[#F4F8FC]">
  <div className="max-w-7xl mx-auto px-5 md:px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">

    {/* EPC */}
    <div className="group bg-white rounded-3xl border border-[#EAF4FF] p-6 md:p-10 animate-up
    hover:-translate-y-3 hover:shadow-2xl transition duration-500">
      <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ECFDF5] text-[#84cc16] rounded-xl flex items-center justify-center mb-5 md:mb-6
        group-hover:bg-[#84cc16] group-hover:text-white transition">
        <FaTools size={24} />
      </div>

      <h3 className="text-lg md:text-xl font-bold text-[#0B1F33] mb-3 md:mb-4">
        Engineering, Procurement & Construction (EPC)
      </h3>

      <p className="text-gray-600 text-sm md:text-base">
        Complete turnkey EPC solutions covering design, procurement,
        installation, testing, and commissioning.
      </p>
    </div>

    {/* O&M */}
    <div className="group bg-white rounded-3xl border border-[#EAF4FF] p-6 md:p-10 animate-up delay-1
    hover:-translate-y-3 hover:shadow-2xl transition duration-500">
      <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ECFDF5] text-[#84cc16] rounded-xl flex items-center justify-center mb-5 md:mb-6
        group-hover:bg-[#84cc16] group-hover:text-white transition">
        <FaCogs size={24} />
      </div>

      <h3 className="text-lg md:text-xl font-bold text-[#0B1F33] mb-3 md:mb-4">
        Operations & Maintenance (O&M)
      </h3>

      <p className="text-gray-600 text-sm md:text-base">
        Monitoring, preventive maintenance, and performance optimization
        for maximum generation.
      </p>
    </div>

    {/* Manufacturing */}
    <div className="group bg-white rounded-3xl border border-[#EAF4FF] p-6 md:p-10 animate-up delay-2
    hover:-translate-y-3 hover:shadow-2xl transition duration-500">
      <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ECFDF5] text-[#84cc16] rounded-xl flex items-center justify-center mb-5 md:mb-6
        group-hover:bg-[#84cc16] group-hover:text-white transition">
        <FaIndustry size={24} />
      </div>

      <h3 className="text-lg md:text-xl font-bold text-[#0B1F33] mb-3 md:mb-4">
        Manufacturing Capabilities
      </h3>

      <ul className="space-y-2 text-gray-600 text-sm md:text-base">
        <li className="flex gap-2"><FaCheckCircle className="text-[#FFC107]" /> Solar Inverters</li>
        <li className="flex gap-2"><FaCheckCircle className="text-[#FFC107]" /> PV Modules</li>
        <li className="flex gap-2"><FaCheckCircle className="text-[#FFC107]" /> Mounting Structures</li>
      </ul>
    </div>

  </div>
</section>

      {/* ================= ONE CALL SOLUTION ================= */}
      <section className="py-16 md:py-24 bg-[#0B1F33] text-white animate-up">
  <div className="max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-center">

    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-5 md:mb-6 leading-tight">
        True One-Call <span className="text-[#FFC107]">Solar Solution</span>
      </h2>

      <ul className="space-y-3 md:space-y-4 text-blue-100 text-sm md:text-base">
        {[
          "Own manufacturing facilities",
          "In-house EPC & O&M teams",
          "Single-point accountability",
          "Faster project execution",
          "24×7 technical support",
        ].map((item, i) => (
          <li key={i} className="flex gap-3">
            <FaCheckCircle className="text-[#FFC107]" /> {item}
          </li>
        ))}
      </ul>
    </div>

    <div className="bg-white/10 rounded-2xl p-6 md:p-10 border border-white/20">
      <h4 className="font-semibold mb-4 text-sm md:text-base">
        This integrated approach ensures
      </h4>

      <ul className="space-y-2 text-blue-100 text-sm md:text-base">
        <li>✓ Better Quality</li>
        <li>✓ Faster Delivery</li>
        <li>✓ Long-term Reliability</li>
      </ul>
    </div>

  </div>
</section>
  {/* ================= GROUND SITES (RESPONSIVE) ================= */}
<section className="bg-[#F7F9FC] py-16 md:py-28 animate-up">
  <div className="max-w-[1128px] mx-auto px-5 md:px-6">

    {/* HEADER */}
    <div className="text-center mb-10 md:mb-16">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1F33] leading-tight">
        Ready-to-Use Solar <span className="text-[#84cc16]">Ground Sites</span>
      </h2>

      <div className="mt-3 md:mt-4 h-[3px] md:h-[4px] w-[160px] md:w-[260px] bg-[#FFC107] mx-auto" />

      <p className="mt-4 text-sm md:text-lg text-gray-600 px-2">
        End-to-end support for utility-scale projects
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-6 md:gap-12">

      {/* LEFT CARD */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 border shadow-sm hover:shadow-xl transition duration-500">
        <h3 className="text-lg md:text-2xl font-bold text-[#0B1F33] mb-6 md:mb-8">
          We Provide
        </h3>

        <ul className="space-y-5 md:space-y-8">
          {[
            ["Land acquisition & development","Complete site preparation and infrastructure setup"],
            ["Transmission lines & substations","Grid connectivity and power evacuation systems"],
            ["EPC execution","Turnkey project implementation and commissioning"],
            ["Financing options","Flexible payment and funding solutions"],
          ].map((item,i)=>(
            <li key={i} className="flex gap-3 md:gap-4">
              <div className="text-[#84cc16] text-lg md:text-2xl mt-1">✔</div>
              <div>
                <p className="font-semibold text-[#0B1F33] text-sm md:text-base">{item[0]}</p>
                <p className="text-gray-600 text-sm md:text-base">{item[1]}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT CARD */}
      <div className="rounded-3xl p-6 sm:p-8 md:p-12 text-white bg-gradient-to-br from-[#0B1F33] via-[#123a63] to-[#0B1F33] shadow-2xl">

        <h3 className="text-lg md:text-2xl font-bold mb-6 md:mb-10">
          Available Capacities
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-10">
          {["11 kV","22 kV","33 kV","66 kV","110 kV","220 kV"].map((kv)=>(
            <div key={kv}
              className="bg-white/15 rounded-xl md:rounded-2xl py-3 md:py-6 text-xs md:text-base text-center font-semibold hover:bg-white/25 transition">
              ⚡ {kv}
            </div>
          ))}
        </div>

        <div className="bg-white/15 rounded-xl md:rounded-2xl py-3 md:py-4 text-center text-sm md:text-base">
          Available across multiple states in India
        </div>

      </div>

    </div>
  </div>
</section>

      {/* ================= CTA ================= */}
      <section className="py-16 md:py-24 bg-[#F4F8FC] text-center animate-up px-4">
  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F33] mb-3 md:mb-4">
    Commercial & Industrial Projects
  </h2>

  <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
    Free ROI & IRR evaluation available
  </p>

  <button
    onClick={onQuoteClick}
    className="bg-[#84cc16] text-white font-bold px-8 md:px-12 py-3 md:py-4 rounded-xl
    hover:bg-[#65a30d] hover:scale-105 transition">
    Get a Free Quote
  </button>
</section>
    </>
  );
}