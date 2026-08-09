"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BOOKING_URL, NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-cream/90 backdrop-blur-xl border-b border-warm-200/70 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav
          className="flex h-16 sm:h-[4.25rem] items-center justify-between"
          aria-label="Primary"
        >
          <a
            href="#top"
            className="font-display text-xl font-semibold tracking-tight text-ink"
            onClick={() => setOpen(false)}
          >
            Web
            <span className="text-primary logo-glow">Glow</span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-warm-600 hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href={BOOKING_URL} size="sm">
              Book a Free Call
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-warm-200 bg-white/80 text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 6h12M4 10h12M4 14h12"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-warm-200/70 bg-cream/95 backdrop-blur-xl">
          <Container>
            <ul className="flex flex-col py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-white"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 px-4 pb-2">
                <Button
                  href={BOOKING_URL}
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Book a Free Call
                </Button>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
