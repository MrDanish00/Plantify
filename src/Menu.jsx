import plantsData from "./plants.json"
import "./Menu.css"
import { useState } from "react";
function Menu({ cartItems, setCartItems}) {
    const toggleCart = (plant) => {
        setCartItems((prevCart) => {
            const itemExists = prevCart.find((item) => item.name === plant.name);

            if (itemExists) {
                // ✅ Remove item
                return prevCart.filter((item) => item.name !== plant.name);
            } else {
                // ✅ Add item with quantity = 1
                return [...prevCart, { ...plant, quantity: 1 }];
            }
        });
    };


    return (
        <>
            <div className="menu">

                <br /><br /><h2>Air Purifying Plants</h2>
                <div>
                    {plantsData.airPurifyingPlants.map((plant, index) => (
                        <div className="menu-div" key={index}>
                            <h3>{plant.name}</h3>
                            <img className="plant-image" src={`${import.meta.env.BASE_URL}${plant.image_url}`} alt="Plant Image" />
                            <p>{plant.description}</p>
                            <p>Price: ${plant.price}</p><br />
                            {cartItems.some((item) => item.name === plant.name) ? (
                                <button className="before-order-btn">
                                    Added To Cart
                                </button>
                            ) : (
                                <button className="after-order-btn" onClick={() => toggleCart(plant)}>
                                    Add To Cart
                                </button>
                            )}
                        </div>
                    ))}

                </div>

                <h2>Aromatic Fragrant Plants</h2>
                <div>
                    {plantsData.aromaticFragrantPlants.map((plant, index) => (
                        <div className="menu-div" key={index}>
                            <h3>{plant.name}</h3>
                            <img className="plant-image" src={`${import.meta.env.BASE_URL}${plant.image_url}`} alt={plant.name} />
                            <p>{plant.description}</p>
                            <p>Price: ${plant.price}</p><br />
                            {cartItems.some((item) => item.name === plant.name) ? (
                                <button className="before-order-btn">
                                    Added To Cart
                                </button>
                            ) : (
                                <button className="after-order-btn" onClick={() => toggleCart(plant)}>
                                    Add To Cart
                                </button>
                            )}
                        </div>
                    ))}
                </div>
                <h2>Flowering Plants</h2>
                <div>
                    {plantsData.floweringPlants.map((plant, index) => (
                        <div className="menu-div" key={index}>
                            <h3>{plant.name}</h3>
                            <img className="plant-image" src={`${import.meta.env.BASE_URL}${plant.image_url}`} alt={plant.name} />
                            <p>{plant.description}</p>
                            <p>Price: ${plant.price}</p><br />
                            {cartItems.some((item) => item.name === plant.name) ? (
                                <button className="before-order-btn">
                                    Added To Cart
                                </button>
                            ) : (
                                <button className="after-order-btn" onClick={() => toggleCart(plant)}>
                                    Add To Cart
                                </button>
                            )}
                        </div>
                    ))}
                </div>

            </div>

        </>
    )
}

export default Menu;