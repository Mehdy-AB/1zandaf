"use client";

import { motion } from "framer-motion";
import { ArrowDown, Eye, Mail, MapPin, Rocket, Bookmark } from "lucide-react";
import { site } from "@/data/site";
import { Badge, InstagramIcon } from "./ui";

const stats = [
  { icon: Eye, value: "580K+", label: "Peak Reel Views", note: "Achieved in < 24 hours" },
  { icon: Bookmark, value: "~3.0%", label: "Save Velocity", note: "Top-tier algorithmic benchmark" },
  { icon: Rocket, value: "Exponential", label: "Total Reach", note: "Viral growth curve" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Background */}
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-neon/25 blur-[140px]" />
      <div className="pointer-events-none absolute top-40 -right-40 h-[360px] w-[360px] rounded-full bg-cyan/15 blur-[120px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease }}
          className="relative mb-8"
        >
          <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan/40 via-neon/40 to-pink/40 blur-2xl" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.jpg"
            alt="ZNDAF logo"
            className="relative h-36 w-36 rounded-full mix-blend-screen sm:h-44 sm:w-44"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, ease }}>
          <Badge live>
            <MapPin className="h-3.5 w-3.5" /> {site.location} · High-Velocity Viral Creator
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease }}
          className="mt-6 font-display text-5xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl"
        >
          <span className="text-gradient">{site.handle}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease }}
          className="mt-5 font-display text-lg font-medium text-white sm:text-2xl"
        >
          {site.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease }}
          className="mt-3 max-w-xl text-base text-muted sm:text-lg"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7, ease }}
          className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
        >
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon to-pink px-6 py-3.5 font-semibold text-white shadow-[0_0_40px_-8px] shadow-neon transition hover:brightness-110"
          >
            <InstagramIcon /> Follow {site.handle}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/[0.03] px-6 py-3.5 font-semibold text-white transition hover:border-white/30"
          >
            <Mail className="h-5 w-5" /> {site.email}
          </a>
        </motion.div>

        <div className="mt-14 grid w-full gap-3 sm:grid-cols-3 sm:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 + i * 0.1, duration: 0.7, ease }}
              className="glow-border rounded-2xl p-5 text-left sm:p-6"
            >
              <s.icon className="h-5 w-5 text-cyan" />
              <p className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-white/90">{s.label}</p>
              <p className="text-xs text-muted">{s.note}</p>
            </motion.div>
          ))}
        </div>

        <a href="#viral" className="mt-14 text-muted transition hover:text-white" aria-label="Scroll down">
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
