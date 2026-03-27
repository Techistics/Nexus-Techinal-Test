"use client";

import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md p-8 border rounded shadow-sm">
        <h1 className="text-3xl font-bold mb-4 text-black">Thank You!</h1>
        <p className="text-black mb-6">
          Your application has been submitted successfully. We will contact you soon.
        </p>
        <Link href="/">
          <button className="px-6 py-2 bg-[#BB99FE] text-black rounded hover:bg-black hover:text-white transition">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
