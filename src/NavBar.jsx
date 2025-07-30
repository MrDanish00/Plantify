import "./NavBar.css";
import { useState } from "react";
import Cart from "./Cart.jsx";
import Menu from "./Menu.jsx";

function NavBar({count, cartItems, setCartItems }) {
    const [empty, setEmpty] = useState(false);

    return (
        <>
            {empty ? (
                <>
                    <nav>
                        <h1>Plantify</h1>
                        <div>
                            <p>{count}</p>
                            <button onClick={() => setEmpty(!empty)}>🛒</button>
                        </div>
                    </nav>
                    <Cart count={count} empty={empty} setEmpty={setEmpty} cartItems={cartItems} setCartItems={setCartItems}/>
                </>
            ) : (
                <>
                    <nav>
                        <h1>Plantify</h1>
                        <div>
                            <p>{count}</p>
                            <button onClick={() => setEmpty(!empty)}>🛒</button>
                        </div>
                    </nav>
                    <Menu cartItems={cartItems} setCartItems={setCartItems}/>
                </>
            )}
        </>
    );
}

export default NavBar;
