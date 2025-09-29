// src/pages/Home.jsx
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { useCart } from '../context/CartContext';
import { pizzas } from '../utils/pizzas';

const Home = () => {
  const { addToCart } = useCart();
  
  // Mostrar solo la primera pizza como en el Hito 4
  const pizza = pizzas[0];

  return (
    <main>
      <Header />
      <section className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <CardPizza 
              id={pizza.id}
              nombre={pizza.nombre}
              precio={pizza.precio}
              ingredientes={pizza.ingredientes}
              imagen={pizza.imagen}
              onAddToCart={() => addToCart(pizza)}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home