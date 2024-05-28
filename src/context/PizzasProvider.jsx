/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// Creación del context
export const PizzasContext = createContext();

// Provider con la fuente de datos
const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  // Obtener las productos
  const getPizzas = async () => {
    const res = await fetch("/pizzas.json");
    const pizzas = await res.json();
    setPizzas(pizzas);
  };

  // Funciones para el carro
  const addToCart = ({ id, price, name, img, ingredients }) => {
    const productoEncontradoIndex = carrito.findIndex((p) => p.id === id);
    const pizza = { id, price, name, img, ingredients, count: 1 };

    if (productoEncontradoIndex >= 0) {
      carrito[productoEncontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, pizza]);
    }
  };

  const increment = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  const decrement = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

  return (
    <PizzasContext.Provider
      value={{
        pizzas,
        carrito,
        setPizzas,
        addToCart,
        increment,
        decrement,
      }}
    >
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasProvider;
