"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const FORM_DRAFT_KEY = "studentAdmissionFormDraft";
const STEP_DRAFT_KEY = "studentAdmissionFormStep";

export default function MultiStepForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [isDraftLoaded, setIsDraftLoaded] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    country: "",
    category: "",
    motivation: "",
    passportNumber: "",
    travelPurpose: "",
    budgetConfirmed: false,
  });

  useEffect(() => {
    try {
      const savedForm = localStorage.getItem(FORM_DRAFT_KEY);
      const savedStep = localStorage.getItem(STEP_DRAFT_KEY);

      if (savedForm) {
        const parsed = JSON.parse(savedForm);
        setForm((prev) => ({ ...prev, ...parsed }));
      }

      if (savedStep) {
        const parsedStep = Number(savedStep);
        if (parsedStep >= 1 && parsedStep <= 4) {
          setStep(parsedStep);
        }
      }
    } catch (err) {
      console.error("Failed to restore form draft:", err);
    } finally {
      setIsDraftLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isDraftLoaded) return;
    localStorage.setItem(FORM_DRAFT_KEY, JSON.stringify(form));
    localStorage.setItem(STEP_DRAFT_KEY, String(step));
  }, [form, step, isDraftLoaded]);

  const next = () => {
    setError("");
    if (step === 1 && (!form.fullName || !form.email || !form.country)) {
      setError("Please fill all required fields in Step 1");
      return;
    }
    if (step === 2 && !form.category) {
      setError("Please select a category");
      return;
    }
    setStep(step + 1);
  };

  const submit = async () => {
    setError("");
    if ((form.category === "Fully Funded" && !form.motivation) ||
        (form.category === "Invitation Letter" && (!form.passportNumber || !form.travelPurpose)) ||
        (form.category === "Self-Funded" && !form.budgetConfirmed)) {
      setError("Please fill all required fields in Step 3");
      return;
    }
    setStep(4); 
  };

  const confirmSubmission = async () => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      localStorage.setItem("formData", JSON.stringify(form));
      localStorage.removeItem(FORM_DRAFT_KEY);
      localStorage.removeItem(STEP_DRAFT_KEY);
      router.push("/thankyou");
    } catch (err) {
      setError("Submission failed. Try again later.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 text-black">
      <div className="w-full max-w-md p-6 border rounded shadow-md text-black" >
        <h2 className="text-xl font-bold text-center mb-4">Student Admission Form</h2>
        {step < 4 && <p className="text-sm italic text-end mb-4">Step {step} / 3</p>}

        {error && <p className="text-red-500 mb-3">{error}</p>}

        {step === 1 && (
          <div className="flex flex-col gap-3">
            <input placeholder="Full Name" value={form.fullName} onChange={e=>setForm({...form, fullName:e.target.value})} className="border p-2 rounded"/>
            <input placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="border p-2 rounded"/>
            <input placeholder="Country" value={form.country} onChange={e=>setForm({...form, country:e.target.value})} className="border p-2 rounded"/>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-2">
            {["Fully Funded", "Invitation Letter", "Self-Funded"].map(c => (
              <label key={c} className={`flex items-center gap-2 p-2 rounded border ${form.category===c ? "border-[#BB99FE] bg-[#f7f5ff]" : "border-gray-200"}`}>
                <input type="radio" checked={form.category===c} onChange={()=>setForm({...form, category:c})}/>
                {c}
              </label>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-3">
            {form.category === "Fully Funded" && <textarea placeholder="Motivation" value={form.motivation} onChange={e=>setForm({...form, motivation:e.target.value})} className="border p-2 rounded"/>}
            {form.category === "Invitation Letter" && <>
              <input placeholder="Passport Number" value={form.passportNumber} onChange={e=>setForm({...form, passportNumber:e.target.value})} className="border p-2 rounded"/>
              <input placeholder="Purpose of Travel" value={form.travelPurpose} onChange={e=>setForm({...form, travelPurpose:e.target.value})} className="border p-2 rounded"/>
            </>}
            {form.category === "Self-Funded" && <label className="flex items-center gap-2"><input type="checkbox" checked={form.budgetConfirmed} onChange={e=>setForm({...form, budgetConfirmed:e.target.checked})}/> I confirm my budget</label>}
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2 text-center">Confirm Your Details</h3>
            <p><strong>Full Name:</strong> {form.fullName}</p>
            <p><strong>Email:</strong> {form.email}</p>
            <p><strong>Country:</strong> {form.country}</p>
            <p><strong>Category:</strong> {form.category}</p>
            {form.category === "Fully Funded" && <p><strong>Motivation:</strong> {form.motivation}</p>}
            {form.category === "Invitation Letter" && <>
              <p><strong>Passport Number:</strong> {form.passportNumber}</p>
              <p><strong>Purpose of Travel:</strong> {form.travelPurpose}</p>
            </>}
            {form.category === "Self-Funded" && <p><strong>Budget Confirmed:</strong> {form.budgetConfirmed ? "Yes" : "No"}</p>}
          </div>
        )}

        <div className="flex justify-between mt-4">
          {step>1 && step<4 && <button onClick={()=>setStep(step-1)} className=" cursor-pointer px-6 py-1 border rounded text-black">Back</button>}

          {step < 3 ? (
            <button onClick={next} className=" cursor-pointer px-6 py-1 border rounded bg-[#BB99FE] text-white hover:bg-black transition">Next</button>
          ) : step === 3 ? (
            <button onClick={submit} className=" cursor-pointer px-3 py-1 border rounded bg-black text-white">Review</button>
          ) : (
            <button onClick={confirmSubmission} className=" cursor-pointer px-3 py-1 border rounded bg-[#BB99FE] text-black">Submit</button>
          )}
        </div>
      </div>
    </div>
  );
}
