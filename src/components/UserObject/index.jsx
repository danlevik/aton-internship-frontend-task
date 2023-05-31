import styles from "./UserObject.module.css";

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
    <div className={styles.object_container}>
      <p className={styles.object_param}>ID: {data.id}</p>
      <p className={styles.object_param}>Название: {data.naming}</p>
      <p className={styles.object_param}>Год: {data.year}</p>
      <p className={styles.object_param}>Цвет: {data.color}</p>
      <p className={styles.object_param}>Пантон: {data.pantone}</p>
      <button className={styles.object_button} onClick={onEdit}>
        Редактировать
      </button>
      <button className={styles.object_button_red} onClick={onDelete}>
        Удалить
      </button>
    </div>
  );
};
