import { ArrowRight, Handshake, Tag } from "lucide-react";
import { site } from "@/data/site";
import { Badge, Reveal } from "./ui";

export default function Partnerships() {
  return (
    <section id="partners" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-panel p-8 sm:p-14">
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan/20 blur-[100px]" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-pink/20 blur-[100px]" />
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Badge live>Open For Collaborations</Badge>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Brand Partnerships <br className="hidden sm:block" />& <span className="text-gradient">Affiliate Codes</span>
              </h2>
              <p className="mt-5 max-w-xl text-muted sm:text-lg">
                Currently accepting brand deals, sponsorships, and product reviews. Official discount codes and
                affiliate links for partner brands will be featured here upon contract execution.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-cyan sm:w-auto"
              >
                Partner With {site.handle} <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-4"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-white/40">
                    {i === 1 ? <Tag className="h-5 w-5" /> : <Handshake className="h-5 w-5" />}
                  </div>
                  <div className="flex-1">
                    <div className="h-2.5 w-24 rounded-full bg-white/10" />
                    <div className="mt-2 h-2 w-36 rounded-full bg-white/5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/30">Your brand</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
