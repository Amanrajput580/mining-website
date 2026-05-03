export default function Hero({ bounceHeroBtn }) {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/mining.apk";
    link.download = "mining.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openTelegram = () => {
    window.open(
      "https://t.me/Offical_Mining",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="bg-dark text-white px-4 sm:px-6 py-20 sm:py-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 overflow-hidden">

      {/* Left Content */}
      <div className="max-w-xl w-full text-center md:text-left pt-2 sm:pt-0">

        <p className="text-white mb-3 text-sm md:text-base">
          💎 Mine Smarter, Reward Better
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold leading-tight">
          Start Mining & <br />
          <span className="text-white">Earn Rewards</span>
        </h1>

        <p className="text-gray-400 mt-4 text-sm sm:text-base px-2 sm:px-0">
          Your ultimate hustle free reward based - virtual mining platform.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className={`
              bg-blue-500 px-6 py-3 rounded-lg w-full sm:w-auto
              text-center

              transition-all duration-300
              hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]
              hover:scale-105

              ${bounceHeroBtn ? "animate-bounce" : ""}
            `}
          >
            Download App
          </button>

          {/* Telegram Button */}
          <button
            onClick={openTelegram}
            className="
              flex items-center justify-center gap-2

              border border-blue-400 text-blue-400
              px-6 py-3 rounded-lg w-full sm:w-auto

              transition-all duration-300
              hover:bg-blue-500 hover:text-white
              hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
              hover:scale-105
            "
          >
            {/* Telegram Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M9.04 15.37l-.39 5.52c.56 0 .8-.24 1.09-.53l2.64-2.52 5.47 4c1 .55 1.7.26 1.97-.93l3.6-16.8c.33-1.52-.55-2.12-1.52-1.75L1.4 9.8c-1.47.57-1.45 1.4-.25 1.77l5.2 1.62 12.06-7.6c.57-.35 1.1-.16.68.2" />
            </svg>

            Telegram
          </button>

        </div>
      </div>

      {/* Right Image */}
      <div className="w-full flex justify-center md:justify-end relative mt-6 md:mt-0">

        {/* Glow Effects */}
        <div className="absolute w-[220px] sm:w-[260px] md:w-[320px] h-[220px] sm:h-[260px] md:h-[320px] bg-blue-500/30 blur-[80px] md:blur-[110px] rounded-full"></div>

        <div className="absolute w-[180px] sm:w-[220px] md:w-[260px] h-[180px] sm:h-[220px] md:h-[260px] bg-blue-400/20 blur-[60px] md:blur-[80px] rounded-full"></div>

        {/* Image */}
        <img
          src="/miner.png"
          alt="miner"
          className="
            w-[220px] sm:w-[280px] md:w-[450px]
            relative z-10
            drop-shadow-[0_0_35px_rgba(59,130,246,0.35)]
          "
        />

      </div>

    </section>
  );
}
