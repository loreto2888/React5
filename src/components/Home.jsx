// src/components/Home.jsx
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../utils/pizzas';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  return (
    <main>
      <Header />
      <section className="container py-4">
        <div className="row g-4">
          {pizzas.map(pizza => (
            <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
              <CardPizza 
                id={pizza.id}
                nombre={pizza.nombre}
                precio={pizza.precio}
                ingredientes={pizza.ingredientes}
                imagen={pizza.imagen}
                onAddToCart={() => addToCart(pizza)}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home
