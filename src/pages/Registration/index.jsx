import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, selectIsAuth } from "../../redux/slices/auth";
import { Form, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./Registration.module.css";

export const Registration = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  //   const [username, setUsername] = useState("");
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
      console.log(fields);

      const data = await dispatch(fetchRegister(fields));
      console.log(data);

      if (!data.payload) {
        toast("Не удалось зарегистрироваться");
      }
      if ("token" in data.payload) {
        window.localStorage.setItem("token", data.payload.token);
      }
      navigate("/");
    } catch (error) {
      console.warn(error);
      toast("Не удалось зарегистрироваться");
    }
  };

  if (isAuth) {
  }

  return (
    <div className={styles.form_container}>
      <h3 className={styles.form_header}>Регистрация аккаунта</h3>
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
          Зарегистрироваться
        </button>
      </form>
      <Link to="/login">Авторизоваться</Link>
      <p className={styles.form_label}>
        (Работает только для существующих пользователей в reqres.in)
      </p>
      <p className={styles.form_label}>((Например: eve.holt@reqres.in))</p>
    </div>
  );
};
