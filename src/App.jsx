import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection"; // ✅ NEW
import Stats from "./components/Stats";
import MiningMachines from "./components/MiningMachines";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [bounceHeroBtn, setBounceHeroBtn] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState(null);

  const machines = [
    {
      img: "/silver1.png",
      title: "Silver",
      desc: "Price: $20 | Daily Income: 0.5 | Daily Reward: 2.5%",
      details:
        "Silver mining machine is a virtual mining machine engineered to simulate Silver extraction and deliver consistent digital rewards. Once launched with an initial contribution, it produces 2.5% daily reward based on the contributed amount. The machine operates for a fixed lifespan of 365 days, after which it automatically expires. Users must manually activate mining three times per day by clicking the ‘Mine Now’ button on their dashboard. Each mining session requires the user to watch 10 minutes of ads, which act as the virtual mining process—the full ad duration must be completed to unlock that session’s earnings. This totals up to 30 minutes of ad viewing daily across three mining clicks, securing the full daily reward. After each session, rewards are automatically credited—no further action needed until the next scheduled click. A sleek dashboard displays real-time progress, including total Silver mined in grams or token-based units. All mining actions and rewards are time-stamped, ensuring consistency, fairness, and traceability"
    },
    {
      img: "/silverpermium1.png",
      title: "Silver Premium",
      desc: "Price: $40 | Daily Income: 1 | Daily Reward: 2.5%",
      details:
        "Silver Premium mining machine is a virtual mining machine engineered to simulate Silver Premium extraction and deliver consistent digital rewards. Once launched with an initial contribution, it produces 2.5% daily reward based on the contributed amount. The machine operates for a fixed lifespan of 365 days, after which it automatically expires. Users must manually activate mining three times per day by clicking the ‘Mine Now’ button on their dashboard. Each mining session requires the user to watch 10 minutes of ads, which act as the virtual mining process—the full ad duration must be completed to unlock that session’s earnings. This totals up to 30 minutes of ad viewing daily across three mining clicks, securing the full daily reward. After each session, rewards are automatically credited—no further action needed until the next scheduled click. A sleek dashboard displays real-time progress, including total Silver Premium mined in grams or token-based units. All mining actions and rewards are time-stamped, ensuring consistency, fairness, and traceability."
    },
    {
      img: "/gold1.png",
      title: "Gold",
      desc: "Price: $80 | Daily Income: 2 | Daily Reward: 2.5%",
      details:
        "Gold mining machine is a virtual mining machine engineered to simulate Gold extraction and deliver consistent digital rewards. Once launched with an initial contribution, it produces 2.5% daily reward based on the contributed amount. The machine operates for a fixed lifespan of 365 days, after which it automatically expires. Users must manually activate mining three times per day by clicking the ‘Mine Now’ button on their dashboard. Each mining session requires the user to watch 10 minutes of ads, which act as the virtual mining process—the full ad duration must be completed to unlock that session’s earnings. This totals up to 30 minutes of ad viewing daily across three mining clicks, securing the full daily reward. After each session, rewards are automatically credited—no further action needed until the next scheduled click. A sleek dashboard displays real-time progress, including total Gold mined in grams or token-based units. All mining actions and rewards are time-stamped, ensuring consistency, fairness, and traceability."
    },
    {
      img: "/goldpremium1.png",
      title: "Gold Premium",
      desc: "Price: $160 | Daily Income: 4 | Daily Reward: 2.5%",
      details:
        "Gold Premium mining machine is a virtual mining machine engineered to simulate Gold Premium extraction and deliver consistent digital rewards. Once launched with an initial contribution, it produces 2.5% daily reward based on the contributed amount. The machine operates for a fixed lifespan of 365 days, after which it automatically expires. Users must manually activate mining three times per day by clicking the ‘Mine Now’ button on their dashboard. Each mining session requires the user to watch 10 minutes of ads, which act as the virtual mining process—the full ad duration must be completed to unlock that session’s earnings. This totals up to 30 minutes of ad viewing daily across three mining clicks, securing the full daily reward. After each session, rewards are automatically credited—no further action needed until the next scheduled click. A sleek dashboard displays real-time progress, including total Gold Premium mined in grams or token-based units. All mining actions and rewards are time-stamped, ensuring consistency, fairness, and traceability."
    },
    {
      img: "/platinum1.png",
      title: "Platinum",
      desc: "Price: $320 | Daily Income: 8 | Daily Reward: 2.5%",
      details:
        "Platinum mining machine is a virtual mining machine engineered to simulate Platinum extraction and deliver consistent digital rewards. Once launched with an initial contribution, it produces 2.5% daily reward based on the contributed amount. The machine operates for a fixed lifespan of 365 days, after which it automatically expires. Users must manually activate mining three times per day by clicking the ‘Mine Now’ button on their dashboard. Each mining session requires the user to watch 10 minutes of ads, which act as the virtual mining process—the full ad duration must be completed to unlock that session’s earnings. This totals up to 30 minutes of ad viewing daily across three mining clicks, securing the full daily reward. After each session, rewards are automatically credited—no further action needed until the next scheduled click. A sleek dashboard displays real-time progress, including total Platinum mined in grams or token-based units. All mining actions and rewards are time-stamped, ensuring consistency, fairness, and traceability."
    },
    {
      img: "/diamonds1.png",
      title: "Diamond",
      desc: "Price: $640 | Daily Income: 16 | Daily Reward: 2.5%",
      details:
        "Diamond mining machine is a virtual mining machine engineered to simulate Diamond extraction and deliver consistent digital rewards. Once launched with an initial contribution, it produces 2.5% daily reward based on the contributed amount. The machine operates for a fixed lifespan of 365 days, after which it automatically expires. Users must manually activate mining three times per day by clicking the ‘Mine Now’ button on their dashboard. Each mining session requires the user to watch 10 minutes of ads, which act as the virtual mining process—the full ad duration must be completed to unlock that session’s earnings. This totals up to 30 minutes of ad viewing daily across three mining clicks, securing the full daily reward. After each session, rewards are automatically credited—no further action needed until the next scheduled click. A sleek dashboard displays real-time progress, including total Diamond mined in grams or token-based units. All mining actions and rewards are time-stamped, ensuring consistency, fairness, and traceability."
    },
    {
      img: "/ruby.png",
      title: "Ruby Diamond",
      desc: "Price: $1000 | Daily Income: 25 | Daily Reward: 2.5%",
      details:
        "Ruby Diamond mining machine is a virtual mining machine engineered to simulate Ruby Diamond extraction and deliver consistent digital rewards. Once launched with an initial contribution, it produces 2.5% daily reward based on the contributed amount. The machine operates for a fixed lifespan of 365 days, after which it automatically expires. Users must manually activate mining three times per day by clicking the ‘Mine Now’ button on their dashboard. Each mining session requires the user to watch 10 minutes of ads, which act as the virtual mining process—the full ad duration must be completed to unlock that session’s earnings. This totals up to 30 minutes of ad viewing daily across three mining clicks, securing the full daily reward. After each session, rewards are automatically credited—no further action needed until the next scheduled click. A sleek dashboard displays real-time progress, including total Ruby Diamond mined in grams or token-based units. All mining actions and rewards are time-stamped, ensuring consistency, fairness, and traceability."
    },
    {
      img: "/reddiamond.png",
      title: "Red Diamond",
      desc: "Price: $2500 | Daily Income: 62.5 | Daily Reward: 2.5%",
      details:
      "Red Diamond mining machine is a virtual mining machine engineered to simulate Red Diamond extraction and deliver consistent digital rewards. Once launched with an initial contribution, it produces 2.5% daily reward based on the contributed amount. The machine operates for a fixed lifespan of 365 days, after which it automatically expires. Users must manually activate mining three times per day by clicking the ‘Mine Now’ button on their dashboard. Each mining session requires the user to watch 10 minutes of ads, which act as the virtual mining process—the full ad duration must be completed to unlock that session’s earnings. This totals up to 30 minutes of ad viewing daily across three mining clicks, securing the full daily reward. After each session, rewards are automatically credited—no further action needed until the next scheduled click. A sleek dashboard displays real-time progress, including total Red Diamond mined in grams or token-based units. All mining actions and rewards are time-stamped, ensuring consistency, fairness, and traceability."
    },
    {
      img: "/sapphire.png",
      title: "Sapphire",
      desc: "Price: $5000 | Daily Income: 125 | Daily Reward: 2.5%",
      details:
        "Sapphire mining machine is a virtual mining machine engineered to simulate Sapphire extraction and deliver consistent digital rewards. Once launched with an initial contribution, it produces 2.5% daily reward based on the contributed amount. The machine operates for a fixed lifespan of 365 days, after which it automatically expires. Users must manually activate mining three times per day by clicking the ‘Mine Now’ button on their dashboard. Each mining session requires the user to watch 10 minutes of ads, which act as the virtual mining process—the full ad duration must be completed to unlock that session’s earnings. This totals up to 30 minutes of ad viewing daily across three mining clicks, securing the full daily reward. After each session, rewards are automatically credited—no further action needed until the next scheduled click. A sleek dashboard displays real-time progress, including total Sapphire mined in grams or token-based units. All mining actions and rewards are time-stamped, ensuring consistency, fairness, and traceability."
    }
  ];

  const openDetails = (machine) => {
    setSelectedMachine(machine);
  };

  const closeDetails = () => {
    setSelectedMachine(null);
  };

  const triggerSubscribe = () => {
    setSelectedMachine(null);

    window.scrollTo({ top: 0, behavior: "smooth" });

    setBounceHeroBtn(true);

    setTimeout(() => {
      setBounceHeroBtn(false);
    }, 2000);
  };

  return (
    <div className="bg-dark overflow-x-hidden">

      <Navbar />

      <section id="home" className="px-3 sm:px-0">
        <Hero bounceHeroBtn={bounceHeroBtn} />
      </section>

      <section id="video" className="px-3 sm:px-0">
        <VideoSection />
      </section>

      <section id="stats" className="px-3 sm:px-0">
        <Stats />
      </section>

      <section id="machines" className="px-3 sm:px-0">
        <MiningMachines machines={machines} openDetails={openDetails} />
      </section>

      <section id="features" className="px-3 sm:px-0">
        <Features />
      </section>

      <section id="about" className="px-3 sm:px-0">
        <About />
      </section>

      <Footer />

      {/* 🔥 MODAL */}
      {selectedMachine && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-3">

          <div className="relative bg-gray-900/95 backdrop-blur-xl text-white w-full sm:w-[90%] max-w-lg rounded-xl border border-blue-500/30 p-4 sm:p-6 overflow-hidden">

            <button
              onClick={closeDetails}
              className="absolute top-3 right-4 text-xl text-blue-400 hover:scale-110 transition"
            >
              ✖
            </button>

            <div className="max-h-[65vh] overflow-y-auto space-y-4">

              <h2 className="text-lg sm:text-xl font-bold text-blue-400">
                {selectedMachine.title}
              </h2>

              {/* ✅ FIXED IMG (THIS FIXES NETLIFY ERROR) */}
              <img
                src={selectedMachine.img}
                alt={selectedMachine.title}
                className="w-28 sm:w-40 mx-auto"
              />

              <p className="text-gray-300 text-sm sm:text-base">
                {selectedMachine.desc}
              </p>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {selectedMachine.details}
              </p>

            </div>

            <button
              onClick={triggerSubscribe}
              className="mt-4 w-full bg-blue-500 py-2 rounded-lg font-semibold hover:scale-105 transition"
            >
              Subscribe
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default App;
