// src/pages/Pizza.jsx
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { useCart } from '../hooks/useCart';
import { useState, useEffect } from 'react';

const Pizza = () => {
  const { addToCart } = useCart();
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p001');
        const data = await response.json();
        setPizzas([data]);
      } catch (error) {
        console.error('Error al obtener las pizzas:', error);
      }
    };

    fetchPizzas();
  }, []);
  return (
    <main>
      <Header />
      <section className="container py-4">
        <div className="row g-4">
          {pizzas.map(pizza => (
            <div className="" key={pizza.id}>
              <CardPizza 
                id={pizza.id}
                nombre={pizza.name}
                precio={pizza.price}
                ingredientes={pizza.ingredients}
                imagen={pizza.img}
                onAddToCart={() => addToCart(pizza)}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Pizza;