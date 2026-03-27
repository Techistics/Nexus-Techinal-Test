"use client";

function CTASection() {
  return (
    <section className="py-20 px-6 text-center bg-[#BB99FE] relative overflow-hidden">
      <div className="absolute w-[300px] h-[300px] bg-white opacity-20 rounded-full blur-3xl top-[-80px] left-[-80px]" />
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
        Ready to Start Your Journey?
      </h2>
      <p className="text-black mb-8 max-w-xl mx-auto">
        Don’t miss out on this opportunity to level up your career with real-world experience.
      </p>
      <button className="bg-black text-white px-7 py-3 rounded-xl font-medium cursor-pointer
        hover:scale-105 hover:shadow-lg transition-all duration-300">
        Apply Now
      </button>
    </section>
  );
}

export default CTASection;
