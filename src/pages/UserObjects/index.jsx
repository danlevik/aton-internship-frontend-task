import { useCallback, useEffect, useState } from "react";
import { Modal } from "../../components/Modal";
import { UserObject } from "../../components/UserObject";
import { v4 as uuid } from "uuid";
import { Header } from "../../components/Header";
import { ToastContainer, toast } from "react-toastify";

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

  const addObject = (newObject) => {
    const newArray = objects;
    newArray.push(newObject);
    setObjects(newArray);
    toast(`Данные сохранены. ID: ${newObject.id}`);
  };

  const deleteObject = (deletedObjectId) => {
    const newArray = objects.filter((obj) => obj.id != deletedObjectId);
    setObjects(newArray);
    toast(`Данные удалены`);
  };

  const editObject = (editedObject) => {
    const newArray = objects.map((obj) =>
      obj.id === editedObject.id ? editedObject : obj
    );
    setObjects(newArray);
    setEditingObject(null);
    toast(`Данные обновлены`);
  };

  return (
    <div>
      <Header></Header>
      {objects.map((obj, index) => (
        <UserObject
          deleteObject={deleteObject}
          onOpenModal={onOpenModal}
          editObject={setEditingObject}
          key={index}
          data={obj}
        ></UserObject>
      ))}
      <button onClick={onOpenModal}>Создать объект</button>
      {isModalOpened ? (
        <Modal
          onCloseModal={onCloseModal}
          addObject={addObject}
          editObject={editObject}
          editingObject={editingObject}
        ></Modal>
      ) : null}
      <ToastContainer />
    </div>
  );
};
