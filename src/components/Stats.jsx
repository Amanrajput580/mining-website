export default function Stats() {
  const stats = [
    { value: "25K+", label: "Active Users" },
    { value: "2M+", label: "Total Mined" },
    { value: "100K+", label: "Rewards" },
    { value: "100%", label: "Secure & Safe" },
  ];

  return (
    <section className="bg-dark text-white px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">

      {stats.map((item, index) => (
        <div
          key={index}
          className="
            p-4 sm:p-6
            rounded-xl
            border border-blue-500/30
            bg-gray-900/40

            hover:shadow-lg hover:shadow-blue-500/30
            hover:scale-105
            transition
          "
        >
          <h2 className="text-xl sm:text-2xl font-bold text-blue-400">
            {item.value}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            {item.label}
          </p>
        </div>
      ))}

    </section>
  );
}