import { MdDeleteForever } from "react-icons/md";
import { useContext } from "react";
import { NotificacionesContext } from "../context/NotificacionesContext";
export const DeleteButton = () => {
  const { array, setArray } = useContext(NotificacionesContext);

  const handleDeleteAll = () => {
    setArray([]);
  };

  return (
    <>
      {array?.length > 0 ? (
        <div
          onClick={handleDeleteAll}
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <MdDeleteForever style={{ fontSize: 16, color: "blue" }} />
          <span style={{ fontSize: 13, color: "blue" }}>
            Eliminar notificaciones
          </span>
        </div>
      ) : (
        <p>No tenes notificaciones</p>
      )}
    </>
  );
};
