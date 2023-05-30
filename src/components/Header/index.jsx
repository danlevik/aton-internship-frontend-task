import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../redux/slices/auth";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      dispatch(logout());
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
