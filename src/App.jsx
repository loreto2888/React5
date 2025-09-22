// src/App.jsx

// import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Pizza from './components/Pizza';
import Login from './components/Login';
import { CartProvider } from './context/CartContext';


import { useState } from 'react';
function App() {
  const [view, setView] = useState('login'); // login | home
  return (
    <CartProvider>
      <div className="app">
        <Navbar setView={setView} />
        {view === 'login' && <Login setView={setView} />}
        {view === 'home' && <Pizza />}
                <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
