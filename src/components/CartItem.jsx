import React, {useContext} from "react";
import { cartContext } from "../CartContext";


export default function CartItem({photo}) {

   const {removeItemFromCart} = useContext(cartContext)

   

    return (
        <div className="cartItem--container">
            <i 
              className="ri-delete-bin-6-line"
              onClick={() => removeItemFromCart(photo.id)}
            ></i>
            <img src={`${photo.url}`} alt="" />
            <h3>$ 6.00</h3>
        </div>
    )
}