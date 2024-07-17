import { BiSolidLike } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { LikeButton } from "./LikeButton";
import { TbAlertHexagon } from "react-icons/tb";
import { ImFrustrated } from "react-icons/im";
export const Botones = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <LikeButton
        Icon={BiSolidLike}
        notificationText="me gusta"
        style={{ color: "blue" }}
      />
      <LikeButton
        Icon={FaHeart}
        notificationText="me encanta"
        style={{ color: "red" }}
      />
      <LikeButton
        Icon={TbAlertHexagon}
        notificationText="advertencia"
        style={{ color: "#952ae3" }}
      />
      <LikeButton
        Icon={ImFrustrated}
        notificationText="enojo"
        style={{ color: " #E91E63" }}
      />
    </div>
  );
};
