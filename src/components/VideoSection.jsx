export default function VideoSection() {

  const handleDownloadVideo = () => {
    const link = document.createElement("a");
    link.href = "/mining-video.mp4";
    link.download = "mining-video.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-dark text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
        See How It <span className="text-blue-400">Works</span>
      </h2>

      {/* Description */}
      <p className="text-gray-400 mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
        Watch a quick demo of how our mining app works and download it if you want.
      </p>

      {/* Video */}
      <div className="flex justify-center">
        <div
          className="
            relative
            w-full
            max-w-[260px]
            sm:max-w-[300px]
            md:max-w-[360px]
            lg:max-w-[420px]
            rounded-xl
            overflow-hidden
            border border-blue-500/30
            shadow-[0_0_30px_rgba(59,130,246,0.25)]
          "
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-blue-500/10 blur-xl"></div>

          <video
            src="/mining-video.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            className="relative z-10 w-full h-auto"
          />
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-6 sm:mt-8 flex justify-center">
        <button
          onClick={handleDownloadVideo}
          className="
            bg-blue-500
            px-5 sm:px-6
            py-2.5 sm:py-3
            text-sm sm:text-base
            rounded-lg
            transition-all duration-300
            hover:scale-105
            hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]
          "
        >
          Download Video
        </button>
      </div>

    </section>
  );
}