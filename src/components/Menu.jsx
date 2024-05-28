import { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzasContext } from "../context/PizzasProvider";
import { Navbar } from "react-bootstrap";

const Menu = () => {
  const { carrito } = useContext(PizzasContext);
  const total = carrito.reduce(
    (a, pizza) => a + pizza.price * pizza.count,
    0,
  );

  return (
        <Navbar className="d-flex justify-content-between px-5">
          <Link className="titulo" 
          to="/"> 🍕Pizzeria MammaMia
          </Link>
          <Link className="titulo"
          to="/carrito">
              {""} 🛒Total: ${total}
          </Link>
        </Navbar>
  );
};

export default Menu;
