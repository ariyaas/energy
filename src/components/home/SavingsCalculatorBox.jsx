


export default function SavingsCalculatorBox() {
  return (
    <div className="mb-14 text-center">

      {/* HEADER */}
      <h2 className="text-[26px] md:text-[36px] font-bold text-[#0B1F33]">
        Calculate Your Solar Savings
      </h2>

      <div className="mt-2 h-[3px] w-[260px] bg-brandPrimary mx-auto" />

      <p className="mt-3 text-[15px] text-gray-500">
        Check your savings instantly with our smart calculator
      </p>

      {/* BUTTON */}
     <a
  href="/solar-calculator"
  className="inline-block mt-8 bg-brandPrimary hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition hover:scale-105"
>
  Calculate Now →
</a>

    </div>
  );
}