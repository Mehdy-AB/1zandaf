import { Bookmark, Clock, Compass, Gamepad2, Monitor, ShoppingBag } from "lucide-react";
import { site } from "@/data/site";
import { InstagramIcon, Reveal, Section } from "./ui";

const audience = [
  { icon: Gamepad2, label: "PC Gamers" },
  { icon: Monitor, label: "Desk Setup Enthusiasts" },
  { icon: ShoppingBag, label: "Tech Buyers" },
];

export default function Analytics() {
  return (
    <Section
      id="insights"
      eyebrow="Audience Analytics & Insights"
      title={
        <>
          Reach that goes <span className="text-gradient">beyond followers</span>
        </>
      }
    >
      <Reveal>
        <div className="mb-4 inline-flex items-center gap-2 text-sm text-muted">
          <InstagramIcon className="h-4 w-4" /> Instagram · {site.handle}
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-6">
        <Reveal className="md:col-span-3">
          <div className="glow-border h-full rounded-3xl p-6 sm:p-8">
            <Compass className="h-5 w-5 text-cyan" />
            <p className="mt-6 text-sm text-muted">Non-Follower Reach</p>
            <p className="font-display text-5xl font-bold tracking-tighter text-white sm:text-6xl">90%+</p>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan via-neon to-pink" />
            </div>
            <p className="mt-3 text-xs text-muted">High Explore page distribution</p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-3">
          <div className="glow-border h-full rounded-3xl p-6 sm:p-8">
            <Bookmark className="h-5 w-5 text-cyan" />
            <p className="mt-6 text-sm text-muted">Save Rate</p>
            <p className="font-display text-5xl font-bold tracking-tighter text-white sm:text-6xl">2.93–3.0%</p>
            <p className="mt-6 text-xs text-muted">Viral high-retention benchmark</p>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="md:col-span-4">
          <div className="glow-border h-full rounded-3xl p-6 sm:p-8">
            <p className="text-sm text-muted">Top Audience</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {audience.map((a) => (
                <span
                  key={a.label}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-sm text-white"
                >
                  <a.icon className="h-4 w-4 text-cyan" /> {a.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16} className="md:col-span-2">
          <div className="glow-border h-full rounded-3xl p-6 sm:p-8">
            <Clock className="h-5 w-5 text-cyan" />
            <p className="mt-4 text-sm text-muted">Peak Traffic</p>
            <p className="font-display text-3xl font-bold tracking-tight text-white">17:00 – 21:00</p>
            <p className="text-xs text-muted">CET</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
