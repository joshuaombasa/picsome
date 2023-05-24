import React, { useContext } from "react";
import { cartContext } from "../CartContext";
import CartItem from "../components/CartItem"

export default function Cart() {


    const { cartItemsDataArray, totalCostOfItemsInCart } = useContext(cartContext)

    let cartItemsJsx

    if (cartItemsDataArray) {
        cartItemsJsx = cartItemsDataArray.map(item => {
            return <CartItem key={item.id} photo={item} />
        })
    }

    return (
        <div className="cart--container">
            {cartItemsDataArray && cartItemsJsx}
            <div className="cost--container">
                <h1 className="cart--total--text">Total cost: { }</h1>
                <h1 className="total--value">$ {totalCostOfItemsInCart}</h1>
            </div>
            <button className="make--order-btn">Make order</button>
        </div>
    )
}