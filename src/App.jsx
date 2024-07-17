import "./App.css";
import { LikeButton } from "./components/LikeButton";

import { useContext } from "react";
import { NotificacionesContext } from "././context/NotificacionesContext";
import { Navbar } from "./components/layout/Navbar";
import { Notificacion } from "./components/Notificacion";

function App() {
  const { array, setArray, count, setCount } = useContext(
    NotificacionesContext
  );

  return (
    <>
      <Navbar />
      <Notificacion />
      <LikeButton
        setArray={setArray}
        array={array}
        count={count}
        setCount={setCount}
      />
    </>
  );
}

export default App;
