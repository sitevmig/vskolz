import { motion } from "framer-motion";
import { MASTERS } from "@/data/salon";

export default function Masters() {
  return (
    <section
      id="masters"
      data-testid="masters-section"
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
          <div className="lg:col-span-7">
            <p className="kicker mb-6">команда</p>
            <h2 className="font-display lowercase text-5xl md:text-6xl leading-[0.95] text-[#2A2724]">
              мастера <span className="italic">vskolz</span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-[#6C665E] text-sm md:text-base font-light max-w-md">
            бережные руки, внимательный взгляд и любовь к тому, что делают. наша команда — это про чуткость.
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {MASTERS.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              data-testid={`master-card-${m.name}`}
              className="flex flex-col gap-5 group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-[#ECE3D4]">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1.4s] ease-out"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-display text-3xl text-[#2A2724] lowercase leading-tight">
                  {m.name}
                </h3>
                <p className="kicker mt-1">{m.role}</p>
                <p className="mt-3 text-[#6C665E] text-sm leading-relaxed">{m.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
