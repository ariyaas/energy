import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";
import PageBanner from "../components/PageBanner";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", message: ""
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const payload = {
      access_key: "885ce92f-7c93-4bbd-ba6e-5d97fb3c1662",
      subject: "New Contact Form Submission",
      from_name: "Seapol Energy Website",
      ...formData,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name:"", email:"", phone:"", message:"" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageBanner title="Contact Us" />

      {/* CONTACT SECTION */}
      <section className="bg-[#F7F9FC] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-6">

          {/* HEADER */}
          <div className="text-center mb-10 md:mb-16">
  <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0B1F33] leading-tight">
    Get In Touch With {" "}
    <span className="text-brandPrimary">Our Team</span>
  </h2>
</div>

          {/* GRID */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-start">

            {/* LEFT INFO */}
            <div className="space-y-6 md:space-y-8">

              {/* KEY CONTACTS */}
             <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100">

  {/* TITLE */}
  <h3 className="text-xl md:text-2xl font-bold text-[#0B1F33] mb-6">
    Key <span className="text-brandPrimary">Contacts</span>
  </h3>

  {/* LIST */}
  {[
    { name: "Omska Riyaz Maraikayer", role: "CEO & CTO" },
    { name: "Abdul Razak", role: "Business Development" },
    { name: "G. Varadaraj", role: "Technical Head" },
    { name: "T. Abdulla", role: "Project Management" },
  ].map((item, i) => (

    <div
      key={i}
      className="
        flex items-center gap-4 p-3 md:p-4 rounded-xl
        transition-all duration-300 cursor-pointer

        hover:bg-brandPrimary/10 hover:-translate-y-1 hover:shadow-sm
      "
    >

      {/* ICON */}
      <div className="
        w-10 h-10 rounded-lg 
        bg-brandPrimary/10 text-brandPrimary
        flex items-center justify-center
      ">
        <FaUserTie />
      </div>

      {/* TEXT */}
      <div>
        <p className="font-semibold text-[#0B1F33] text-sm md:text-base">
          {item.name}
        </p>
        <p className="text-xs md:text-sm text-gray-500">
          {item.role}
        </p>
      </div>

    </div>

  ))}

</div>

              {/* COMPANY INFO */}
             <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100">

  {/* TITLE */}
  <h3 className="text-xl md:text-2xl font-bold text-[#0B1F33] mb-6">
    Company <span className="text-brandPrimary">Information</span>
  </h3>

  {/* CONTENT */}
  <div className="space-y-5 text-gray-600 text-sm md:text-base">

    {/* PHONE */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-brandPrimary/10 text-brandPrimary flex items-center justify-center">
        <FaPhoneAlt />
      </div>
      <span>+91 95006 99955</span>
    </div>

    {/* EMAIL */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-brandPrimary/10 text-brandPrimary flex items-center justify-center">
        <FaEnvelope />
      </div>
      <span>energy@seapol.com</span>
    </div>

    {/* ADDRESS */}
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-brandPrimary/10 text-brandPrimary flex items-center justify-center mt-1">
        <FaMapMarkerAlt />
      </div>
      <span>
        4th Floor, Dheen Estate, Moore Street, Chennai – 600001
      </span>
    </div>

  </div>

</div>

            </div>

            {/* FORM */}
            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold text-[#0B1F33] mb-5 md:mb-6">
                Send Us a Message
              </h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">

  {/* INPUTS */}
  <input
    name="name"
    required
    value={formData.name}
    onChange={handleChange}
    placeholder="Your Name"
    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none
    focus:border-brandPrimary focus:ring-2 focus:ring-brandPrimary/30 transition"
  />

  <input
    name="email"
    required
    value={formData.email}
    onChange={handleChange}
    placeholder="Your Email"
    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none
    focus:border-brandPrimary focus:ring-2 focus:ring-brandPrimary/30 transition"
  />

  <input
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Phone Number"
    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none
    focus:border-brandPrimary focus:ring-2 focus:ring-brandPrimary/30 transition"
  />

  <textarea
    rows="5"
    name="message"
    required
    value={formData.message}
    onChange={handleChange}
    placeholder="Your Message"
    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none resize-none
    focus:border-brandPrimary focus:ring-2 focus:ring-brandPrimary/30 transition"
  />

  {/* BUTTON */}
  <button
    className="
      w-full bg-brandPrimary text-white font-semibold
      py-3 rounded-xl
      hover:bg-blue-800 hover:scale-[1.02]
      transition duration-300 shadow-md hover:shadow-lg
    "
  >
    Send Message →
  </button>

  {/* SUCCESS MESSAGE */}
  {status === "success" && (
    <div className="
      bg-brandPrimary/10 text-brandPrimary
      px-4 py-3 rounded-lg text-sm md:text-base
      border border-brandPrimary/20
    ">
      ✅ Message sent successfully!
    </div>
  )}

</form>
            </div>

          </div>
        </div>
      </section>

      {/* OUR PRESENCE */}
   <section className="bg-gray-50 pb-16 md:pb-20">
  <div className="max-w-7xl mx-auto px-5 md:px-6">
    
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg text-center">
      
      {/* TITLE */}
      <h3 className="text-2xl md:text-3xl font-bold text-[#0B1F33] mb-6 md:mb-8">
        Our <span className="text-brandPrimary">Presence</span>
      </h3>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">

        {[
          "Chennai","Tuticorin","Tirunelveli","Ramnad",
          "Trichy","Thanjavur","Vijayawada",
          "Chittoor","Bangalore","Cochin"
        ].map((city,i)=>(
          
          <div
            key={i}
            className="
              bg-brandPrimary/10 text-brandPrimary font-semibold
              rounded-xl py-2 md:py-3 px-3 md:px-4
              text-sm md:text-base text-center
              transition-all duration-300 cursor-pointer

              hover:bg-brandPrimary hover:text-white
              hover:-translate-y-1 hover:shadow-md
            "
          >
            {city}
          </div>

        ))}

      </div>
    </div>

  </div>
</section>


      {/* GOOGLE MAP */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title="Seapol Energy Location"
              className="w-full h-[320px] md:h-[420px]"
              loading="lazy"
              src="https://www.google.com/maps?q=Moore%20Street%20Chennai&output=embed"
            />
          </div>
        </div>
      </section>

    </>
  );
}