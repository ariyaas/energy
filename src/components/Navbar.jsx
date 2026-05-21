import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import logo from "../assets/logo.svg"

export default function Navbar({ openQuote }) {
  const [open, setOpen] = useState(false)



  return (
    <>
      {/* HEADER */}
<header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
  <div className="px-[6%] lg:px-[10%] py-3 grid grid-cols-2 lg:grid-cols-3 items-center">

          {/* LOGO */}
          <div className="justify-self-start">
  <Link to="/">
    <img src={logo} alt="logo" className="h-[50px] md:h-[56px] w-auto object-contain"/>
  </Link>
</div>

          {/* DESKTOP MENU */}
         <nav className="hidden lg:flex justify-self-center items-center gap-12 text-[15px] font-semibold text-gray-600">

  <NavLink to="/" className={({isActive}) => isActive ? "navLink text-brandPrimary" : "navLink"}>Home</NavLink>

  <NavLink to="/about" className={({isActive}) => isActive ? "navLink text-brandPrimary" : "navLink"}>About</NavLink>

  <NavLink to="/services" className={({isActive}) => isActive ? "navLink text-brandPrimary" : "navLink"}>Services</NavLink>

  <NavLink to="/projects" className={({isActive}) => isActive ? "navLink text-brandPrimary" : "navLink"}>Projects</NavLink>

  <NavLink to="/blog" className={({isActive}) => isActive ? "navLink text-brandPrimary" : "navLink"}>Blog</NavLink>

  <NavLink to="/contact" className={({isActive}) => isActive ? "navLink text-brandPrimary" : "navLink"}>Contact</NavLink>

</nav>


  <div className="justify-self-end hidden lg:block">
 <button
  onClick={openQuote}
  className="group flex items-center bg-brandPrimary hover:bg-brandDark rounded-full pl-7 pr-2 py-2 font-semibold text-white hover:scale-105 transition"
>
    <span className="mr-4">Get In Touch</span>

    <span className="w-10 h-10 bg-white text-brandPrimary rounded-full flex items-center justify-center text-lg group-hover:rotate-45 transition">
      ↗
    </span>
  </button>
</div>


          {/* MOBILE MENU BTN */}
       <button
  onClick={()=>setOpen(true)}
  className="lg:hidden absolute right-[6%] top-1/2 -translate-y-1/2
             w-12 h-12 bg-brandPrimary rounded-full flex items-center justify-center shadow-lg"
>
  <div className="space-y-1">
    <span className="block w-5 h-[2px] bg-white"></span>
    <span className="block w-5 h-[2px] bg-white"></span>
    <span className="block w-5 h-[2px] bg-white"></span>
  </div>
</button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
    {/* MOBILE DRAWER */}
<div
  className={`fixed top-0 right-0 h-full w-full bg-[#f4f5f3] z-50
  transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`}
>

  {/* CLOSE BUTTON */}
  <div className="flex justify-end p-6">
    <button
      onClick={() => setOpen(false)}
      className="w-10 h-10 bg-brandPrimary text-white rounded-full text-xl flex items-center justify-center"
    >
      ✕
    </button>
  </div>

  {/* MENU */}
  <nav className="px-6">

    {[
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Projects", path: "/projects" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ].map((item, i) => (
      <Link
        key={i}
        to={item.path}
        onClick={() => setOpen(false)}
        className="flex items-center justify-between py-5 border-b border-gray-300 text-[18px] font-semibold text-gray-700"
      >
        {item.name}
        <span className="text-2xl text-gray-500">+</span>
      </Link>
    ))}

  

   

    {/* CONTACT */}
    <div className="mt-10">
      <p className="text-xl font-semibold mb-4">Contact Us</p>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-11 h-11 bg-brandPrimary text-white rounded-full flex items-center justify-center">
          ☎
        </div>
        <div>
          <p className="text-sm text-gray-500">Call Us</p>
          <p className="font-semibold">+91 9500699955</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-11 h-11 bg-brandPrimary text-white rounded-full flex items-center justify-center">
          ✉
        </div>
        <div>
          <p className="text-sm text-gray-500">Send Email</p>
          <p className="font-semibold">enqenergy@seapol.com</p>
        </div>
      </div>
    </div>

  </nav>
</div>
    </>
  )
}