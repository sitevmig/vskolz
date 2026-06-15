import { motion } from "framer-motion";
import { GALLERY } from "@/data/salon";

// Bento grid for visual variety
const layout = [
  "col-span-2 row-span-2 aspect-square",
  "col-span-1 row-span-1 aspect-square",
  "col-span-1 row-span-1 aspect-square",
  "col-span-1 row-span-2 aspect-[1/2]",
  "col-span-2 row-span-1 aspect-[2/1]",
  "col-span-1 row-span-1 aspect-square",
];

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
          className="mb-14"
        >
          <p className="kicker mb-6">пространство</p>
          <h2 className="font-display lowercase text-5xl md:text-6xl leading-[0.95] text-[#1F2A33]">
            галерея <span className="italic">студии</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[110px] md:auto-rows-[160px] lg:auto-rows-[200px]">
          {GALLERY.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              data-testid={`gallery-item-${i}`}
              className={`${layout[i % layout.length]} overflow-hidden bg-[#D6E2EA] group`}
            >
              <img
                src={src}
                alt={`vskolz gallery ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[1.4s] ease-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
