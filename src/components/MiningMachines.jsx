export default function MiningMachines({ machines, openDetails }) {
  return (
    <section className="bg-dark text-white px-4 sm:px-6 py-12 sm:py-16">

      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
        Mining <span className="text-blue-400">Machines</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

        {machines.map((machine, index) => (
          <div
            key={index}
            className="
              relative
              bg-gray-900/40
              border border-blue-500/30
              rounded-xl
              p-4 sm:p-5
              text-center

              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]
            "
          >

            {/* MACHINE NAME */}
            <h3 className="text-base sm:text-lg font-bold text-blue-400 mb-3 sm:mb-4">
              {machine.title}
            </h3>

            {/* IMAGE */}
            <img
              src={machine.img}
              alt={machine.title}
              className="
                w-24 sm:w-32 mx-auto mb-3 sm:mb-4
                drop-shadow-[0_0_18px_rgba(59,130,246,0.4)]
              "
            />

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-5 px-1 sm:px-0">
              {machine.desc}
            </p>

            {/* DETAILS BUTTON */}
            <button
              onClick={() => openDetails(machine)}
              className="
                px-4 sm:px-5 py-2 rounded-lg bg-blue-500 text-white text-xs sm:text-sm

                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
              "
            >
              Details
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}