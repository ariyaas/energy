const data = [
  { title: "Panel", ours: "Own Manufacture", others: "3rd Party", ok: false },
  { title: "Inverter", ours: "Own Manufacture", others: "3rd Party", ok: false },
  { title: "Structure", ours: "Own Manufacture", others: "3rd Party", ok: false },
  { title: "Warranty", ours: "Own Manufacture", others: "3rd Party", ok: false },
  { title: "Installation", ours: "Inhouse Team", others: "3rd Party / Inhouse", ok: true },
  { title: "EPC", ours: "Inhouse Team", others: "3rd Party / NA", ok: true },
  { title: "O&M", ours: "Inhouse Team", others: "3rd Party / NA", ok: true },
  { title: "Support", ours: "24x7 Online", others: "Not Available", ok: false },
];

export default function PremiumComparison() {
  return (
    <section className="py-4 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-center mb-10 md:mb-16 tracking-tight">
          Why Choose Us
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

          {/* OUR COMPANY */}
         <div className="rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 
  bg-brandPrimary text-white shadow-xl md:shadow-2xl 
  hover:scale-[1.02] transition duration-500">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6">
              Our Company
            </h3>

            <div className="space-y-3 md:space-y-4">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center 
                  bg-white/10 backdrop-blur-md 
                  p-3 sm:p-4 rounded-lg md:rounded-xl 
                  hover:bg-white/20 transition"
                >
                  <span className="text-sm sm:text-base md:text-lg font-semibold">
                    {item.title}
                  </span>

                  <span className="text-xs sm:text-sm md:text-base font-medium text-right">
                    {item.ours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* OTHERS */}
          <div className="rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 
            bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 
            text-gray-800 shadow-lg md:shadow-xl 
            hover:scale-[1.02] transition duration-500">

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6">
              Others
            </h3>

            <div className="space-y-3 md:space-y-4">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center 
                  bg-white/60 backdrop-blur-md 
                  p-3 sm:p-4 rounded-lg md:rounded-xl 
                  hover:bg-white/80 transition"
                >
                  <span className="text-sm sm:text-base md:text-lg font-semibold">
                    {item.title}
                  </span>

                  <span className={`text-xs sm:text-sm md:text-base font-medium text-right ${
                    item.ok ? "text-green-600" : "text-red-500"
                  }`}>
                    {item.others}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}