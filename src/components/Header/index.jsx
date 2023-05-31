import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../redux/slices/auth";
import { Link, useNavigate } from "react-router-dom";

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
    <div>
      <Link to="/">Главная</Link>
      <Link to="/objects">Объекты пользователя</Link>
      <button onClick={onClickLogout}>Выйти</button>
    </div>
  );
};
