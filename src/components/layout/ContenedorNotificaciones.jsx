/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { Box, List, ListItemIcon } from "@mui/material";
import { useContext } from "react";
import { NotificacionesContext } from "../../context/NotificacionesContext";

import { HiBellAlert } from "react-icons/hi2";

export function ContenedorNotificaciones() {
  const { count } = useContext(NotificacionesContext);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <List
        sx={{ width: "100%", maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemIcon
          sx={{ color: "white", display: "flex", alignItems: "flex-end" }}
        >
          <HiBellAlert onClick={handleClick} />
          {count <= 0 ? "" : <span>{count}</span>}
        </ListItemIcon>
      </List>
    </Box>
  );
}
