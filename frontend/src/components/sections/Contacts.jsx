import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, MessageCircle } from "lucide-react";
import { SALON } from "@/data/salon";

export default function Contacts() {
  return (
    <section
      id="contacts"
      data-testid="contacts-section"
      className="px-6 md:px-10 lg:px-16 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="kicker mb-6">найти нас</p>
          <h2 className="font-display lowercase text-5xl md:text-6xl leading-[0.95] text-[#2A2724]">
            контакты <span className="italic">и</span> адрес
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-col gap-7"
          >
            <Item icon={<MapPin size={18} strokeWidth={1.4} />} label="адрес">
              <p>{SALON.address}</p>
              <p className="text-[#6C665E] text-sm">{SALON.address_detail}</p>
              <p className="text-[#6C665E] text-sm mt-1">
                м. {SALON.metro.join(" / ")}
              </p>
            </Item>

            <Item icon={<Phone size={18} strokeWidth={1.4} />} label="телефон">
              <a
                href={`tel:${SALON.phoneRaw}`}
                data-testid="contacts-phone"
                className="link-underline"
              >
                {SALON.phone}
              </a>
            </Item>

            <Item icon={<Clock size={18} strokeWidth={1.4} />} label="часы работы">
              <p>{SALON.hours}</p>
              <p className="text-[#6C665E] text-sm mt-1">по предварительной записи</p>
            </Item>

            <Item icon={<MessageCircle size={18} strokeWidth={1.4} />} label="мессенджеры">
              <a
                href={SALON.whatsapp}
                target="_blank"
                rel="noreferrer"
                data-testid="contacts-whatsapp"
                className="link-underline block"
              >
                whatsapp →
              </a>
              <a
                href={SALON.instagram}
                target="_blank"
                rel="noreferrer"
                data-testid="contacts-instagram"
                className="link-underline inline-flex items-center gap-2 mt-2"
              >
                <Instagram size={14} strokeWidth={1.4} />
                {SALON.instagram_handle}
              </a>
            </Item>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-8 border border-[#E2D9C8] overflow-hidden bg-[#FDFBF7]"
            data-testid="contacts-map"
          >
            <iframe
              title="vskolz на карте"
              src="https://yandex.ru/map-widget/v1/?ll=37.638728%2C55.765473&mode=search&oid=167816522961&ol=biz&z=17"
              width="100%"
              height="540"
              style={{ border: 0 }}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Item({ icon, label, children }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 text-[#C4A484]">{icon}</div>
      <div className="flex-1">
        <p className="kicker mb-2">{label}</p>
        <div className="text-[#2A2724] text-base font-light leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
