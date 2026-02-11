import bannerImg from "../assets/solar-farm.webp" // use any solar image

export default function PageBanner({ title }) {
  return (
    <section className="relative h-[260px] md:h-[320px] flex items-center overflow-hidden">

      {/* BG IMAGE */}
      <img
        src={bannerImg}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* GREEN + DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f3b1f]/45 via-[#0f3b1f]/70 to-[#000]/60" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          {title}
        </h1>

        <p className="text-white/80 mt-2 text-sm tracking-wider">
          HOME • {title.toUpperCase()}
        </p>
      </div>
    </section>
  );
}