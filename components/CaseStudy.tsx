"use client";

import { Bookmark, Clock, Eye, Send, TrendingDown, Flame } from "lucide-react";
import { Badge, CountUp, Reveal, Section } from "./ui";

const metrics = [
  { icon: Bookmark, to: 17300, suffix: "+", label: "Saves", note: "High-value retention" },
  { icon: Send, to: 9900, suffix: "+", label: "DM Shares", note: "Share velocity" },
  { icon: Clock, to: 8, suffix: "s", label: "Avg. Watch Time", note: "Loop retention" },
  { icon: TrendingDown, to: 50.7, decimals: 1, prefix: "< ", suffix: "%", label: "Skip Rate", note: "Lower = optimal" },
];

export default function CaseStudy() {
  return (
    <Section
      id="viral"
      eyebrow="Viral Case Study"
      title={
        <>
          The Discord / Setup <span className="text-gradient">Reel Breakthrough</span>
        </>
      }
      intro="One reel, one clean setup, a spike the algorithm couldn't ignore. Here's how it performed."
    >
      <div className="grid gap-4 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="glow-border relative h-full overflow-hidden rounded-3xl p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-neon/30 blur-[90px]" />
            <Badge live>Viral Explosion / Algorithm Top Tier</Badge>
            <div className="mt-10 flex items-center gap-3 text-muted">
              <Eye className="h-5 w-5 text-cyan" /> Views
            </div>
            <p className="mt-2 font-display text-6xl font-bold tracking-tighter text-white sm:text-7xl">
              <CountUp to={580000} suffix="+" />
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted">
              <Flame className="h-4 w-4 text-pink" /> and counting, in under 24 hours
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 lg:col-span-3">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="glow-border h-full rounded-3xl p-5 sm:p-6">
                <m.icon className="h-5 w-5 text-cyan" />
                <p className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <CountUp to={m.to} decimals={m.decimals} prefix={m.prefix} suffix={m.suffix} />
                </p>
                <p className="mt-1 text-sm font-medium text-white/90">{m.label}</p>
                <p className="text-xs text-muted">{m.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
