import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "../../components/DataTable";
import { Header } from "../../components/Header";
import { fetchColors } from "../../redux/slices/colors";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Компонент главной страницы
export const MainPage = () => {
  const dispatch = useDispatch();
  const { colors } = useSelector((state) => state.colors);
  const [page, setPage] = useState(1);

  const isColorsLoading = colors.status === "loading";

  // Объект-плейсхолдер для таблицы на время загрузки
  const loadingObject = [
    {
      name: "loading",
      year: "loading",
      color: "loading",
      pantone_value: "loading",
    },
    {
      name: "loading",
      year: "loading",
      color: "loading",
      pantone_value: "loading",
    },
    {
      name: "loading",
      year: "loading",
      color: "loading",
      pantone_value: "loading",
    },
  ];

  // первичный запрос данных
  useEffect(() => {
    dispatch(fetchColors(page));
  }, []);
  // обновление данных при изменении страницы
  useEffect(() => {
    const startRequestTime = new Date();
    dispatch(fetchColors(page));
    const responseTime = new Date() - startRequestTime;
    toast(`Данные получены за ${responseTime}мс`);
  }, [page]);

  return (
    <div>
      <Header></Header>
      {isColorsLoading ? (
        <div>
          <p>Страница ? из ?</p>
          <DataTable data={loadingObject}></DataTable>
        </div>
      ) : (
        <div>
          <p>
            Страница {colors.items.page} из {colors.items.total_pages}
          </p>
          <DataTable data={colors.items.data}></DataTable>
          {colors.items.page > 1 ? (
            <button onClick={() => setPage(page - 1)}>
              Предыдущая страница
            </button>
          ) : null}
          {colors.items.page < colors.items.total_pages ? (
            <button onClick={() => setPage(page + 1)}>
              Следующая страница
            </button>
          ) : null}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};
