"use client";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "0e4e017f-001b-489e-b05c-0703a795e1f5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <form onSubmit={onSubmit} className="flex flex-col items-center gap-6 mt-15">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="px-4 py-2 rounded-md w-80 bg-neutral-600 text-neutral-200"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="px-4 py-2 rounded-md w-80 bg-neutral-600 text-neutral-200"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="px-4 py-2 rounded-md w-80 bg-neutral-600 text-neutral-200 h-32 resize-none"
          required
        ></textarea>

        <button
          type="submit"
          className="mx-auto text-center bg-neutral-500 hover:bg-neutral-600 hover:cursor-pointer transition text-neutral-200 font-semibold rounded-full px-12 py-4"
        >
          SEND
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
}
