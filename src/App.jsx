import { Route, Routes } from "react-router-dom";
import Home from "./views/Home.jsx";
import Detalle from "./views/Detalle";
import Carro from "./views/Carro.jsx";
import Menu from "./components/Menu.jsx";

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="productos/:id" element={<Detalle />} />

        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carro />} />
      </Routes>
    </div>
  );
}

export default App;
