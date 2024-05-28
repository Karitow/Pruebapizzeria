import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { PizzasContext } from "../context/PizzasProvider.jsx";

const Detalle = () => {
  const { pizzas, addToCart } = useContext(PizzasContext);
  const { id } = useParams();
  const [detallePizza, setDetallePizza] = useState({});
  const obtenerDatos = () => {
    const datosPizzas = pizzas.find((pizza) => pizza.id === id);
    setDetallePizza(datosPizzas);
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <>
      {detallePizza && (
        <div className="container mt-5">
          <div className="card mb-3 estilos">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={detallePizza.img}
                  className="img-fluid"
                  alt={detallePizza.name}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title2">
                    {detallePizza.name}
                  </h5>
                  <p className="card-text2">{detallePizza.desc}</p>

                  <div className="d-flex justify-content-around">
                    <h4 className="valors">Valor: ${detallePizza.price}</h4>
                    <button
                      className="btn btn-danger"
                      onClick={() => addToCart(detallePizza)}
                    >
                      Añadir 🛒 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Detalle;
