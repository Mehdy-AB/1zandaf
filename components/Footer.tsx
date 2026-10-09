import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { InstagramIcon } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="" className="h-10 w-10 rounded-full mix-blend-screen" />
          <div>
            <p className="font-display font-bold text-white">{site.handle}</p>
            <p className="text-xs text-muted">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition hover:border-white/30 hover:text-white"
          >
            <InstagramIcon />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition hover:border-white/30 hover:text-white"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
