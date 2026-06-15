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

// Real photos from @vskolz.moscow Instagram (post DJ9QqbaIfK_ carousel slides + earlier posts).
const IG_LACE       = "/img/ig_DGAP6AZsDKB_1.jpg";        // delicate veil / lace
const IG_FLATLAY    = "/img/ig_DGkZNLWsLoE_1.jpg";        // flatlay
const IG_BAG        = "/img/ig_DJ9QqbaIfK__1.jpg";        // bag flatlay
const VS_SKYLIGHT   = "/img/vskolz_interior_skylight_1.jpg"; // interior, slanted skylight + chair + bag
const VS_ANKETA     = "/img/vskolz_anketa_friend.jpg";    // table with "anketa druzhby" cards
const VS_MORNING    = "/img/vskolz_morning_light.jpg";    // morning light, curtains, cabinet
const VS_LPG        = "/img/vskolz_lpg_apparatus.jpg";    // LPG apparatus in treatment room

export const YANDEX_BACKGROUND =
  "https://avatars.mds.yandex.net/get-maps-adv-crm/4771617/2a0000019547746097a2c1371bab28d1a0db/orig";

export const HERO_IMAGE = VS_SKYLIGHT;
export const ABOUT_IMAGE = VS_MORNING;

export const GALLERY = [
  VS_SKYLIGHT,
  VS_MORNING,
  IG_LACE,
  VS_ANKETA,
  IG_FLATLAY,
  VS_LPG,
  IG_BAG,
];
