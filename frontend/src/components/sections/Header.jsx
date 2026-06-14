import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SALON } from "@/data/salon";

const NAV = [
  { id: "about", label: "о нас" },
  { id: "services", label: "услуги" },
  { id: "masters", label: "мастера" },
  { id: "gallery", label: "галерея" },
  { id: "reviews", label: "отзывы" },
  { id: "contacts", label: "контакты" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F5EFE6]/85 backdrop-blur-xl border-b border-[#E2D9C8]/60"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-10 lg:px-16 flex items-center justify-between h-20 md:h-24">
        <button
          data-testid="brand-link"
          onClick={() => goto("hero")}
          className="font-display text-3xl md:text-4xl tracking-tighter lowercase text-[#2A2724]"
        >
          {SALON.name}
        </button>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-${n.id}`}
              onClick={() => goto(n.id)}
              className="text-[11px] tracking-[0.22em] uppercase text-[#2A2724] link-underline"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            data-testid="header-cta-book"
            onClick={() => goto("booking")}
            className="hidden md:inline-flex items-center px-6 py-3 bg-[#2A2724] text-[#F5EFE6] text-[11px] tracking-[0.22em] uppercase hover:bg-[#1A1816] transition-colors"
          >
            записаться
          </button>
          <button
            data-testid="mobile-menu-toggle"
            aria-label="menu"
            className="lg:hidden p-2 text-[#2A2724]"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#F5EFE6]/95 backdrop-blur-xl border-b border-[#E2D9C8]/60"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  data-testid={`mobile-nav-${n.id}`}
                  onClick={() => goto(n.id)}
                  className="text-left text-sm tracking-[0.18em] uppercase text-[#2A2724] py-2 border-b border-[#E2D9C8]/60"
                >
                  {n.label}
                </button>
              ))}
              <button
                data-testid="mobile-cta-book"
                onClick={() => goto("booking")}
                className="mt-2 px-6 py-3 bg-[#2A2724] text-[#F5EFE6] text-[11px] tracking-[0.22em] uppercase"
              >
                записаться
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
