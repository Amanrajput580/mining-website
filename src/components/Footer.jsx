export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-dark text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 border-t border-gray-800"
    >
      <div className="text-center space-y-2 sm:space-y-3 max-w-xl mx-auto">

        {/* Logo */}
        <h3 className="text-base sm:text-lg font-semibold text-white">
          Mining
        </h3>

        {/* Tagline */}
        <p className="text-gray-400 text-xs sm:text-sm">
          Secure & Fast Crypto Mining Platform
        </p>

        {/* Email */}
        <a
          href="mailto:nastech5757@gmail.com"
          className="
            inline-block
            text-blue-400 font-medium text-sm sm:text-base
            hover:text-blue-300
            hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]
            transition
            break-all
          "
        >
          nastech5757@gmail.com
        </a>

        {/* Copyright */}
        <p className="text-gray-500 text-[11px] sm:text-xs mt-3 sm:mt-4">
          © {new Date().getFullYear()} All rights reserved.
        </p>

      </div>
    </footer>
  );
}