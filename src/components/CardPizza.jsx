import React from "react";

const CardPizza = ({ nombre, precio, imagen, ingredientes, onAddToCart }) => {
  return (
    <div className="card-pizza">
      <img
        src={imagen}
        alt={`Pizza ${nombre}`}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
        onError={e => {
          e.target.onerror = null;
          e.target.src = "img/default.jpg";
        }}
      />
      <h2>{nombre}</h2>
      <p><strong>Precio:</strong> ${precio.toLocaleString()}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {ingredientes && ingredientes.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
      <button onClick={onAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default CardPizza;