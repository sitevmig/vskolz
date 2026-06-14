import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/salon";

const fmt = (n) => n.toLocaleString("ru-RU");

export default function Services() {
  const [active, setActive] = useState(SERVICE_CATEGORIES[0].key);
  const current = SERVICE_CATEGORIES.find((c) => c.key === active);

  const scrollToBooking = (serviceName) => {
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // delay then dispatch event with serviceName
      window.setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("vskolz:select-service", { detail: serviceName })
        );
      }, 600);
    }
  };

  return (
    <section
      id="services"
      data-testid="services-section"
      className="px-6 md:px-10 lg:px-16 py-24 md:py-32 bg-[#ECE3D4]/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-8 items-end mb-14"
        >
          <div className="lg:col-span-7">
            <p className="kicker mb-6">прайс</p>
            <h2 className="font-display lowercase text-5xl md:text-6xl leading-[0.95] text-[#2A2724]">
              услуги <span className="italic">и</span> цены
            </h2>
          </div>
          <div className="lg:col-span-5 text-[#6C665E] text-sm md:text-base font-light max-w-md">
            прозрачные цены, действующий прайс. для подбора процедуры под ваш запрос —
            свяжитесь с администратором.
          </div>
        </motion.div>

        {/* Category tabs */}
        <div
          className="flex gap-2 md:gap-3 mb-10 overflow-x-auto hide-scrollbar snap-x"
          data-testid="services-tabs"
        >
          {SERVICE_CATEGORIES.map((c) => (
            <button
              key={c.key}
              data-testid={`services-tab-${c.key}`}
              onClick={() => setActive(c.key)}
              className={`snap-start whitespace-nowrap px-5 py-3 text-[11px] tracking-[0.22em] uppercase border transition-all ${
                active === c.key
                  ? "bg-[#2A2724] text-[#F5EFE6] border-[#2A2724]"
                  : "bg-transparent text-[#2A2724] border-[#E2D9C8] hover:border-[#2A2724]"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-[#6C665E] text-sm md:text-base mb-6 max-w-xl">
              {current.description}
            </p>

            <ul className="divide-y divide-[#E2D9C8] border-t border-b border-[#E2D9C8] bg-[#FDFBF7]">
              {current.items.map((item) => (
                <li
                  key={item.name}
                  data-testid={`service-row-${item.name}`}
                  className="grid grid-cols-12 gap-3 md:gap-6 items-center px-5 md:px-8 py-5 md:py-6 hover:bg-[#F5EFE6]/60 transition-colors group"
                >
                  <div className="col-span-12 md:col-span-7">
                    <h3 className="text-[#2A2724] text-base md:text-lg font-light leading-snug">
                      {item.name}
                    </h3>
                  </div>
                  <div className="col-span-5 md:col-span-2 text-[#6C665E] text-xs md:text-sm tracking-wide">
                    {item.duration}
                  </div>
                  <div className="col-span-4 md:col-span-2 font-display text-xl md:text-2xl text-[#2A2724] tabular-nums whitespace-nowrap">
                    {fmt(item.price)} ₽
                  </div>
                  <div className="col-span-3 md:col-span-1 flex justify-end">
                    <button
                      data-testid={`service-book-${item.name}`}
                      onClick={() => scrollToBooking(item.name)}
                      aria-label={`записаться: ${item.name}`}
                      className="inline-flex items-center justify-center w-10 h-10 border border-[#E2D9C8] text-[#2A2724] group-hover:bg-[#2A2724] group-hover:text-[#F5EFE6] group-hover:border-[#2A2724] transition-all"
                    >
                      <ArrowUpRight size={16} strokeWidth={1.4} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[#6C665E] text-xs tracking-wide">
              цены носят ознакомительный характер. финальная стоимость подбирается на консультации.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
