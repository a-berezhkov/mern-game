export const navItems = [
  { title: "Home", href: "/" },
  { title: "Платформа", href: "/platform" },
  { title: "Стена", href: "/board" },
  { title: "Стоимость", href: "/cost" },
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
