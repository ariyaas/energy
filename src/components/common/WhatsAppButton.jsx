import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918111040090?text=Hello%20I%20am%20interested%20in%20solar%20solutions"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsappFloat fixed bottom-2 right-2 z-50
                 w-14 h-14 bg-[#25D366] rounded-full
                 flex items-center justify-center
                 text-white text-3xl shadow-lg
                 hover:scale-110 active:scale-95 transition"
    >
      <FaWhatsapp />
    </a>
  );
}