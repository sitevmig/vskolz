import { SALON } from "@/data/salon";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="px-6 md:px-10 lg:px-16 pt-16 pb-10 border-t border-[#C8D5DE] bg-[#EAF1F5]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="font-display lowercase text-5xl text-[#1F2A33] leading-none">
            {SALON.name}
          </p>
          <p className="text-[#5C6B75] text-sm mt-3 max-w-xs">
            {SALON.tagline}
          </p>
        </div>

        <div className="md:col-span-4">
          <p className="kicker mb-4">контакты</p>
          <ul className="space-y-2 text-[#1F2A33] text-sm font-light">
            <li>{SALON.address}</li>
            <li>
              <a href={`tel:${SALON.phoneRaw}`} className="link-underline">
                {SALON.phone}
              </a>
            </li>
            <li>{SALON.hours}</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="kicker mb-4">соцсети</p>
          <ul className="space-y-2 text-[#1F2A33] text-sm font-light">
            <li>
              <a
                href={SALON.instagram}
                target="_blank"
                rel="noreferrer"
                className="link-underline"
                data-testid="footer-instagram"
              >
                instagram
              </a>
            </li>
            <li>
              <a
                href={SALON.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="link-underline"
                data-testid="footer-whatsapp"
              >
                whatsapp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#C8D5DE]/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] tracking-wider text-[#5C6B75]">
        <p>© {year} {SALON.nameLatin} · все права защищены</p>
        <p className="lowercase">сделано с любовью к деталям</p>
      </div>
    </footer>
  );
}
