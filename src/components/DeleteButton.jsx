import { MdDeleteForever } from "react-icons/md";
import { useContext } from "react";
import { NotificacionesContext } from "../context/NotificacionesContext";
export const DeleteButton = () => {
  const { setArray } = useContext(NotificacionesContext);

  const handleDeleteAll = () => {
    setArray([]);
  };

  return (
    <>
      <MdDeleteForever onClick={handleDeleteAll} />
    </>
  );
};
