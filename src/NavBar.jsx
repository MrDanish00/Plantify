import { useState } from "react"; // useState is not needed here anymore, can be removed
import "./NavBar.css";
// Cart and Menu are no longer imported here as they are rendered in App.jsx

function NavBar({ count, toggleCart }) { // Receive toggleCart as a prop
  return (
    <nav className="nav-bar">
      <h1>Plantify</h1>
      <div className="cart-container">
        <span className="cart-count">{count}</span>
        <button className="cart-btn" onClick={toggleCart}>🛒</button> {/* Use toggleCart from props */}
      </div>
    </nav>
  );
}

export default NavBar;