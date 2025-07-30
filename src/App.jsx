import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar.jsx";
import Menu from "./Menu.jsx"; // Import Menu
import Cart from "./Cart.jsx"; // Import Cart

function App() {
  const [started, setStarted] = useState(false);
  const [empty, setEmpty] = useState(false); // State to control Cart visibility
  const [cartItems, setCartItems] = useState([]);

  const handleStart = () => {
    setStarted(true);
  };

  const toggleCart = () => {
    setEmpty(!empty);
  };

  return (
    <>
      {!started ? (
        <div className="image-container">
          <img className="image" src="/Garden.jpg" alt="Garden" /> {/* Placeholder image */}
          <h1>Welcome To Plantify!</h1>
          <p>
            At Plantify, we believe that every space deserves a touch of nature.
            From air-purifying indoor plants to vibrant outdoor blooms, we bring
            you a wide variety of healthy, handpicked plants to brighten your
            home and uplift your mood. Whether you're a seasoned plant parent or
            just starting your green journey, Plantify makes it easy to find,
            grow, and care for plants with love. Explore our collection today and
            let nature thrive in your space!
          </p>
          <button onClick={handleStart}>Get Started</button>
        </div>
      ) : (
        // Render NavBar and then either Menu or Cart
        <>
          <NavBar
            count={cartItems.length}
            toggleCart={toggleCart} // Pass toggleCart function
          />
          <div style={{ paddingTop: "70px" }}> {/* Adjust padding to clear fixed navbar */}
            {empty ? (
              <Cart
                count={cartItems.length}
                empty={empty}
                setEmpty={setEmpty} // This prop name seems inconsistent, might be better as setShowCart
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            ) : (
              <Menu
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}

export default App;