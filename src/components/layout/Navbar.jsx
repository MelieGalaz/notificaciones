import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { useContext } from "react";

import { ContenedorNotificaciones } from "./ContenedorNotificaciones";
import { NotificacionesContext } from "../../context/NotificacionesContext";
export const Navbar = () => {
  const { array, setArray, count, setCount } = useContext(
    NotificacionesContext
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: "56px" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <ContenedorNotificaciones
            array={array}
            setArray={setArray}
            count={count}
            setCount={setCount}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
