import React from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHttp } from "../../hooks/http.hook";
import { Alert } from "../../ui/alert/alert";
import s from "./login.module.css";

export const Login = ({ caption }) => {
  const { loading, request } = useHttp();
  const [alert, setAlert] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [type, setType] = React.useState("secondary");
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    const loginHandler = async () => {
      try {
        const res = await request("api/auth/login", "POST", data);
        if (res.userId) {
          setAlert(true);
          setMessage(res.message);
          setType(res.type);
        }
        console.log(res);
      } catch (error) {
        setAlert(true);
        setMessage(error.message);
        setType(error.type);
        console.log(error);
      }
    };
    loginHandler();
    console.log(JSON.stringify(data));

    reset();
  };

  return (
    <div className={s.login}>
      <div className="container">
        <form
          className={s.login__form}
          onSubmit={handleSubmit(onSubmit)}
          onChange={(e) => (e.target.value = e.target.value.trim())}
        >
          <p className={s.login__caption}>{caption}</p>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Ваш Email, указанный при регистрации<sup>*</sup>
            </label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: "Это поле обязательно",
                maxLength: { value: 50, message: "Максимум 50 символов" },
                pattern: {
                  value:
                    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/,
                  message: "Недопустимый формат email",
                },
              })}
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div>
            {errors?.email && (
              <p className={s.focus}>{errors?.email?.message || "Error!"}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Пароль<sup>*</sup>
            </label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "Это поле обязательно",
                minLength: {
                  value: 6,
                  message: "Минимум 6 символов",
                },
                maxLength: {
                  value: 20,
                  message: "Максимум 20 символов",
                },
              })}
              className="form-control"
              id="password"
              placeholder="Пароль"
              autoComplete="off"
            />
          </div>
          <div>
            {errors?.password && (
              <p className={s.focus}>{errors?.password?.message || "Error!"}</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary" disabled={!isValid}>
            Войти
          </button>
        </form>
        {alert && <Alert type={type} title={message} />}
      </div>
    </div>
  );
};
