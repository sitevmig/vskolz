// All content sourced from public Yandex Maps card + verified web sources for vskolz.ru pricelist (2025).

export const SALON = {
  name: "vskolz",
  tagline: "studio of aesthetic cosmetology · moscow",
  tagline_ru: "студия эстетической косметологии · москва",
  description:
    "камерное пространство в центре москвы для расслабления, уединения и восстановления энергии через косметологические процедуры для лица и тела.",
  long_about: [
    "наша студия — уголок, где тёплый свет проникает сквозь скошенные окна, а уютная обстановка защищает от внешнего мира, напоминает личную комнату и способствует телесному расслаблению.",
    "оставайтесь с нами и чувствуйте себя как дома, проявляя чуткость, внимание, заботу к внутреннему и внешнему состоянию.",
    "с любовью, vskolz.",
  ],
  address: "Москва, Мясницкая улица, 30/1/2с1",
  address_detail: "этаж 4, кабинет 32",
  metro: ["Чистые пруды", "Тургеневская", "Сретенский бульвар"],
  phone: "+7 977 628-34-37",
  phoneRaw: "+79776283437",
  whatsapp: "https://wa.me/message/57YQLORSBBD6G1",
  instagram: "https://www.instagram.com/vskolz.moscow",
  instagram_handle: "@vskolz.moscow",
  hours: "пн–вс, 09:00 – 22:00",
  hours_short: "9:00 – 22:00",
  features: [
    "только для женщин",
    "предварительная запись",
    "парковка",
    "оплата картой",
    "wi-fi",
    "подарочный сертификат",
  ],
};

// Prices reconstructed from publicly visible vskolz.ru fragments and Yandex listings (Dec 2025).
export const SERVICE_CATEGORIES = [
  {
    key: "face",
    title: "лицо",
    description: "уходовые программы, чистки, пилинги, маски",
    items: [
      { name: "Интенсивное увлажнение (1 зона)", price: 700, duration: "20 мин" },
      { name: "Альгинатная маска для лица", price: 1000, duration: "20 мин" },
      { name: "Ультразвуковая чистка лица", price: 4000, duration: "60 мин" },
      { name: "Дерматологический пилинг HYDRAFACIAL", price: 4500, duration: "60 мин" },
      { name: "Фотодинамическая терапия Heleo4", price: 4500, duration: "45 мин" },
      { name: "PRX-T33 (лицо)", price: 4500, duration: "45 мин" },
      { name: "PRX-T33 (лицо + шея)", price: 5900, duration: "60 мин" },
      { name: "Успокаивающий эффект", price: 4500, duration: "45 мин" },
      { name: "Наполнение & укрепление", price: 4500, duration: "45 мин" },
      { name: "Наполнение & разглаживание", price: 4500, duration: "45 мин" },
      { name: "Лифтинг & стимуляция", price: 4500, duration: "45 мин" },
    ],
  },
  {
    key: "rf",
    title: "rf-лифтинг",
    description: "аппаратная подтяжка кожи без операции",
    items: [
      { name: "RF-лифтинг лица", price: 3000, duration: "30 мин" },
      { name: "RF-лифтинг лица + шея", price: 5000, duration: "45 мин" },
      { name: "RF-лифтинг лица + шея + декольте", price: 6000, duration: "60 мин" },
      { name: "RF-лифтинг по телу (1 зона)", price: 3000, duration: "30 мин" },
      { name: "Курс RF-лифтинга, 5 сеансов (5-й в подарок)", price: 12000, duration: "5×30 мин" },
    ],
  },
  {
    key: "peels",
    title: "пилинги",
    description: "химические и аппаратные пилинги",
    items: [
      { name: "Гидропилинг", price: 3600, duration: "45 мин" },
      { name: "Пилинг «фарфоровый»", price: 4000, duration: "45 мин" },
      { name: "PRX-T33 (лицо + шея)", price: 5900, duration: "60 мин" },
    ],
  },
  {
    key: "massage",
    title: "массаж",
    description: "ручной и аппаратный массаж лица и тела",
    items: [
      { name: "Массаж лица", price: 2000, duration: "30 мин" },
      { name: "Скульптурный массаж лица", price: 4500, duration: "60 мин" },
      { name: "Классический LPG-массаж", price: 3000, duration: "45 мин" },
      { name: "Лимфодренажный массаж тела", price: 3000, duration: "60 мин" },
    ],
  },
  {
    key: "injections",
    title: "инъекции",
    description: "бережные инъекционные процедуры",
    items: [
      { name: "Безинъекционная биоревитализация", price: 7000, duration: "60 мин" },
      { name: "Биоревитализация (премиум)", price: 8000, duration: "60 мин" },
    ],
  },
];

export const ALL_SERVICES = SERVICE_CATEGORIES.flatMap((c) => c.items.map((i) => i.name));

export const TESTIMONIALS = [
  {
    name: "Юлия Р.",
    date: "18 января",
    rating: 5,
    text:
      "Эстетично, уютно, душевно и спокойно. Администратор встретила очень доброжелательно и по-человечески просто, угостила отличным кофе в красивой фарфоровой чашечке. Косметолог Мария всё сделала комфортно и профессионально. Место, куда хочется вернуться.",
  },
  {
    name: "Мария Р.",
    date: "13 сентября",
    rating: 5,
    text:
      "Островок гармонии и приятных процедур. Была на RF-лифтинге лица у мастера Елены — очень приятный и деликатный мастер. Умиротворяющая музыка на фоне и эстетика пространства — волшебное комбо. В такую студию хочется вернуться.",
  },
  {
    name: "Rose Nord",
    date: "17 августа",
    rating: 5,
    text:
      "Услуги оказываются на очень высоком уровне, я всем довольна — рекомендую! А также отдельно хочется отметить очень уютное пространство, где хочется остаться жить. Атмосфера расслабляет, отключаешься от суеты и ощущаешь себя кайфово в моменте «здесь и сейчас».",
  },
  {
    name: "sss_anya",
    date: "8 апреля",
    rating: 5,
    text: "Потрясающее обслуживание, очень уютное пространство.",
  },
];

// REAL photos: Instagram posts from @vskolz.moscow downloaded to /public/img/
// + 2 real Yandex CDN photos uploaded by the salon.
const IG1 = "/img/ig_DGAP6AZsDKB_1.jpg";
const IG2 = "/img/ig_DGkZNLWsLoE_1.jpg";
const IG3 = "/img/ig_DJ9QqbaIfK__1.jpg";

export const YANDEX_BACKGROUND =
  "https://avatars.mds.yandex.net/get-maps-adv-crm/4771617/2a0000019547746097a2c1371bab28d1a0db/orig";
export const YANDEX_LOGO =
  "https://avatars.mds.yandex.net/get-maps-adv-crm/4771617/2a0000019547746090674e664b1636ce20f4/orig";

export const HERO_IMAGE = IG1;
export const ABOUT_IMAGE = IG2;

// Real photos from @vskolz.moscow Instagram + Yandex CDN. Add more local files to /public/img/ to extend the gallery.
export const GALLERY = [IG1, IG3, IG2, YANDEX_BACKGROUND, IG3, IG1];
