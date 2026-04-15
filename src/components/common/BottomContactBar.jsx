import useScrollDirection from "../../hooks/useScrollDirection";

export default function BottomContactBar() {
  const scrollDirection = useScrollDirection();

  return (
   <div
  className={`fixed bottom-0 left-0 w-full bg-green-900 text-white flex z-50 transition-transform duration-300 md:hidden ${
    scrollDirection === "down"
      ? "translate-y-full"
      : "translate-y-0"
  }`}
>
  <a
    href="https://wa.me/919500699955"
    className="flex-1 flex items-center justify-center py-3 text-sm border-r"
  >
    WhatsApp Call
  </a>

  <a
    href="tel:+919500699955"
    className="flex-1 flex items-center justify-center py-3 text-sm border-r"
  >
    Phone Call
  </a>

  <a
    href="https://wa.me/919500699955"
    className="flex-1 flex items-center justify-center py-3 text-sm"
  >
    WhatsApp
  </a>
</div>
  );
}