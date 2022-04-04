export const navItems = [
  { title: "Home", href: "/home" },
  { title: "Платформа", href: "/platform" },
  { title: "Стена", href: "/board" },
  { title: "Стоимость", href: "/costs" },
  { title: "Контакты", href: "/contacts" },
  { title: "Войти", href: "/login" },
  { title: "Зарегистрироваться", href: "/signin" },
];

export const signinForm = [
  {
    id: "lastName",
    label: "Фамилия",
    type: "text",
    required: "Это поле обязательно",
    minLength: 3,
    minMessage: "Минимум 3 символа",
    maxLength: 50,
    maxMessage: "Максимум 50 символов",
  },
  {
    id: "firstName",
    label: "Имя",
    type: "text",
    required: "Это поле обязательно",
    minLength: 3,
    minMessage: "Минимум 3 символа",
    maxLength: 20,
    maxMessage: "Максимум 20 символов",
  },
  {
    id: "patronymic",
    label: "Отчество",
    type: "text",
    required: "Это поле обязательно",
    minLength: 4,
    minMessage: "Минимум 4 символа",
    maxLength: 50,
    maxMessage: "Максимум 50 символов",
  },

  {
    id: "email",
    label: "Электронная почта",
    type: "email",
    required: "Это поле обязательно",
    maxLength: 50,
    maxMessage: "Максимум 50 символов",
    patternValue:
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/,
    patternMessage: "Недопустимый формат email",
  },
  {
    id: "tel",
    label: "Номер телефона",
    type: "tel",
    required: "Это поле обязательно",
    patternValue: /^\+?7(\d{10})$/,
    patternMessage: "Недопустимый формат телефона",
    placeholder: "+7XXXXXXXXXX",
  },
];

export const monster = [
  {
    body: [
      { id: 1, url: "/img/monster/img/body/blue-body.gif" },
      { id: 2, url: "/img/monster/img/body/body-yellow.gif" },
    ],
  },
  {
    arms: [
      { id: 4, url: "/img/monster/img/arms/blue-arm-1.gif" },
      { id: 5, url: "/img/monster/img/arms/blue-arm-2.gif" },
      { id: 6, url: "/img/monster/img/arms/green-arm-1.gif" },
      { id: 7, url: "/img/monster/img/arms/green-arm-2.gif" },
    ],
  },
  {
    ears: [
      { id: 8, url: "/img/monster/img/ears/ear-pink-1.gif" },
      { id: 9, url: "/img/monster/img/ears/ear-pink-2.gif" },
    ],
  },
  {
    eyes: [
      { id: 10, url: "/img/monster/img/eyes/big-green-eyes.gif" },
      { id: 11, url: "/img/monster/img/eyes/blue-eyes-3.gif" },
    ],
  },
  {
    hairs: [
      { id: 12, url: "/img/monster/img/hair/green-hair-3.gif" },
      { id: 13, url: "/img/monster/img/hair/pink-hair.gif" },
    ],
  },
  {
    hat: [
      { id: 14, url: "/img/monster/img/hat/hat-1.gif" },
      { id: 15, url: "/img/monster/img/hat/hat-2.gif" },
    ],
  },
  {
    horn: [
      { id: 16, url: "/img/monster/img/horns/horn-7.gif" },
      { id: 17, url: "/img/monster/img/horns/horn-8.gif" },
      { id: 18, url: "/img/monster/img/horns/horn5.gif" },
      { id: 19, url: "/img/monster/img/horns/horn6.gif" },
    ],
  },
  {
    legs: [
      { id: 20, url: "/img/monster/img/legs/red-leg-1.gif" },
      { id: 21, url: "/img/monster/img/legs/red-leg-2.gif" },
      { id: 22, url: "/img/monster/img/legs/pink-leg-5.gif" },
      { id: 23, url: "/img/monster/img/legs/pink-leg-6.gif" },
    ],
  },
  {
    mouth: [
      { id: 24, url: "/img/monster/img/mouth/mouth-6.gif" },
      { id: 25, url: "/img/monster/img/mouth/mouth-7.gif" },
      { id: 26, url: "/img/monster/img/mouth/mouth-8.gif" },
    ],
  },
  {
    nose: [
      { id: 27, url: "/img/monster/img/nose/nose-3.gif" },
      { id: 28, url: "/img/monster/img/nose/nose-4.gif" },
      { id: 29, url: "/img/monster/img/nose/nose-5.gif" },
    ],
  },
  {
    tail: [{ id: 30, url: "/img/monster/img/tail/tail.gif" }],
  },
  {
    wings: [
      { id: 31, url: "/img/monster/img/wings/wing-1.gif" },
      { id: 32, url: "/img/monster/img/wings/wing-2.gif" },
    ],
  },
];
