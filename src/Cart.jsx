import './Cart.css';

function Cart({ count, empty, setEmpty, cartItems, setCartItems }) {
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
        <button onClick={() => removeItem(item.name)} className="remove-btn">
          X
        </button>
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
        <div className="empty-cart">
          <br /><br /><br /><h1>Cart Price: $0</h1>
          <button className="continue-btn" onClick={() => setEmpty(!empty)}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="full-cart">
          <br /><br /><br /><h1 className="cart-price">Cart Price: ${totalPrice.toFixed(2)}</h1>
          {getCart()}

          <div style={{ marginTop: '30px' }}>
            <button className="continue-btn" onClick={() => setEmpty(!empty)}>
              Continue Shopping
            </button>
            <br />
            <br />
            <button
              className="checkout-btn"
              onClick={() => alert('Checkout Coming Soon!')}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
