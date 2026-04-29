export default function MNRESection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* MAIN CARD */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-12 shadow-lg hover:shadow-2xl transition duration-500">

          {/* TOP BADGE */}
          <div className="flex justify-center mb-4">
            <span className="bg-brandPrimary text-white text-xs md:text-sm font-semibold px-4 py-1 rounded-full">
               MNRE Approved Solar Provider
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#0B1F33] mb-6">
             Approved & Certified
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm md:text-base mb-10 leading-relaxed">
            We follow MNRE-aligned standards to deliver high-quality solar solutions,
            enabling customers to benefit from government subsidies and long-term system reliability.
          </p>

          {/* FEATURES GRID */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* CARD 1 */}
            <div className="bg-[#F9FAFB] rounded-2xl p-5 text-center hover:shadow-md transition">
              <p className="text-lg font-semibold text-[#0B1F33] mb-2">
                ✔ Certified Standards
              </p>
              <p className="text-gray-600 text-sm">
                Installation aligned with MNRE quality guidelines.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#F9FAFB] rounded-2xl p-5 text-center hover:shadow-md transition">
              <p className="text-lg font-semibold text-[#0B1F33] mb-2">
                ✔ Subsidy Support
              </p>
              <p className="text-gray-600 text-sm">
                Eligible for government subsidy programs.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#F9FAFB] rounded-2xl p-5 text-center hover:shadow-md transition">
              <p className="text-lg font-semibold text-[#0B1F33] mb-2">
                ✔ Trusted Solutions
              </p>
              <p className="text-gray-600 text-sm">
                Reliable and verified solar installations.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}