// Salon static content — derived from public sources (Yandex Maps card + zoon.ru + Instagram concept)

export const SALON = {
  name: "вскользь",
  nameLatin: "vskolz",
  tagline: "нежный дом эстетической косметологии",
  description:
    "камерное пространство в центре москвы, направленное на внутреннее расслабление, уединение и восстановление энергии с помощью косметологических процедур для лица и тела.",
  long_about: [
    "наша студия — уголок, где теплый свет проникает сквозь скошенные окна, а уютная обстановка защищает от внешнего мира, напоминает личную комнату и способствует телесному расслаблению.",
    "оставайтесь с нами и чувствуйте себя как дома, проявляя чуткость, внимание, заботу к внутреннему и внешнему состоянию.",
    "с любовью, нежный дом vskolz.",
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

export const SERVICE_CATEGORIES = [
  {
    key: "face",
    title: "лицо",
    description: "уход, пилинги, инъекции, аппаратная косметология",
    items: [
      { name: "PRX-T33 (лицо + шея)", price: 10000, duration: "60 мин" },
      { name: "Чистка лица комбинированная", price: 5500, duration: "90 мин" },
      { name: "Ультразвуковая чистка лица", price: 4500, duration: "60 мин" },
      { name: "Карбоновый пилинг", price: 6000, duration: "45 мин" },
      { name: "Фарфоровый пилинг", price: 4000, duration: "45 мин" },
      { name: "Гидропилинг", price: 3600, duration: "45 мин" },
      { name: "Безинъекционная биоревитализация", price: 7500, duration: "60 мин" },
      { name: "Микротоки (1 зона)", price: 3500, duration: "30 мин" },
      { name: "RF-лифтинг лица", price: 5000, duration: "45 мин" },
      { name: "Фотоомоложение лица", price: 8000, duration: "60 мин" },
      { name: "Уход за кожей лица (комплексный)", price: 6500, duration: "75 мин" },
    ],
  },
  {
    key: "massage",
    title: "массаж",
    description: "ручной и аппаратный массаж лица и тела",
    items: [
      { name: "Массаж лица классический", price: 2500, duration: "30 мин" },
      { name: "Скульптурный массаж лица", price: 4500, duration: "60 мин" },
      { name: "Буккальный массаж лица", price: 4000, duration: "45 мин" },
      { name: "Лимфодренажный массаж тела", price: 3000, duration: "60 мин" },
      { name: "Расслабляющий массаж тела", price: 3500, duration: "60 мин" },
      { name: "Классический LPG-массаж", price: 3000, duration: "45 мин" },
      { name: "STARVAC (вакуумно-роликовый)", price: 4500, duration: "45 мин" },
      { name: "Прессотерапия", price: 2500, duration: "40 мин" },
    ],
  },
  {
    key: "body",
    title: "тело",
    description: "коррекция фигуры, обёртывания, спа-программы",
    items: [
      { name: "Аппаратный массаж тела", price: 4000, duration: "60 мин" },
      { name: "Обёртывание детокс", price: 4500, duration: "60 мин" },
      { name: "Обёртывание увлажняющее", price: 4500, duration: "60 мин" },
      { name: "Курс LPG (10 сеансов)", price: 25000, duration: "10×35 мин" },
      { name: "Курс прессотерапии (10 сеансов)", price: 20000, duration: "10×40 мин" },
    ],
  },
  {
    key: "epilation",
    title: "лазерная эпиляция",
    description: "диодный лазер, бережно и для всех типов кожи",
    items: [
      { name: "Подмышки", price: 2000, duration: "15 мин" },
      { name: "Бикини классическое", price: 3000, duration: "20 мин" },
      { name: "Бикини глубокое", price: 4500, duration: "25 мин" },
      { name: "Ноги полностью", price: 7000, duration: "60 мин" },
      { name: "Голени", price: 4000, duration: "30 мин" },
      { name: "Руки полностью", price: 4500, duration: "40 мин" },
      { name: "Лицо (любая зона)", price: 1500, duration: "10 мин" },
    ],
  },
  {
    key: "brows",
    title: "брови",
    description: "уход и оформление",
    items: [
      { name: "Окрашивание бровей хной", price: 1200, duration: "30 мин" },
      { name: "Коррекция формы бровей", price: 900, duration: "20 мин" },
      { name: "Комплекс: коррекция + окрашивание", price: 1800, duration: "45 мин" },
    ],
  },
];

// All services flat list for the booking form
export const ALL_SERVICES = SERVICE_CATEGORIES.flatMap((c) => c.items.map((i) => i.name));

export const MASTERS = [
  {
    name: "Мария",
    role: "косметолог-эстетист",
    bio: "Работает деликатно и внимательно: чистки, пилинги, уходовые процедуры.",
    photo:
      "https://images.unsplash.com/photo-1733685372835-c25c95426956?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    name: "Елена",
    role: "косметолог-аппаратчик",
    bio: "RF-лифтинг, микротоки, LPG. Любит, когда клиент уходит с эффектом «свечения».",
    photo:
      "https://images.unsplash.com/photo-1733685372718-6c93d47602c7?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
  {
    name: "Анастасия",
    role: "массажист, эстетист",
    bio: "Скульптурный и буккальный массаж лица, лимфодренаж тела.",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
  },
];

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

export const GALLERY = [
  "https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
  "https://images.unsplash.com/photo-1760862652442-e8ff7ebdd2f8?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
  "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
  "https://images.unsplash.com/photo-1556228720-195a672e8a03?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
];

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1636406261592-055c74637711?crop=entropy&cs=srgb&fm=jpg&w=2000&q=85";

export const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85";
