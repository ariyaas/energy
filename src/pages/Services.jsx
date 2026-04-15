import PageBanner from "../components/PageBanner";
import {
  FaTools,
  FaCogs,
  FaIndustry,
  FaCheckCircle,
  FaBolt,
} from "react-icons/fa";

import solarTypesImg from "../assets/solar-types.png"; // your image
import servicehouse from "../assets/housemobile.webp"; // your image
import streetLightImg from "../assets/street-light.png"; // your image
import containerHomeImg from "../assets/container-home.png"; // your image

import { FaSolarPanel, FaCarBattery, FaRupeeSign } from "react-icons/fa";
import serviceImg from "../assets/solar-ev.png";

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




<section className="py-16 md:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-center">

    {/* IMAGE */}
    <div className="rounded-3xl overflow-hidden shadow-xl group">
      <img
        src={containerHomeImg}
        alt="Solar Container Home"
        className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover transform group-hover:scale-105 transition duration-500"
      />
    </div>

    {/* CONTENT */}
    <div>

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1F33] mb-4 md:mb-6 leading-tight">
        Off-Grid Solar <span className="text-[#84cc16]">Container Homes</span>
      </h2>

      {/* INTRO */}
      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-5 md:mb-6">
        Experience modern, sustainable living anywhere — from hills and remote villages 
        to resorts and agricultural lands. Our solar-powered container homes deliver 
        complete energy independence without relying on grid electricity.
      </p>

      {/* FEATURES */}
      <div className="space-y-4 md:space-y-5 text-gray-700 text-sm sm:text-base">

        <div>
          <p className="font-semibold text-[#0B1F33]">⚡ 100% Off-Grid Power</p>
          <p>Hybrid solar system ensures continuous electricity in remote locations.</p>
        </div>

        <div>
          <p className="font-semibold text-[#0B1F33]">🔋 Battery Backup</p>
          <p>Lithium battery provides up to 7 hours of power after sunset.</p>
        </div>

        <div>
          <p className="font-semibold text-[#0B1F33]">❄ Climate Controlled</p>
          <p>Efficient air conditioning designed for solar-powered performance.</p>
        </div>

        <div>
          <p className="font-semibold text-[#0B1F33]">🏡 Modern Living Setup</p>
          <p>Supports TV, LED lighting, fans, and complete electrical setup.</p>
        </div>

      </div>

      {/* HIGHLIGHT */}
      <div className="mt-6 bg-[#F0FDF4] border-l-4 border-[#84cc16] p-4 rounded-lg">
        <p className="text-sm md:text-base text-gray-700">
          💡 <span className="font-semibold">Perfect for:</span> 
          Hill stations, resorts, farmhouses, tourism projects, and rural areas without electricity.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* ================= SOLAR  mobile control SYSTEM TYPES ================= */}  
<section className="py-16 md:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="animate-up">

      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0B1F33] mb-4 md:mb-6 leading-tight">
        Remote Solar <span className="text-[#84cc16]">Monitoring</span>
      </h2>

      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6">
        Remote solar monitoring allows you to track energy production and system health directly from your smartphone.
      </p>

      <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 md:mb-8">
        These apps provide real-time insights and complete control over your solar system performance.
      </p>

      {/* FEATURES */}
      <div className="space-y-4 md:space-y-6">

        <div>
          <h4 className="font-semibold text-[#0B1F33] text-base md:text-lg mb-1 md:mb-2">
            ⚡ Real-Time Energy Flow
          </h4>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">
            Track energy from solar to home, grid, or battery in real-time.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#0B1F33] text-base md:text-lg mb-1 md:mb-2">
            📊 Performance Analytics
          </h4>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">
            View daily, monthly, and yearly performance insights.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#0B1F33] text-base md:text-lg mb-1 md:mb-2">
            🔍 Panel-Level Monitoring
          </h4>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">
            Detect issues instantly with panel-level tracking.
          </p>
        </div>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative group">

      {/* Glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#84cc16] to-[#FFC107] blur-2xl opacity-20 group-hover:opacity-40 transition duration-500 rounded-3xl"></div>

      <img
        src={servicehouse}
        alt="Solar Monitoring App"
        className="
          relative rounded-3xl shadow-2xl
          w-full 
          max-w-sm sm:max-w-md md:max-w-lg
          h-[300px] sm:h-[320px] md:h-[620px]
          object-cover mx-auto
          transform group-hover:scale-105 transition duration-500
        "
      />
    </div>

  </div>
</section>




<section className="py-20 md:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div>

      {/* TITLE */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1F33] mb-6 leading-tight">
        Solar + EV Charging Solution
      </h2>

      {/* INTRO */}
      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
        Integrating a <span className="font-semibold text-[#84cc16]">10 kW Solar System</span> with an EV is one of the smartest financial moves for a homeowner in 2026. 
        Given your professional focus on solar energy and logistics, you'll appreciate the high ROI and efficiency of this setup.
      </p>

      <p className="text-base md:text-lg text-gray-700 mb-6">
        Here is the breakdown of the savings and technical requirements for your 10 kW system.
      </p>

      {/* SECTION 1 */}
      <h3 className="text-xl md:text-2xl font-bold text-[#0B1F33] mb-3">
        1. Financial Impact: Savings per KM
      </h3>

      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
        In India, the cost of running a petrol car in 2026 is roughly ₹6.5 – ₹7.5 per km, 
        while a grid-charged EV costs about ₹1.2 – ₹1.5 per km. By using your own solar power, 
        that cost drops to nearly zero.
      </p>

      {/* TABLE */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm md:text-base border rounded-xl overflow-hidden">
          <thead className="bg-[#84cc16] text-white">
            <tr>
              <th className="p-3 text-left">Fuel Source</th>
              <th className="p-3 text-center">Cost / KM</th>
              <th className="p-3 text-center">Monthly (1000 km)</th>
              <th className="p-3 text-center">Annual Savings</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 bg-white">
            <tr className="border-b">
              <td className="p-3">Petrol</td>
              <td className="text-center">₹7.00</td>
              <td className="text-center">₹7,000</td>
              <td className="text-center">—</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">Grid Electricity</td>
              <td className="text-center">₹1.20</td>
              <td className="text-center">₹1,200</td>
              <td className="text-center text-green-600 font-semibold">₹69,600</td>
            </tr>
            <tr>
              <td className="p-3">Solar (Self-Gen)</td>
              <td className="text-center">₹0.00*</td>
              <td className="text-center">₹0</td>
              <td className="text-center">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* NOTE */}
      <p className="text-sm text-gray-500 mb-8">
        Note: While there is an upfront installation cost, the "fuel" becomes free after the 3–4 year payback period.
      </p>

      {/* SECTION 2 */}
      <h3 className="text-xl md:text-2xl font-bold text-[#0B1F33] mb-3">
        2. Technical Capacity: 10 kW Solar System
      </h3>

      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        A 10 kW system is robust and typically generates 
        <span className="font-semibold"> 40–50 units (kWh) per day </span> 
        in Tamil Nadu’s sunny climate.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="rounded-3xl overflow-hidden shadow-xl">
      <img
        src={serviceImg}
        alt="Solar EV Charging"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>







<section className="bg-white py-20 md:py-28">
  <div className="max-w-7xl mx-auto px-5 md:px-6">

    {/* TITLE */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1F33] mb-4">
        Solar System Types
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
        Choosing the right solar system depends on your goals — saving on bills, 
        backup during outages, or complete energy independence.
      </p>
    </div>

    {/* IMAGE */}
    <div className="rounded-3xl overflow-hidden shadow-xl mb-16">
      <img
        src={solarTypesImg}
        alt="Solar System Types"
        className="w-full object-cover"
      />
    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* ON GRID */}
      <div className="bg-[#F8FAFC] rounded-2xl p-6 shadow hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-[#0B1F33] mb-3">1. On-Grid System</h3>

        <p className="text-sm text-gray-600 mb-3">
          <span className="font-semibold">Best for:</span> Reducing electricity bills in stable areas.
        </p>

        <p className="text-sm text-gray-600 mb-3">
          <span className="font-semibold">How it works:</span> Connected to the grid. 
          Solar powers your home first, excess goes to grid. At night, grid supplies power.
        </p>

        <p className="text-sm text-gray-600 mb-3">
          <span className="font-semibold">Components:</span> Panels + Inverter (No battery)
        </p>

        <p className="text-sm text-red-500">
          <span className="font-semibold">Limitation:</span> No power during outages.
        </p>
      </div>

      {/* OFF GRID */}
      <div className="bg-[#F8FAFC] rounded-2xl p-6 shadow hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-[#0B1F33] mb-3">2. Off-Grid System</h3>

        <p className="text-sm text-gray-600 mb-3">
          <span className="font-semibold">Best for:</span> Remote areas without grid.
        </p>

        <p className="text-sm text-gray-600 mb-3">
          <span className="font-semibold">How it works:</span> Fully independent. 
          Generates power and stores in batteries for night use.
        </p>

        <p className="text-sm text-gray-600 mb-3">
          <span className="font-semibold">Components:</span> Panels + Controller + Battery + Inverter
        </p>

        <p className="text-sm text-red-500">
          <span className="font-semibold">Limitation:</span> High cost (battery required)
        </p>
      </div>

      {/* HYBRID */}
      <div className="bg-[#F8FAFC] rounded-2xl p-6 shadow hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-[#0B1F33] mb-3">3. Hybrid System</h3>

        <p className="text-sm text-gray-600 mb-3">
          <span className="font-semibold">Best for:</span> Backup + savings
        </p>

        <p className="text-sm text-gray-600 mb-3">
          <span className="font-semibold">How it works:</span> Uses solar first, then battery, then grid.
        </p>

        <p className="text-sm text-gray-600 mb-3">
          <span className="font-semibold">Components:</span> Panels + Hybrid Inverter + Battery
        </p>

        <p className="text-sm text-green-600">
          <span className="font-semibold">Advantage:</span> Works during power cuts
        </p>
      </div>

    </div>

    {/* COMPARISON */}
    <div className="mt-16 overflow-x-auto">
      <h3 className="text-2xl font-bold text-[#0B1F33] mb-6 text-center">
        Comparison Across Sectors
      </h3>

      <table className="w-full text-sm border rounded-xl overflow-hidden">
        <thead className="bg-[#84cc16] text-white">
          <tr>
            <th className="p-3">Feature</th>
            <th className="p-3">Residential</th>
            <th className="p-3">Commercial</th>
            <th className="p-3">Industrial</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="border-b">
            <td className="p-3">Goal</td>
            <td>Reduce bills</td>
            <td>Peak shaving</td>
            <td>Heavy load offset</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">System</td>
            <td>On-Grid / Hybrid</td>
            <td>Mostly On-Grid</td>
            <td>On-Grid</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">Space</td>
            <td>Rooftop</td>
            <td>Large roofs</td>
            <td>Ground / sheds</td>
          </tr>
          <tr>
            <td className="p-3">Complexity</td>
            <td>Simple</td>
            <td>Medium</td>
            <td>High</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* TIP */}
    <div className="mt-10 bg-[#F0FDF4] border-l-4 border-[#84cc16] p-6 rounded-xl">
      <p className="text-sm md:text-base text-gray-700">
        💡 <span className="font-semibold">Tip:</span> 
        If your goal is ROI, choose <b>On-Grid</b>. 
        If you need backup during power cuts, go for <b>Hybrid</b>.
      </p>
    </div>

  </div>
</section>

{/* light solution  */}

<section className="py-16 md:py-24 bg-[#F4F8FC]">
  <div className="max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-center">

    {/* LEFT IMAGE */}
    <div className="rounded-3xl overflow-hidden shadow-xl group">
      <img
        src={streetLightImg} // import your image
        alt="Solar Street Light"
        className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover transform group-hover:scale-105 transition duration-500"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div>

      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F33] mb-5 leading-tight">
        Solar <span className="text-[#84cc16]">Street Lighting</span> Solutions
      </h2>

      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
        We provide high-efficiency solar street lighting systems designed for
        reliable outdoor illumination in urban, rural, and industrial areas.
        These systems operate independently of the grid, reducing electricity costs
        and ensuring uninterrupted lighting.
      </p>

      {/* FEATURES */}
      <ul className="space-y-3 text-sm md:text-base text-gray-700 mb-6">
        <li className="flex gap-2">✔ High-efficiency LED lighting</li>
        <li className="flex gap-2">✔ Integrated battery & solar panel system</li>
        <li className="flex gap-2">✔ Automatic dusk-to-dawn operation</li>
        <li className="flex gap-2">✔ Weather-resistant & long-lasting design</li>
        <li className="flex gap-2">✔ Ideal for roads, campuses & industries</li>
      </ul>

      {/* HIGHLIGHT BOX */}
      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <p className="text-sm md:text-base text-gray-600">
          💡 <span className="font-semibold text-[#0B1F33]">Best for:</span> 
          Government projects, highways, villages, factories, and commercial spaces.
        </p>
      </div>

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