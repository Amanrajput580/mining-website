export default function About() {
  return (
    <section className="bg-dark text-white px-4 sm:px-6 lg:px-8 py-14 sm:py-20">

      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          About <span className="text-blue-400">Us</span>
        </h1>

        {/* Text */}
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed space-y-4">
          Mining is a digital platform built to support the early-stage development of a future physical crypto mining company. Users participate through subscriptions that contribute to building and operating the mining infrastructure. In return, they receive symbolic virtual rewards called “Virtual Diamonds,” which are not financial instruments and have no guaranteed monetary value.
        </p>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-4">
          The platform focuses on managing the setup, maintenance, and optimization of mining operations while providing a transparent and structured user experience. All rewards and features are part of a virtual system designed for early supporters and do not represent investment returns, financial services, or profit guarantees.
        </p>

      </div>

    </section>
  );
}