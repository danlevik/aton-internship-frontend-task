import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";
import { Form, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import styles from "./Auth.module.css";

export const Auth = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const fields = {
        email,
        password,
      };

      // авторизация
      const data = await dispatch(fetchAuth(fields));

      if (!data.payload) {
        toast("Не удалось авторизоваться");
      }
      if ("token" in data.payload) {
        window.localStorage.setItem("token", data.payload.token);
      }
      // Успешная авторизация перенаправляет пользователя на главную страницу
      navigate("/");
    } catch (error) {
      console.warn(error);
      toast("Не удалось авторизоваться");
    }
  };

  if (isAuth) {
  }

  return (
    <div className={styles.form_container}>
      <h3 className={styles.form_header}>Вход в аккаунт</h3>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.form_label} htmlFor="email">
          Почта
        </label>
        <input
          className={styles.form_input}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          value={email}
          placeholder="Ваша почта..."
        ></input>
        <label className={styles.form_label} htmlFor="password">
          Пароль
        </label>
        <input
          className={styles.form_input}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          value={password}
          placeholder="Ваш пароль..."
        ></input>
        <button className={styles.form_button} type="submit">
          Войти
        </button>
      </form>
      <Link to="/signup">Зарегистрироваться</Link>
      <ToastContainer />
    </div>
  );
};
