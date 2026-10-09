"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Armchair,
  ArrowUpRight,
  Box,
  CircuitBoard,
  Cpu,
  Fan,
  Gauge,
  HardDrive,
  Headphones,
  Keyboard,
  MemoryStick,
  Monitor,
  Mouse,
  MoveDiagonal,
  Package,
  RectangleHorizontal,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import gearData from "@/data/gearData.json";
import { Section } from "./ui";

type Gear = {
  category: string;
  title: string;
  description: string;
  image: string;
  buyLink: string;
  tag: string;
};

const gear = gearData as Gear[];
const filters = ["All", "PC Specs", "Peripherals & Accessories"];

// Fallback icon per tag, shown until a product photo exists in /public/images/gear
const tagIcons: Record<string, LucideIcon> = {
  CPU: Cpu,
  GPU: Gauge,
  RAM: MemoryStick,
  Motherboard: CircuitBoard,
  Cooler: Fan,
  PSU: Zap,
  Case: Box,
  Storage: HardDrive,
  Mouse: Mouse,
  Keyboard: Keyboard,
  Mousepad: RectangleHorizontal,
  Headset: Headphones,
  Monitor: Monitor,
  "Desk Mount": MoveDiagonal,
  Furniture: Armchair,
};

function GearImage({ item }: { item: Gear }) {
  const [failed, setFailed] = useState(!item.image);
  const Icon = tagIcons[item.tag] ?? Package;

  // Product shots are on white, so the tile is light and the photo multiplies into it.
  return (
    <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[#e9ebf2]">
      <div className="pointer-events-none absolute inset-x-6 bottom-3 h-6 rounded-full bg-neon/25 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      {failed ? (
        <Icon className="relative h-14 w-14 text-ink/60 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.25} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onError={() => setFailed(true)}
          className="relative h-full w-full object-contain p-3 mix-blend-multiply transition-transform duration-500 group-hover:scale-105 sm:p-4"
        />
      )}
    </div>
  );
}

export default function GearStore() {
  const [active, setActive] = useState("All");
  const items = active === "All" ? gear : gear.filter((g) => g.category === active);

  return (
    <Section
      id="gear"
      eyebrow="My Setup & Gear Store"
      title={
        <>
          Everything on my <span className="text-gradient">desk</span>
        </>
      }
      intro="The exact parts and peripherals behind the reels. Tap any card to check it out."
    >
      <div className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0" role="tablist">
        {filters.map((f) => {
          const count = f === "All" ? gear.length : gear.filter((g) => g.category === f).length;
          const isActive = active === f;
          return (
            <button
              key={f}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(f)}
              className={`relative shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                isActive ? "text-ink" : "border border-line text-muted hover:text-white"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="gear-filter"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative">
                {f} <span className="opacity-60">{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.a
              layout
              key={item.title}
              href={item.buyLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              className="glow-border group flex flex-col rounded-3xl p-2.5 sm:p-3"
            >
              <GearImage item={item} />
              <div className="flex flex-1 flex-col px-1.5 pt-3 pb-1.5 sm:px-2">
                <span className="w-fit rounded-full bg-cyan/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan">
                  {item.tag}
                </span>
                <h3 className="mt-2 font-display text-sm font-semibold leading-snug text-white sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs text-muted sm:text-sm">{item.description}</p>
                <span className="mt-auto flex items-center justify-between gap-2 pt-4 text-xs font-semibold text-white sm:text-sm">
                  Buy / View Product
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 transition-colors group-hover:bg-white group-hover:text-ink">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
