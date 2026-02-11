import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function QuoteModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
  });

  const [status, setStatus] = useState("idle");

  // Lock body scroll when modal open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open, onClose]);

  if (!open) return null;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");

    const payload = {
      access_key: "885ce92f-7c93-4bbd-ba6e-5d97fb3c1662",
      subject: "New Quote Request",
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
        setFormData({ name: "", email: "", phone: "", requirement: "" });

        setTimeout(() => {
          setStatus("idle");
          onClose();
        }, 2500);
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
    >
      {/* MODAL CARD */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-3xl relative overflow-hidden
                   shadow-2xl border border-white/40 backdrop-blur-xl bg-white/95
                   max-h-[90vh] overflow-y-auto fixed bottom-0 sm:static"
      >
        {/* GREEN HEADER */}
        <div className="bg-gradient-to-r from-[#65a30d] to-[#84cc16] p-6 rounded-t-3xl">
          <h3 className="text-2xl font-bold text-white">
            Get a Free Solar Quote
          </h3>
          <p className="text-white/90 text-sm mt-1">
            Our engineers will contact you shortly.
          </p>
        </div>

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white"
        >
          <FaTimes />
        </button>

        <div className="p-6 sm:p-8">
          {status === "success" && (
            <div className="mb-4 bg-green-100 text-green-800 px-4 py-3 rounded text-sm">
              ✅ Quote request sent successfully!
            </div>
          )}

          {status === "error" && (
            <div className="mb-4 bg-red-100 text-red-800 px-4 py-3 rounded text-sm">
              ❌ Something went wrong. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-4 text-sm focus:ring-2 focus:ring-[#84cc16] outline-none"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-4 text-sm focus:ring-2 focus:ring-[#84cc16] outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-4 text-sm focus:ring-2 focus:ring-[#84cc16] outline-none"
            />

            <textarea
              name="requirement"
              rows="3"
              placeholder="Project Requirement"
              value={formData.requirement}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-3 text-sm resize-none focus:ring-2 focus:ring-[#84cc16] outline-none"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-gradient-to-r from-[#65a30d] to-[#84cc16]
                         text-white font-semibold py-4 rounded-xl
                         hover:scale-[1.02] active:scale-[0.98]
                         transition shadow-lg"
            >
              {status === "loading" ? "Submitting..." : "Request Quote"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
