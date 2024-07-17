// import { ListItemText, Container, List, Button } from "@mui/material";
// import { FaCheckSquare } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import { useContext } from "react";
// import { NotificacionesContext } from "../context/NotificacionesContext";
// import { DeleteButton } from "./DeleteButton";

// export function Notificacion() {
//   const { array, setArray, count, setCount, handleDelete, handleSeen } =
//     useContext(NotificacionesContext);

//   return (
//     <>
//       <List component="div" disablePadding>
//         <DeleteButton
//           setArray={setArray}
//           array={array}
//           count={count}
//           setCount={setCount}
//         />
//         {array.map(({ notificacion, id, visto }) => (
//           <Container key={id} sx={{ display: "flex", alignItems: "center" }}>
//             <Button onClick={() => handleSeen(id)} id={id} disabled={visto}>
//               <FaCheckSquare style={{ color: visto ? "grey" : "green" }} />
//             </Button>
//             <MdDelete
//               onClick={() => handleDelete(id)}
//               id={id}
//               style={{ fontSize: "22px", color: "red" }}
//             />
//             <ListItemText
//               primary={notificacion}
//               sx={{ color: visto ? "grey" : "black" }}
//             />
//           </Container>
//         ))}
//       </List>
//     </>
//   );
// }
import { useState, useContext } from "react";
import {
  ListItemText,
  Container,
  List,
  Button,
  Modal,
  Box,
} from "@mui/material";
import { FaCheckSquare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NotificacionesContext } from "../context/NotificacionesContext";
import { DeleteButton } from "./DeleteButton";

const style = {
  position: "absolute",
  top: "56px", // Ajuste para que aparezca justo debajo de la navbar
  right: 0,
  with: "300px",
  minWidth: "30%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function Notificacion() {
  const { array, setArray, count, setCount, handleDelete, handleSeen } =
    useContext(NotificacionesContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Ver Notificaciones</Button>
      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{
          style: {
            backgroundColor: "transparent", // Fondo transparente
          },
        }}
      >
        <Box sx={style}>
          <List component="div" disablePadding>
            <DeleteButton
              setArray={setArray}
              array={array}
              count={count}
              setCount={setCount}
            />
            {array.map(({ notificacion, id, visto }) => (
              <Container
                key={id}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ListItemText
                  primary={notificacion}
                  sx={{ color: visto ? "grey" : "black" }}
                />
                <Button onClick={() => handleSeen(id)} id={id} disabled={visto}>
                  <FaCheckSquare style={{ color: visto ? "grey" : "green" }} />
                </Button>
                <MdDelete
                  onClick={() => handleDelete(id)}
                  id={id}
                  style={{ fontSize: "22px", color: "red" }}
                />
              </Container>
            ))}
          </List>
        </Box>
      </Modal>
    </>
  );
}
