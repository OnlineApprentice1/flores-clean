"use client"

import { useState } from "react"

type FormState = "idle" | "loading" | "success" | "error"

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState("loading")
    setErrorMsg("")

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setState("success")
        form.reset()
      } else {
        const json = await res.json()
        setErrorMsg(json.error ?? "Something went wrong. Please try again.")
        setState("error")
      }
    } catch {
      setErrorMsg("Unable to send. Please call us directly.")
      setState("error")
    }
  }

  if (state === "success") {
    return (
      <div className="alert alert-success">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Message received! We'll be in touch shortly.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {state === "error" && (
        <div className="alert alert-error text-sm">{errorMsg}</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Name *</legend>
          <input
            name="name"
            type="text"
            required
            placeholder="John Smith"
            className="input input-bordered w-full"
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email *</legend>
          <input
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="input input-bordered w-full"
          />
        </fieldset>
      </div>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Phone</legend>
        <input
          name="phone"
          type="tel"
          placeholder="(555) 555-5555"
          className="input input-bordered w-full"
        />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Message *</legend>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project or issue..."
          className="textarea textarea-bordered w-full"
        />
      </fieldset>

      <button
        type="submit"
        disabled={state === "loading"}
        className="btn btn-primary w-full"
      >
        {state === "loading" ? (
          <span className="loading loading-spinner loading-sm" />
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  )
}
