import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../redux/slices/auth";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

// Хэдер сайта
export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  // Отображение окошка выхода из системы
  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      dispatch(logout());
      // Удаляем токен и перемещаемся на страницу авторизации
      window.localStorage.removeItem("token");
      navigate("/login");
    }
  };

  return (
    <header className={styles.header_container}>
      <Link className={styles.header_link} to="/">
        Главная
      </Link>
      <Link className={styles.header_link} to="/objects">
        Объекты пользователя
      </Link>
      <button className={styles.logout_button} onClick={onClickLogout}>
        Выйти
      </button>
    </header>
  );
};
