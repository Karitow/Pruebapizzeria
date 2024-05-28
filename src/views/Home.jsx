import { PizzasContext } from "../context/PizzasProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { pizzas, addToCart } = useContext(PizzasContext);
  const navigate = useNavigate();
  const handleAddToCart = (pizza) => {
    addToCart(pizza);
  };

  return (
    <>
      <section className='banner pt-5'>
        <h1>Pizzería Mamma Mia</h1>
        <h5>Con los mejores y más frescos ingredientes.</h5>
      </section>
   <div className="container">
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4 mt-5" key={pizza.id}>
            <div className="card">
              <img src={pizza.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">${pizza.price}</p>
                    <p className="ingredientes">Ingredientes:</p>
                  {pizza.ingredients.map((i) => {
                    return (
                      <dd key={i} className='text-capitalize'>🍕 {i}</dd>
                    )
                  })}
                <hr />
                <div className="botones">
                <a
                  onClick={() => navigate(`/productos/${pizza.id}`)}
                  className="btn btn-primary"
                >
                   Ver Más 👀
                </a>
                <a
                    onClick={() => handleAddToCart(pizza)}
                    className="btn btn-danger"
                  >
                    Añadir 🛒
                  </a>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default Home;
