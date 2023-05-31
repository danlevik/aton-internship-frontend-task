import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";
import { Form, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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
    <div>
      <h3>Вход в аккаунт</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Почта</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          value={email}
          placeholder="Ваша почта..."
        ></input>
        <label htmlFor="password">Пароль</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          value={password}
          placeholder="Ваш пароль..."
        ></input>
        <button type="submit">Войти</button>
      </form>
      <Link to="/signup">Зарегистрироваться</Link>
      <ToastContainer />
    </div>
  );
};
