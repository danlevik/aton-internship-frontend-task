import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "../../components/DataTable";
import { Header } from "../../components/Header";
import { fetchColors } from "../../redux/slices/colors";
import { useEffect, useState } from "react";

export const MainPage = () => {
  const dispatch = useDispatch();
  const { colors } = useSelector((state) => state.colors);
  const [page, setPage] = useState(1);

  const isColorsLoading = colors.status === "loading";

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

  useEffect(() => {
    dispatch(fetchColors(page));
  }, []);
  useEffect(() => {
    dispatch(fetchColors(page));
  }, [page]);

  const onChangePage = (isNextPage) => {};

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
    </div>
  );
};
