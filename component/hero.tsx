"use client";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#f7f5ff] relative overflow-hidden">
      <div className="absolute w-[400px] h-[400px] bg-[#BB99FE] opacity-20 rounded-full blur-3xl top-[-100px] right-[-100px]" />
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black leading-tight">
        Kickstart Your Career in Tech
      </h1>
      <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
        Join our exclusive program at Nexus, designed to help you land real-world opportunities.
      </p>
      <p className="text-sm md:text-sm mb-4 italic text-black">
        Hurry up! Limited slots available.
      </p>
      <button className="px-7 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer
        bg-[#BB99FE] text-black
        hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg"
      >
        Apply Now
      </button>
    </section>
  );
};

export default Hero;
