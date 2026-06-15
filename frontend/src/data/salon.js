// All content sourced from public Yandex Maps card (yandex.ru/maps/org/vskolz/167816522961/prices/)
// + verified Instagram photos from @vskolz.moscow.

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

// VERIFIED prices from yandex.ru/maps/org/vskolz/167816522961/prices/
export const SERVICE_CATEGORIES = [
  {
    key: "cleaning",
    title: "чистка кожи",
    description: "глубокое очищение, восстановление баланса кожи",
    items: [
      { name: "Ультразвуковая чистка", price: 3000, duration: "60 мин" },
      { name: "Атравматичная чистка", price: 4000, duration: "75 мин" },
      { name: "Комбинированная чистка", price: 5000, duration: "90 мин" },
    ],
  },
  {
    key: "care",
    title: "косметологические уходы",
    description: "программы ухода по 2 часа · подбор под запрос кожи",
    items: [
      { name: "Интенсивное увлажнение", price: 4500, duration: "2 ч" },
      { name: "Успокаивающий эффект", price: 4500, duration: "2 ч" },
      { name: "Наполнение & разглаживание", price: 4500, duration: "2 ч" },
      { name: "Наполнение & укрепление", price: 4500, duration: "2 ч" },
      { name: "Лифтинг & стимуляция", price: 4500, duration: "2 ч" },
      { name: "Регенерация & разглаживание", price: 4500, duration: "2 ч" },
    ],
  },
  {
    key: "peels",
    title: "пилинги",
    description: "химические и аппаратные пилинги",
    items: [
      { name: "Пилинг фарфоровый", price: 4000, duration: "45 мин" },
      { name: "Пилинг ферментный", price: 4000, duration: "45 мин" },
      { name: "Пилинг ABR", price: 6000, duration: "60 мин" },
      { name: "PRX-T33 · лицо", price: 6000, duration: "45 мин" },
      { name: "PRX-T33 · лицо + шея", price: 10000, duration: "60 мин" },
    ],
  },
  {
    key: "photo",
    title: "фотоомоложение",
    description: "ipl-фотоомоложение для ровного тона и плотности кожи",
    items: [
      { name: "Шея", price: 2000, duration: "20 мин" },
      { name: "Декольте", price: 2000, duration: "20 мин" },
      { name: "Кисти", price: 2000, duration: "20 мин" },
      { name: "Лицо", price: 6000, duration: "40 мин" },
      { name: "Лицо + шея", price: 7000, duration: "50 мин" },
      { name: "Лицо + шея + декольте", price: 8000, duration: "60 мин" },
    ],
  },
  {
    key: "biotok",
    title: "биотоки & led-терапия",
    description: "микротоковая стимуляция и светотерапия",
    items: [
      { name: "Биотоки", price: 3000, duration: "30 мин" },
    ],
  },
  {
    key: "epilation",
    title: "аппаратное удаление волос",
    description: "диодная лазерная эпиляция · бережно для всех типов кожи",
    items: [
      { name: "Верхняя губа", price: 700, duration: "10 мин" },
      { name: "Подбородок", price: 1000, duration: "10 мин" },
      { name: "Кисть", price: 1000, duration: "10 мин" },
      { name: "Подмышки", price: 1200, duration: "15 мин" },
      { name: "Грудная клетка", price: 1200, duration: "20 мин" },
      { name: "Руки ниже локтя", price: 2000, duration: "25 мин" },
      { name: "Лицо", price: 2300, duration: "20 мин" },
      { name: "Руки полностью", price: 2900, duration: "40 мин" },
    ],
  },
  {
    key: "lpg",
    title: "lpg-массаж",
    description: "аппаратный вакуумно-роликовый массаж · все зоны тела",
    items: [
      { name: "LPG — все зоны, 1 сеанс", price: 3000, duration: "35 мин" },
      { name: "Костюм (для LPG)", price: 1000, duration: "—" },
      { name: "LPG — все зоны, курс 10 сеансов", price: 30000, duration: "10×35 мин" },
      { name: "LPG — все зоны, курс 20 сеансов", price: 60000, duration: "20×35 мин" },
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

// Real photos from @vskolz.moscow Instagram — clean, full quality.
const PH_ATTIC    = "/img/vskolz_treatment_room_attic.jpg";   // attic studio with skylight + treatment bed
const PH_PINK     = "/img/vskolz_pink_chair_skylight.jpg";    // pink recliner, skylight, dresser
const PH_BED_LAMP = "/img/vskolz_bed_lamp.jpg";               // treatment bed, lamp, apparatus
const PH_MASTER   = "/img/vskolz_esthetician.jpg";            // smiling esthetician at work
const PH_MIRROR   = "/img/vskolz_mirror_room.jpg";            // mirror reflection, lounge corner
const PH_TEA      = "/img/vskolz_tea_table.jpg";              // tea cup on table with sweets
const PH_HANGERS  = "/img/vskolz_hangers_diffuser.jpg";       // hangers + diffuser at entrance
const PH_LAMP     = "/img/vskolz_vintage_lamp.jpg";           // vintage pleated lamp + gold mirror
const PH_FULLROOM = "/img/vskolz_full_room.jpg";              // full treatment room

export const YANDEX_BACKGROUND =
  "https://avatars.mds.yandex.net/get-maps-adv-crm/4771617/2a0000019547746097a2c1371bab28d1a0db/orig";

export const HERO_IMAGE = PH_ATTIC;
export const ABOUT_IMAGE = PH_PINK;

export const GALLERY = [
  PH_FULLROOM,
  PH_LAMP,
  PH_TEA,
  PH_PINK,
  PH_HANGERS,
  PH_BED_LAMP,
  PH_MIRROR,
  PH_MASTER,
  PH_ATTIC,
];
