"use client";

function SocialProof() {
  const testimonials = [
    {
      name: "Ali Haider",
      text: "This program changed my career!",
    },
    {
      name: "Sara Khan",
      text: "Highly recommended for beginners.",
    },
    {
      name: "Ahmed Ali",
      text: "Amazing experience!",
    },
  ];

  return (
    <section className="py-20 px-6 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black">
        What Others Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-gray-200 
            bg-[#f9f7ff] hover:bg-white 
            hover:shadow-lg hover:-translate-y-1 
            transition-all duration-300 text-left"
          >
            <p className="text-gray-700 mb-4 italic">
              “{item.text}”
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-10 h-10 rounded-full bg-[#BB99FE]/30 flex items-center justify-center font-bold text-[#BB99FE]">
                {item.name.charAt(0)}
              </div>
              <span className="font-medium text-black">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SocialProof;
