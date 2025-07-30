import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar.jsx";

function App() {
  const [started, setStarted] = useState(false);
  const [animate, setAnimate] = useState(false); // for animation
  const [cartItems, setCartItems] = useState([]);
  const handleStart = () => {
    setStarted(true);
    setTimeout(() => setAnimate(true), 50); // allow rendering before adding class
  };

  return (
    <>
      {started ? (
        <div className={`navbar-slide ${animate ? "active" : ""}`}>
          <NavBar count={cartItems.length} started = {started} setStarted = {setStarted} cartItems={cartItems} setCartItems={setCartItems}/>
        </div>
      ) : (
        <div className="image-container">
          <img className="image" src="public/Garden.jpg" alt="Garden" />
          <h1>Welcome To Plantify!</h1>

          <button onClick={handleStart}>Get Started</button>

          <p>
            At Plantify, we believe that every space deserves a touch of nature.
            From air-purifying indoor plants to vibrant outdoor blooms, we bring
            you a wide variety of healthy, handpicked plants to brighten your
            home and uplift your mood. Whether you're a seasoned plant parent or
            just starting your green journey, Plantify makes it easy to find,
            grow, and care for plants with love. Explore our collection today and
            let nature thrive in your space!
          </p>
        </div>
      )}
    </>
  );
}

export default App;
