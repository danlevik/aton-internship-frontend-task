import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Header } from "../Header";

// Компонент модального окна для создания и редактирования объектов
export const Modal = ({
  addObject,
  editObject,
  onCloseModal,
  editingObject,
}) => {
  const [naming, setNaming] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [pantone, setPantone] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const newObject = {
      id: uuid(),
      naming,
      year,
      color,
      pantone,
    };
    // если установлен объект для редактирования,
    // производится его изменение
    if (editingObject) {
      newObject.id = editingObject.id;
      editObject(newObject);
    } else {
      addObject(newObject);
    }
    onCloseModal();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="naming">Название</label>
        <input
          onChange={(e) => setNaming(e.target.value)}
          id="naming"
          value={naming}
          placeholder="Название..."
        ></input>
        <label htmlFor="year">Год</label>
        <input
          onChange={(e) => setYear(e.target.value)}
          id="year"
          value={year}
          placeholder="Год..."
        ></input>
        <label htmlFor="color">Цвет</label>
        <input
          onChange={(e) => setColor(e.target.value)}
          id="color"
          value={color}
          placeholder="Цвет..."
        ></input>
        <label htmlFor="pantone">Пантон</label>
        <input
          onChange={(e) => setPantone(e.target.value)}
          id="pantone"
          value={pantone}
          placeholder="Пантон..."
        ></input>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
};
