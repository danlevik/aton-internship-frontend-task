import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, selectIsAuth } from "../../redux/slices/auth";
import { Form, useNavigate } from "react-router-dom";

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
        alert("Не удалось зарегистрироваться");
      }
      if ("token" in data.payload) {
        window.localStorage.setItem("token", data.payload.token);
      }
      navigate("/");
    } catch (error) {
      console.warn(error);
      alert("Не удалось зарегистрироваться");
    }
  };

  if (isAuth) {
  }

  return (
    <div>
      <h3>Регистрация аккаунта</h3>
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
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};