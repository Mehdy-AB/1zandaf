"use client";

import { Check, Clapperboard, Copy, Link2, Monitor, Package, Send } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
import { Reveal, Section } from "./ui";

const services = [
  { icon: Clapperboard, label: "Dedicated Viral Reels" },
  { icon: Monitor, label: "Desk Setup Inclusion & Product Reviews" },
  { icon: Package, label: "Brand Sponsorships & Unboxings" },
  { icon: Link2, label: "Affiliate Marketing" },
];

const inputCls =
  "w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3.5 text-base text-white placeholder:text-white/30 outline-none transition focus:border-neon focus:bg-white/[0.05] focus:ring-4 focus:ring-neon/15";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  // No backend: compose a pre-filled email in the visitor's mail app.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const subject = `Partnership inquiry — ${get("brand") || get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Brand: ${get("brand")}`,
      `Budget / Offer: ${get("budget") || "—"}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — the address is visible anyway */
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Work With Me"
      title={
        <>
          Let&apos;s build something <span className="text-gradient">viral</span>
        </>
      }
      intro="Open for sponsorships, PC build showcases, gear reviews, and brand partnerships."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="flex h-full flex-col gap-3">
            {services.map((s) => (
              <div key={s.label} className="glow-border flex items-center gap-4 rounded-2xl p-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan/20 to-neon/20 text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-medium text-white">{s.label}</span>
              </div>
            ))}

            <button
              type="button"
              onClick={copyEmail}
              className="mt-auto flex items-center justify-between gap-3 rounded-2xl border border-line bg-panel p-4 text-left transition hover:border-white/25"
            >
              <span className="min-w-0">
                <span className="block text-xs text-muted">Email directly</span>
                <span className="block truncate font-medium text-white">{site.email}</span>
              </span>
              {copied ? <Check className="h-5 w-5 shrink-0 text-emerald-400" /> : <Copy className="h-5 w-5 shrink-0 text-muted" />}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-panel p-5 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-white/80">
                Name
                <input name="name" required autoComplete="name" placeholder="Your name" className={inputCls} />
              </label>
              <label className="grid gap-2 text-sm text-white/80">
                Email
                <input name="email" type="email" required autoComplete="email" placeholder="you@brand.com" className={inputCls} />
              </label>
              <label className="grid gap-2 text-sm text-white/80">
                Brand Name
                <input name="brand" required autoComplete="organization" placeholder="Brand / company" className={inputCls} />
              </label>
              <label className="grid gap-2 text-sm text-white/80">
                Budget / Offer
                <input name="budget" placeholder="e.g. $500 or product exchange" className={inputCls} />
              </label>
              <label className="grid gap-2 text-sm text-white/80 sm:col-span-2">
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the campaign, product and timeline…"
                  className={`${inputCls} resize-none`}
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon to-pink px-6 py-4 font-semibold text-white shadow-[0_0_40px_-8px] shadow-neon transition hover:brightness-110"
            >
              <Send className="h-4 w-4" /> Send Inquiry
            </button>
            {sent && (
              <p className="mt-4 text-center text-sm text-muted">
                Your email app should open with the message ready. If it didn&apos;t, write to{" "}
                <a href={`mailto:${site.email}`} className="text-white underline underline-offset-4">
                  {site.email}
                </a>
                .
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
