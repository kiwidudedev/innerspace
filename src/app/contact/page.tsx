"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(payload?.error || "Could not send message.");
      }

      setName("");
      setEmail("");
      setMessage("");
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not send message. Please try again."
      );
    }
  };

  return (
    <section className="mx-auto flex min-h-[calc(100vh-140px)] w-full max-w-[1440px] flex-col px-5 pb-16 pt-8 sm:px-6 sm:pt-6">
      <div className="flex flex-1 flex-col items-center text-center">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#7A7A7A] sm:text-xs sm:tracking-[0.5em]">
          Contact
        </p>
        <h1 className="display mt-4 text-[54px] uppercase tracking-[0.02em] text-[#1C1C1C] sm:mt-6 sm:text-[96px] md:text-[120px] lg:text-[150px]">
          Let&apos;s Talk
        </h1>
        <p className="mt-[40px] max-w-[90vw] text-[11px] uppercase tracking-[0.22em] text-[#7A7A7A] sm:max-w-[52ch] sm:text-xs sm:tracking-[0.45em]">
          Tell us about your project and we&apos;ll respond shortly.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full max-w-[760px] border-2 border-[#1C1C1C] bg-[var(--bg)] p-4 text-left shadow-[6px_6px_0_0_#1C1C1C] sm:mt-12 sm:p-6 sm:shadow-[8px_8px_0_0_#1C1C1C] md:p-8"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="NAME"
              autoComplete="name"
              className="min-h-[48px] w-full border-2 border-[#1C1C1C] bg-transparent px-4 py-3 text-base uppercase tracking-[0.08em] text-[#1C1C1C] placeholder:text-[#4B4B4B] focus:outline-none sm:text-[11px] sm:tracking-[0.15em]"
            />
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="EMAIL"
              autoComplete="email"
              className="min-h-[48px] w-full border-2 border-[#1C1C1C] bg-transparent px-4 py-3 text-base uppercase tracking-[0.08em] text-[#1C1C1C] placeholder:text-[#4B4B4B] focus:outline-none sm:text-[11px] sm:tracking-[0.15em]"
            />
          </div>

          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="MESSAGE"
            rows={5}
            className="mt-3 min-h-[140px] w-full resize-none border-2 border-[#1C1C1C] bg-transparent px-4 py-3 text-base uppercase tracking-[0.08em] text-[#1C1C1C] placeholder:text-[#4B4B4B] focus:outline-none sm:mt-4 sm:text-[11px] sm:tracking-[0.15em]"
          />

          <div className="mt-4 flex sm:mt-5 sm:justify-end">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="min-h-[48px] w-full border-2 border-[#1C1C1C] bg-transparent px-8 py-3 text-center text-[12px] uppercase tracking-[0.16em] text-[#1C1C1C] transition-colors duration-200 hover:bg-[#1C1C1C] hover:text-[var(--bg)] sm:w-auto sm:min-w-[160px] sm:text-[11px] sm:tracking-[0.2em]"
            >
              {status === "submitting" ? "Sending..." : "Submit"}
            </button>
          </div>
          {status === "success" ? (
            <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-[#1C1C1C]">
              Message sent.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[#9F2B2B]">
              {errorMessage}
            </p>
          ) : null}
        </form>

        <a
          href="mailto:hello@innerspace.nz"
          className="mt-8 text-[12px] uppercase tracking-[0.22em] text-[#1C1C1C] hero-underline sm:mt-10 sm:text-sm sm:tracking-[0.35em]"
        >
          hello@innerspace.nz
        </a>
      </div>
    </section>
  );
}
