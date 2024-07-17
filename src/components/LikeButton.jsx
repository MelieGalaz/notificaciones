import { BiLike } from "react-icons/bi";
import { useContext } from "react";
import { NotificacionesContext } from "../context/NotificacionesContext";

export function LikeButton() {
  const { handleChangeNotification } = useContext(NotificacionesContext);

  return (
    <BiLike
      variant="text"
      onClick={handleChangeNotification}
      style={{ color: "orange" }}
    ></BiLike>
  );
}
