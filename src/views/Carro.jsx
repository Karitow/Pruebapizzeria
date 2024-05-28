import { useContext } from "react";
import { PizzasContext } from "../context/PizzasProvider";

const Carro = () => {
  const { carrito, increment, decrement } = useContext(PizzasContext);
  const total = carrito.reduce(
    (a, pizza) => a + pizza.price * pizza.count,
    0,
  );

  return (
    <div className="p-5">
      <div className="bg-light w-75 m-auto p-5">
        <h5 className="pedido">Detalles del pedido</h5>
        <div className="p3">
          {carrito.map((pizza, i) => (
            <div key={i} className="d-flex justify-content-between py-2">
              <div className="d-flex justify-content-between align-items-center">
                <img src={pizza.img} width="70" alt="" />
                <h6 className="mb-0 text-capitalize p-2">{pizza.name}</h6>
              </div>

              <div className="d-flex justify-content-end align-items-center">
                <h6 className="mb-0 p-2 text-success">
                  ${pizza.price * pizza.count}
                </h6>
                <button className="btn btn-danger" onClick={() => decrement(i)}>
                  -
                </button>
                <b className="mx-2">{pizza.count}</b>
                <button
                  className="btn btn-primary"
                  onClick={() => increment(i)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <h2 className="my-4">Total: ${total}</h2>
          <button className="btn btn-warning">Ir a Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default Carro;
