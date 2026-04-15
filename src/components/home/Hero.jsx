import { useEffect, useState } from "react";
import hero1 from "../../assets/solar-installation.webp";
import hero2 from "../../assets/solar-farm.webp";
import logo from "../../assets/newlogo.png";

export default function Hero({ onQuoteClick }) {

  // TEXT ROTATION
  const phrases = [
    "Real Savings from Day One.",
    "Clean Energy for a Smarter Future.",
    "Powering Homes, Businesses & Industries.",
    "Reliable Solar. Long-Term Value."
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(true);

  // change text every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // change background image every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowLogo(false);
    } else {
      setShowLogo(true);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  
  const images = [hero1, hero2];

  return (
<section className="relative mt-[70px] md:mt-[80px] h-[65vh] sm:h-[75vh] md:h-[85vh] w-full overflow-hidden">

    
{/* LOGO TOP RIGHT */}
<div
  className={`absolute top-[20px] md:top-[40px] right-4 sm:right-6 z-40 transition-all duration-500 ${
    showLogo
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-5 pointer-events-none"
  }`}
>
  <img
    src={logo}
    alt="Evoke Energy"
    className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
  />
</div>

      {/* BACKGROUND IMAGE SLIDER */}
      {images.map((img, i) => (
  <img
    key={i}
    src={img}
    alt="Solar energy"
    className={`absolute inset-0 w-full h-full object-cover
    transition-opacity duration-[2000ms] ease-in-out
    ${imageIndex === i ? "opacity-100" : "opacity-0"}`}
  />
))}

      {/* BLACK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/40 to-black/40 z-0" />

      {/* CENTER CONTENT */}
     <div className="relative z-10 h-full flex items-start md:items-center justify-center text-center px-6 pt-32 md:pt-0">
        <div className="max-w-9xl mx-auto text-white text-center">

  {/* BIG HERO HEADING */}
<h1 className="animate-slide-right font-[900] tracking-[-0.02em] leading-[1.08]
text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[76px]">

  Smart <span className="text-[#FFC107]">Solar</span> Solutions.
  <br />
  Real <span className="text-[#FFC107]">Savings</span> from Day One.

</h1>
  {/* DESCRIPTION */}
  <p className="mt-6 md:mt-8
              text-sm sm:text-base md:text-xl lg:text-2xl
              text-gray-200 max-w-md md:max-w-3xl mx-auto leading-relaxed">
  End-to-end solar EPC solutions delivering reliable power,
  lower energy costs, and long-term value. 
</p>




          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

       <button
  onClick={onQuoteClick}
  className="mainBtn text-black sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
>
  Get Free Quote →
</button>

          <button
  onClick={() =>
    window.open(
      "https://wa.me/918111040090?text=Hello%20I%20am%20interested%20in%20solar%20solutions",
      "_blank"
    )
  }
  className="hidden sm:inline-block border border-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-black transition"
>
  Talk to Experts
</button>

          </div>
        </div>
      </div>
    </section>
  );
}