import footerBg from "../assets/solar-farm.webp" // any solar image
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <img src={footerBg} className="w-full h-full object-cover" />

        {/* DARK GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* ABOUT */}
          <div>
            <h3 className="text-3xl font-bold mb-5">Seapol</h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              Solar energy is renewable and inexhaustible, making it a sustainable
              solution for meeting energy demands and designing the ideal solar
              system for your property.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn].map((Icon,i)=>(
                <div key={i}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center
                             hover:bg-[#84cc16] hover:border-[#84cc16] transition cursor-pointer">
                  <Icon size={16}/>
                </div>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="footerTitle">Company</h4>
            <ul className="footerLinks">
              <li>Home</li>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Latest Blog</li>
              <li>Meet Our Team</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="footerTitle">Quick Links</h4>
            <ul className="footerLinks">
              <li>Projects</li>
              <li>Solar Energy</li>
              <li>Testimonials</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="footerTitle">Get In Touch</h4>
            <ul className="footerLinks">
              <li>📍 Chennai, Tamil Nadu</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@seapol.com</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 mt-16 pt-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
          <p>© 2025 Seapol. All Rights Reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:text-[#84cc16] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#84cc16] cursor-pointer">Terms</span>
            <span className="hover:text-[#84cc16] cursor-pointer">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  )
}