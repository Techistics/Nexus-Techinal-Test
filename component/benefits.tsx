"use client";

function Benefits() {
  const items = [
    "Hands-on real-world projects",
    "Mentorship from experts",
    "Career growth opportunities",
  ];

  return (
    <section className="py-20 px-6 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black">
        Why Join Us?
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-gray-200 
            bg-[#f9f7ff] hover:bg-white 
            hover:shadow-lg hover:-translate-y-1 
            transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#BB99FE]/20 text-[#BB99FE] font-bold">
              {i + 1}
            </div>
            <p className="text-gray-800 font-medium">{item}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Benefits;
