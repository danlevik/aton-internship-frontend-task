import { useCallback, useEffect, useState } from "react";
import { Modal } from "../../components/Modal";
import { UserObject } from "../../components/UserObject";
import { v4 as uuid } from "uuid";
import { Header } from "../../components/Header";
import { ToastContainer, toast } from "react-toastify";
import styles from "./UserObjects.module.css";

export const UserObjects = () => {
  const [objects, setObjects] = useState([
    {
      id: uuid(),
      naming: "test name",
      year: "2002",
      color: "123",
      pantone: "456",
    },
  ]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [editingObject, setEditingObject] = useState(null);

  const onOpenModal = (id = null) => {
    setIsModalOpened(true);
  };

  const onCloseModal = () => {
    setIsModalOpened(false);
  };

  // При добавлении вставляем новый объект в конец списка
  const addObject = (newObject) => {
    const newArray = objects;
    newArray.push(newObject);
    setObjects(newArray);
    toast(`Данные сохранены. ID: ${newObject.id}`);
  };

  // При удалении из списка отфильтровывается удаленный объект
  const deleteObject = (deletedObjectId) => {
    const newArray = objects.filter((obj) => obj.id != deletedObjectId);
    setObjects(newArray);
    toast(`Данные удалены`);
  };

  // При редактировании изменяем объект с подходящим id
  const editObject = (editedObject) => {
    const newArray = objects.map((obj) =>
      obj.id === editedObject.id ? editedObject : obj
    );
    setObjects(newArray);
    // Больше мы ничего не редактируем, обновляем состояние
    setEditingObject(null);
    toast(`Данные обновлены`);
  };

  return (
    <div>
      <Header></Header>
      <div className={styles.page_container}>
        <button className={styles.button_create} onClick={onOpenModal}>
          Создать объект
        </button>
        <div className={styles.objects_container}>
          {objects.map((obj, index) => (
            <UserObject
              deleteObject={deleteObject}
              onOpenModal={onOpenModal}
              editObject={setEditingObject}
              key={index}
              data={obj}
            ></UserObject>
          ))}
        </div>

        {isModalOpened ? (
          <Modal
            onCloseModal={onCloseModal}
            addObject={addObject}
            editObject={editObject}
            editingObject={editingObject}
          ></Modal>
        ) : null}
        {isModalOpened ? <div className={styles.backdrop}></div> : null}
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};
