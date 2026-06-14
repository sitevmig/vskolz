import { motion } from "framer-motion";
import { SALON, ABOUT_IMAGE } from "@/data/salon";

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="px-6 md:px-10 lg:px-16 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-5"
        >
          <p className="kicker mb-6">о нас</p>
          <h2 className="font-display lowercase text-5xl md:text-6xl leading-[0.95] text-[#2A2724]">
            нежный дом <br />
            эстетической<br />
            косметологии
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="lg:col-span-7 flex flex-col gap-8"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={ABOUT_IMAGE}
              alt="интерьер студии vskolz"
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[1.4s] ease-out"
              loading="lazy"
            />
          </div>

          <div className="space-y-5 max-w-2xl text-[#2A2724] text-base md:text-lg font-light leading-relaxed">
            {SALON.long_about.map((p, i) => (
              <p key={i} data-testid={`about-paragraph-${i}`}>
                {p}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-2" data-testid="about-features">
            {SALON.features.map((f) => (
              <span
                key={f}
                className="px-4 py-2 text-[11px] tracking-[0.18em] uppercase text-[#2A2724] border border-[#E2D9C8] bg-[#FDFBF7]"
              >
                {f}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
