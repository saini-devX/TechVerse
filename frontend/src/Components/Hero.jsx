import React from "react";

const Hero = () => {
  return (
    <section className="pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center text-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent" />

          <div className="absolute inset-0 ring-1 ring-white/10 rounded-3xl" />

          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-xl">
              Upgrade Your{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-pink-400 text-transparent bg-clip-text">
                Tech
              </span>
            </h1>

            <p className="mt-5 text-gray-200 text-xl md:text-2xl leading-relaxed">
              Premium gadgets. Powerful performance. Built for creators, gamers,
              and innovators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
