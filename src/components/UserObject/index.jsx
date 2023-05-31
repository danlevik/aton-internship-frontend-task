// Компонент объекта, создаваемого пользователем локально
export const UserObject = ({ data, deleteObject, onOpenModal, editObject }) => {
  const onDelete = () => {
    deleteObject(data.id);
  };

  // Редактирование вызывает внешнюю функцию и передает себя
  // и открывает модальное окно
  const onEdit = () => {
    editObject(data);
    onOpenModal(true);
  };

  return (
    <div>
      <p>ID: {data.id}</p>
      <p>Название: {data.naming}</p>
      <p>Год: {data.year}</p>
      <p>Цвет: {data.color}</p>
      <p>Пантон: {data.pantone}</p>
      <button onClick={onEdit}>Редактировать</button>
      <button onClick={onDelete}>Удалить</button>
    </div>
  );
};
