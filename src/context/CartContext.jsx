import { createContext, useState, useContext } from "react";
export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart(prev => {
      const found = prev.find(p => p.id === pizza.id);
      if (found) {
        return prev.map(p => p.id === pizza.id ? { ...p, cantidad: p.cantidad + 1 } : p);
      }
      return [...prev, { ...pizza, cantidad: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev
      .map(p => p.id === id ? { ...p, cantidad: p.cantidad + delta } : p)
      .filter(p => p.cantidad > 0)
    );
  };

  const total = cart.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  // Resetear el carrito y el total
  const resetCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, total, setCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}