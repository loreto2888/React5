import { formatCLP } from '../utils/format';
import { useCart } from '../context/CartContext';
import React, { useState } from 'react';

const Navbar = ({ user, setView, handleLogout }) => {
  const { total, resetCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm sticky-top">
        <div className="container-fluid">
          {/* Izquierda: solo logo */}
          <div className="d-flex align-items-center gap-2">
            <a className="navbar-brand fw-bold" href="#" onClick={() => setView('home')}>
              🍕 Pizzería Mamma Mía!
            </a>
          </div>

          {/* Centro vacío para separación */}
          <div className="flex-grow-1"></div>

          {/* Derecha: botones navegación y total */}
          <div className="d-flex align-items-center gap-2 ms-auto">
            <button className="btn btn-outline-light btn-sm" onClick={() => setView('home')}>🍕 Home</button>
            {user ? (
              <>
                <span className="text-light small me-2">� {user.username}</span>
                <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>🔒 Logout</button>
              </>
            ) : (
              <>
                <button className="btn btn-outline-light btn-sm" onClick={() => setView('login')}>🔐 Login</button>
                <button className="btn btn-outline-light btn-sm" onClick={() => setView('register')}>🔐 Register</button>
              </>
            )}
            <button className="btn btn-success ms-2" onClick={() => setShowModal(true)}>
              🛒 Total: ${formatCLP(total)}
            </button>
          </div>
        </div>
      </nav>
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', padding: '32px', borderRadius: '12px', minWidth: '320px', textAlign: 'center', boxShadow: '0 2px 16px #333' }}>
            <h3>Confirmar Pago</h3>
            <p>Total a pagar: <strong>${formatCLP(total)}</strong></p>
            <button className="btn btn-success" style={{ marginRight: '12px' }} onClick={() => { setShowModal(false); resetCart(); alert('¡Pago simulado!'); }}>Pagar</button>
            <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
