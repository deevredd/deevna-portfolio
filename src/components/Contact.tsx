"use client";

import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { contact, socials } from "@/lib/content";
import { useGenZ } from "@/context/GenZContext";
import { socialIcon } from "./Header";
import { playPop, playSparkle } from "@/lib/soundFx";

export default function Contact() {
  const { t } = useGenZ();
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSparkle();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "Recruiter"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <Section id="contact" num="04" heading={t(contact.heading)}>
      <Reveal>
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl">
          {/* Left Column: Direct Info & Privacy Masking */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">{t(contact.title)}</h3>
              <p className="mt-3 text-white text-base leading-relaxed font-normal" style={{ color: "#ffffff" }}>
                {t(contact.body)}
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-surface2 bg-mantle/70 hover:border-peach/50 transition-colors shadow-sm">
                <p className="font-mono text-xs font-bold tracking-wider text-peach mb-1.5">EMAIL</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-white font-semibold hover:text-sky link-underline text-sm sm:text-base"
                  style={{ color: "#ffffff" }}
                >
                  {contact.email}
                </a>
              </div>

              <div className="p-4 rounded-xl border border-surface2 bg-mantle/70 hover:border-green/50 transition-colors shadow-sm">
                <p className="font-mono text-xs font-bold tracking-wider text-green mb-1.5">PHONE (VERIFIED INQUIRIES)</p>
                <p className="text-white font-semibold text-sm sm:text-base" style={{ color: "#ffffff" }}>
                  {contact.phone}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-surface2 bg-mantle/70">
                <p className="font-mono text-xs font-bold tracking-wider text-mauve mb-3">SOCIAL & PROFILES</p>
                <div className="flex items-center gap-3">
                  {socials.map((s, i) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={s.label}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border border-surface2 bg-surface0 text-slate-100 shadow-md transition-all duration-200 hover:scale-110 ${
                        ["hover:text-sky hover:border-sky/60", "hover:text-mauve hover:border-mauve/60", "hover:text-peach hover:border-peach/60"][i % 3]
                      }`}
                    >
                      {socialIcon(s.label)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Field Fast Dispatch Form */}
          <div className="lg:col-span-7 rounded-2xl border border-surface2 bg-mantle/80 p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-surface1 mb-5">
              <span className="font-mono text-xs font-bold text-slate-200 tracking-wider">
                DIRECT INQUIRY FORM
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs font-semibold text-slate-300 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full rounded-xl border border-surface2 bg-surface0/70 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-mauve focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-semibold text-slate-300 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="e.g. sarah@company.com"
                  className="w-full rounded-xl border border-surface2 bg-surface0/70 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-mauve focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-semibold text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Deevna, saw your work on Alexa compliance and IEEE research..."
                  className="w-full rounded-xl border border-surface2 bg-surface0/70 p-4 text-sm text-white placeholder:text-slate-500 focus:border-mauve focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                onClick={playPop}
                className="w-full rounded-xl bg-gradient-to-r from-mauve via-pink to-peach px-6 py-3 font-mono text-xs font-bold text-crust shadow-lg hover:shadow-mauve/25 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>✉️</span>
                <span>{submitted ? "Message Client Opened!" : "Dispatch Message to Deevna"}</span>
                <span>➔</span>
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
