"use client";

import Section from "./Section";
import Reveal from "./Reveal";
import { contact, socials } from "@/lib/content";
import { useGenZ } from "@/context/GenZContext";
import { socialIcon } from "./Header";

export default function Contact() {
  const { t } = useGenZ();
  return (
    <Section id="contact" num="04" heading={t(contact.heading)}>
      <Reveal>
        <div className="max-w-xl">
          <h3 className="text-2xl font-bold text-white tracking-tight">{t(contact.title)}</h3>
          <p className="mt-3 text-white text-base leading-relaxed font-normal" style={{ color: "#ffffff" }}>{t(contact.body)}</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl border border-surface2 bg-mantle/70 hover:border-peach/50 transition-colors shadow-sm">
              <p className="font-mono text-xs font-bold tracking-wider text-peach mb-1.5">EMAIL</p>
              <a href={`mailto:${contact.email}`} className="text-white font-semibold hover:text-sky link-underline text-sm sm:text-base" style={{ color: "#ffffff" }}>
                {contact.email}
              </a>
            </div>
            <div className="p-4 rounded-xl border border-surface2 bg-mantle/70 hover:border-green/50 transition-colors shadow-sm">
              <p className="font-mono text-xs font-bold tracking-wider text-green mb-1.5">PHONE</p>
              <p className="text-white font-semibold text-sm sm:text-base" style={{ color: "#ffffff" }}>{contact.phone}</p>
            </div>
            <div className="sm:col-span-2 p-4 rounded-xl border border-surface2 bg-mantle/70">
              <p className="font-mono text-xs font-bold tracking-wider text-mauve mb-3">SOCIAL</p>
              <div className="flex items-center gap-4">
                {socials.map((s, i) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={s.label}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border border-surface2 bg-surface0 text-slate-100 shadow-md transition-all duration-200 hover:scale-110 ${
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
      </Reveal>
    </Section>
  );
}
