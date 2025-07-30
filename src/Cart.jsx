import { useState } from "react";
import './Cart.css'
import NavBar from "./NavBar.jsx";
import plantsData from "./plants.json";
function Cart({count, empty, setEmpty, cartItems, setCartItems }) {
    const [quantity, setQuantity] = useState(1)
    function removeItem(plantName) {
        setCartItems((prev) => prev.filter((item) => item.name !== plantName));
    }
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const updateQuantity = (plantName, change) =>
        setCartItems((prev) =>
            prev.map((item) =>
                item.name === plantName
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );

    function getCart() {
        return cartItems.map((item, index) => (
            <div className="cart-product" key={index}>
                <button onClick={() => removeItem(item.name)} className="remove-btn">X</button>
                <img className="order-image" src={item.image_url} alt={item.name} />
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <div className="select-quantity">
                    <button onClick={() => updateQuantity(item.name, -1)}>-</button>
                    <label>{item.quantity}</label>
                    <button onClick={() => updateQuantity(item.name, 1)}>+</button>
                </div>
            </div>
        ));
    }


    return (
        <>
            {cartItems.length === 0 ? (
                <>
                    <div className="empty-cart">
                        <h1>Cart Price: $0</h1>
                        <button className="continue-btn" onClick={()=>setEmpty(!empty)}>Continue Shopping</button>
                    </div>

                </>
            ) : (
                <>
                    <h1 className="cart-price">Cart Price: ${totalPrice.toFixed(2)}</h1>
                    <div className="full-cart">
                        {getCart()}
                        <br /><button className="continue-btn" onClick={()=>setEmpty(!empty)}>Continue Shopping</button><br /><br />
                        <button className="checkout-btn" onClick={()=> document.getElementById("checkout").textContent = "Coming Soon"}>Checkout</button>
                        <h1 id="checkout"></h1>
                    </div>
                </>
            )

            }


        </>
    )
}

export default Cart;