import React from "react";
import { Button } from "reactstrap";
import { useForm } from "react-hook-form";
import s from "./signin.module.css";

const Signin = ({ caption }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    reset();
  };

  return (
    <div className="container">
      <div className={s.signin__caption}>
        <img
          src="/img/SignIn_form/1110960_essential_in_minus_round_set_icon.svg"
          alt="signin icon"
          width="50"
          height="50"
        />
        <span className={s.caption}>{caption}</span>
      </div>
      <form className={s.signin__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.signin__wraper}>
          <div className="mb-3">
            <label className={s.signin__label} htmlFor="lastName">
              Фамилия<sup style={{ color: "red" }}>*</sup>
            </label>
            <input
              name="lastName"
              {...register("lastName", {
                required: "Это поле обязательно",
                minLength: {
                  value: 3,
                  message: "Минимум 3 символа",
                },
                maxLength: {
                  value: 50,
                  message: "Максимум 50 символов",
                },
              })}
              type="text"
              className="form-control"
              id="lastName"
            />
          </div>
          <div>
            {errors?.lastName && (
              <p className={s.focus}>{errors?.lastName?.message || "Error!"}</p>
            )}
          </div>

          <div className="mb-3">
            <label className={s.signin__label} htmlFor="firstName">
              Имя<sup style={{ color: "red" }}>*</sup>
            </label>
            <input
              name="firstName"
              {...register("firstName", {
                required: "Это поле обязательно",
                minLength: {
                  value: 3,
                  message: "Минимум 3 символа",
                },
                maxLength: {
                  value: 20,
                  message: "Максимум 20 символов",
                },
              })}
              type="text"
              className="form-control"
              id="firstName"
            />
          </div>
          <div>
            {errors?.firstName && (
              <p className={s.focus}>
                {errors?.firstName?.message || "Error!"}
              </p>
            )}
          </div>

          <div className="mb-3">
            <label className={s.signin__label} htmlFor="patronymic">
              Отчество
            </label>
            <input
              name="patronymic"
              type="text"
              className="form-control"
              id="patronymic"
            />
          </div>

          <div className="mb-3">
            <label className={s.signin__label} htmlFor="email">
              Электронная почта<sup style={{ color: "red" }}>*</sup>
            </label>
            <input
              name="email"
              {...register("email", {
                required: "Это поле обязательно",
                maxLength: {
                  value: 50,
                  message: "Максимум 50 символов",
                },
                pattern: {
                  value:
                    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/,
                  message: "Недопустимый формат email",
                },
              })}
              type="email"
              className="form-control"
              id="email"
            />
          </div>
          <div>
            {errors?.email && (
              <p className={s.focus}>{errors?.email?.message || "Error!"}</p>
            )}
          </div>

          <div className="mb-3">
            <label className={s.signin__label} htmlFor="tel">
              Номер телефона<sup style={{ color: "red" }}>*</sup>
            </label>
            <input
              name="tel"
              {...register("tel", {
                required: "Это поле обязательно",
                pattern: {
                  value: /^\+?7(\d{10})$/,
                  message: "Недопустимый формат телефона",
                },
              })}
              type="tel"
              placeholder="+7XXXXXXXXXX"
              className="form-control"
              id="tel"
            />
          </div>
          <div>
            {errors?.tel && (
              <p className={s.focus}>{errors?.tel?.message || "Error!"}</p>
            )}
          </div>

          <div className="mb-3">
            <label className={s.signin__label} htmlFor="select">
              Вы хотите зарегистрироваться, как:
              <sup style={{ color: "red" }}>*</sup>
            </label>
            <select
              name="role"
              {...register("role")}
              id="select"
              className="form-select"
            >
              <option value="teacher">Преподаватель</option>
              <option value="student">Ученик</option>
            </select>
          </div>
        </div>
        <Button
          className={s.signin__submit}
          color="warning"
          type="submit"
          disabled={!isValid}
        >
          Продолжить
        </Button>
      </form>
    </div>
  );
};

export default Signin;
