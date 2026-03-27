"use client";

function Highlights() {
  const points = [
    "Live interactive sessions",
    "Real-world practical tasks",
    "Networking opportunities",
    "Hands-on learning experience",
  ];

  return (
    <section className="py-20 px-6 bg-[#f7f5ff] text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black">
        What You'll Experience
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {points.map((point, i) => (
          <div
            key={i}
            className="p-5 rounded-xl bg-white border border-gray-200 
            hover:shadow-md hover:-translate-y-1 
            transition-all duration-300"
          >
            <p className="text-gray-800 font-medium">{point}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Highlights;
