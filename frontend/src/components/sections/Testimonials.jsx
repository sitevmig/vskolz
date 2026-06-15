import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/salon";

export default function Testimonials() {
  return (
    <section
      id="reviews"
      data-testid="reviews-section"
      className="px-6 md:px-10 lg:px-16 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-8 mb-14 items-end"
        >
          <div className="lg:col-span-8">
            <p className="kicker mb-6">отзывы</p>
            <h2 className="font-display lowercase text-5xl md:text-6xl leading-[0.95] text-[#1F2A33]">
              что говорят <span className="italic">гости</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-2">
            <div className="flex items-center gap-2">
              <span className="font-display text-5xl text-[#1F2A33] leading-none">4.7</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={18}
                    fill="#6E8DA3"
                    strokeWidth={0}
                    className="-ml-0.5"
                  />
                ))}
              </div>
            </div>
            <p className="kicker">18 отзывов · яндекс карты</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.name + t.date}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              data-testid={`testimonial-${i}`}
              className="bg-[#F7FAFC] border border-[#C8D5DE] p-8 md:p-10 flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-500"
            >
              <Quote size={28} strokeWidth={1.1} className="text-[#6E8DA3]" />
              <p className="text-[#1F2A33] text-base md:text-lg leading-relaxed font-light">
                {t.text}
              </p>
              <div className="flex items-center justify-between border-t border-[#C8D5DE] pt-5 mt-auto">
                <div>
                  <p className="font-display text-xl text-[#1F2A33] lowercase">{t.name}</p>
                  <p className="kicker mt-1">{t.date}</p>
                </div>
                <div className="flex">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} size={14} fill="#6E8DA3" strokeWidth={0} className="-ml-0.5" />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
