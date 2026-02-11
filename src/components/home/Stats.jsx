import { useEffect, useRef, useState } from "react";

export default function Stats() {
  const stats = [
    { value: 30, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "MW Installed" },
    { value: 1500, suffix: "+", label: "MW Supplied" },
    { value: 500, suffix: "+", label: "Projects Delivered" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const startedRef = useRef(false);

  // Start counter when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          animateCounts();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Counter animation
  const animateCounts = () => {
    const duration = 6000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCounts(stats.map((stat) => Math.floor(progress * stat.value)));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <section ref={sectionRef} className="relative bg-white">

      {/* Hero → white gradient blend */}
      <div className="h-24 sm:h-32 bg-gradient-to-b from-transparent to-white" />

      {/* Floating cards */}
      <div className="-mt-32 sm:-mt-36 md:-mt-44 lg:-mt-48 pb-16">
        <div className="w-full px-[6%] lg:px-[10%]">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

            {stats.map((item, i) => (
              <div
                key={i}
                className="
                  group
                  bg-white rounded-2xl
                  p-6 sm:p-8
                  text-center
                  shadow-xl
                  border border-gray-100
                  transition-all duration-500
                  hover:-translate-y-2 hover:shadow-2xl
                  hover:bg-gradient-to-b hover:from-[#84cc16] hover:to-[#6fb300]
                "
              >
                {/* NUMBER */}
                <h3 className="
                  text-3xl sm:text-4xl lg:text-5xl 
                  font-extrabold text-black mb-2
                  transition-colors duration-500 
                  group-hover:text-white
                ">
                  {counts[i]}{item.suffix}
                </h3>

                {/* LABEL */}
                <p className="
                  text-sm sm:text-base 
                  text-black font-medium
                  transition-colors duration-500 
                  group-hover:text-white
                ">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
}