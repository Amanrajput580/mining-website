export default function Features() {
  const features = [
    { title: "Fast Mining", desc: "Powerful servers ensure smooth mining." },
    { title: "Secure & Safe", desc: "Top-level security for your earnings." },
    { title: "Instant Payouts", desc: "Withdraw anytime easily." },
    { title: "24/7 Support", desc: "We are always here to help." }
  ];

  return (
    <section className="bg-dark text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
        Why Choose <span className="text-blue-400">Mining?</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

        {features.map((item, index) => (
          <div
            key={index}
            className="
              p-5 sm:p-6
              rounded-xl
              border border-blue-500/30
              bg-gray-900/30
              hover:border-blue-400
              hover:shadow-lg
              hover:shadow-blue-500/30
              hover:-translate-y-2
              transition
            "
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm sm:text-base">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}