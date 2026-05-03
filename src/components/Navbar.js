import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // scrolling down → hide
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowNavbar(false);
      } 
      // scrolling up → show
      else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`
        bg-dark text-white px-4 sm:px-6 py-3 sm:py-4
        flex justify-between items-center
        fixed top-0 left-0 w-full z-50
        transition-transform duration-300 ease-in-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* Logo */}
      <h1 className="text-lg sm:text-xl font-bold text-white">
        Mining
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 lg:gap-8 text-sm lg:text-base">
        <li><button onClick={() => scrollToSection("home")} className="hover:text-blue-400">Home</button></li>
        <li><button onClick={() => scrollToSection("stats")} className="hover:text-blue-400">Stats</button></li>
        <li><button onClick={() => scrollToSection("features")} className="hover:text-blue-400">Features</button></li>
        <li><button onClick={() => scrollToSection("about")} className="hover:text-blue-400">About</button></li>
        <li><button onClick={() => scrollToSection("footer")} className="hover:text-blue-400">Contact</button></li>
      </ul>

      {/* Mobile Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-dark px-4 py-4 flex flex-col gap-3 md:hidden z-50 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("stats")}>Stats</button>
        <button onClick={() => scrollToSection("features")}>Features</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("footer")}>Contact</button>
      </div>
    </nav>
  );
}