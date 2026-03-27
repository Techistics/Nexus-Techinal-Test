"use client";
import { useEffect, useState } from "react";

function EmailPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2500); 
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    if (!email) return; 
    console.log("Captured Email:", email); 
    setSubmitted(true); 
    setTimeout(() => setShow(false), 2000); 
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-80 text-center">
        <h3 className="text-xl text-black font-bold mb-2">Stay Updated</h3>
        <p className="mb-4 text-gray-600">
          Get latest opportunities directly in your inbox.
        </p>

        {!submitted ? (
          <>
            <input
              type="email"
              placeholder="Enter email"
              className="border p-2 w-full mb-3 text-black rounded-sm"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="bg-black text-white px-4 py-2 w-full rounded cursor-pointer hover:scale-105 hover:shadow-md transition"
            >
              Submit
            </button>
          </>
        ) : (
          <p className="text-green-600 font-medium">
            Thanks! We’ll keep you updated.
          </p>
        )}
      </div>
    </div>
  );
}

export default EmailPopup;
