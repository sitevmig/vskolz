import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SALON, HERO_IMAGE } from "@/data/salon";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Image layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="vskolz — интерьер студии"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EAF1F5]/60 via-[#EAF1F5]/40 to-[#EAF1F5]/98" />
      </div>

      {/* Top floating word marker */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-32 md:top-36 left-6 md:left-10 lg:left-16 z-10"
      >
        <p className="kicker text-[#1F2A33]">эстетическая косметология · москва</p>
      </motion.div>

      {/* Right-side meta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-32 md:top-36 right-6 md:right-10 lg:right-16 z-10 hidden md:flex flex-col items-end gap-1 text-right"
      >
        <span className="text-[13px] md:text-[14px] tracking-[0.22em] uppercase font-medium text-[#14202A]">{SALON.hours_short}</span>
        <span className="text-[13px] md:text-[14px] tracking-[0.22em] uppercase font-medium text-[#14202A]">мясницкая, 30/1/2</span>
      </motion.div>

      {/* Title block */}
      <div className="relative z-10 px-6 md:px-10 lg:px-16 pb-20 md:pb-28 lg:pb-32 max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          data-testid="hero-title"
          className="font-display lowercase text-[22vw] md:text-[15vw] lg:text-[12vw] leading-[0.85] tracking-[-0.04em] text-[#1F2A33]"
        >
          vskolz
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 items-end"
        >
          <p className="md:col-span-7 lg:col-span-6 font-body text-[#14202A] text-lg md:text-xl lg:text-2xl font-normal leading-relaxed max-w-2xl">
            {SALON.description}
          </p>

          <div className="md:col-span-5 lg:col-span-6 flex flex-wrap items-center gap-4 md:justify-end">
            <button
              data-testid="hero-cta-book"
              onClick={() => scrollTo("booking")}
              className="group inline-flex items-center gap-3 bg-[#1F2A33] text-[#EAF1F5] px-8 py-4 text-[11px] tracking-[0.22em] uppercase hover:bg-[#14202A] transition-colors"
            >
              записаться
              <span className="w-6 h-px bg-[#EAF1F5] group-hover:w-10 transition-all" />
            </button>
            <button
              data-testid="hero-cta-services"
              onClick={() => scrollTo("services")}
              className="inline-flex items-center gap-2 px-2 py-4 text-[11px] tracking-[0.22em] uppercase text-[#1F2A33] border-b border-[#1F2A33] hover:border-[#6E8DA3] hover:text-[#6E8DA3] transition-colors"
            >
              услуги и цены
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="прокрутить"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#1F2A33]"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.4 }}
        data-testid="hero-scroll-indicator"
      >
        <span className="kicker">scroll</span>
        <ArrowDown size={16} strokeWidth={1.4} />
      </motion.button>
    </section>
  );
}
Width={1.4} />
      </motion.button>
    </section>
  );
}
