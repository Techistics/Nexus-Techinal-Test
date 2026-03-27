"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-3">
          Nexus Technical Assessment
        </h1>
        <p className="text-gray-600">
          Explore the tasks below
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <Link href="/task1" className="group">
          <div className="w-64 p-6 border rounded-xl cursor-pointer 
            hover:shadow-lg hover:-translate-y-1 transition-all">
            <h2 className="text-xl font-semibold mb-2 text-black group-hover:text-[#BB99FE]">
              Task 1
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Conversion-focused landing page with sections and CTA
            </p>
            <span className="text-sm font-medium text-[#BB99FE] group-hover:underline">
              View →
            </span>
          </div>
        </Link>
        <Link href="/task2" className="group">
          <div className="w-64 p-6 border rounded-xl cursor-pointer 
            hover:shadow-lg hover:-translate-y-1 transition-all">
            <h2 className="text-xl font-semibold mb-2 text-black group-hover:text-[#BB99FE]">
              Task 2
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Multi-step application form with dynamic logic
            </p>
            <span className="text-sm font-medium text-[#BB99FE] group-hover:underline">
              View →
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
