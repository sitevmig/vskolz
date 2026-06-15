import { motion } from "framer-motion";
import { GALLERY } from "@/data/salon";

export default function Gallery() {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="px-6 md:px-10 lg:px-16 py-24 md:py-32 bg-[#D6E2EA]/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 grid lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-7">
            <p className="kicker mb-6">пространство</p>
            <h2 className="font-display lowercase text-5xl md:text-6xl leading-[0.95] text-[#1F2A33]">
              галерея <span className="italic">студии</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[#5C6B75] text-sm md:text-base font-light max-w-md">
            подлинные интерьеры vskolz — то, что ждёт вас в нашем камерном пространстве.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          data-testid="gallery-grid"
        >
          {GALLERY.map((src, i) => (
            <motion.figure
              key={src + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              data-testid={`gallery-item-${i}`}
              className="relative overflow-hidden bg-[#D6E2EA] aspect-[4/5] group"
            >
              <img
                src={src}
                alt={`vskolz · фото ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1.4s] ease-out"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
