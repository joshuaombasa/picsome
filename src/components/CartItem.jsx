import React, {useContext, useState} from "react";
import { cartContext } from "../CartContext";


export default function CartItem({photo}) {

   const {removeItemFromCart} = useContext(cartContext)

   const [isHovered, setIsHovered] = useState(false)
   const deleteClassName = isHovered ? "ri-delete-bin-7-fill" : "ri-delete-bin-6-line"

    return (
        <div className="cartItem--container">
            <i 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={deleteClassName}
              onClick={() => removeItemFromCart(photo.id)}
            ></i>
            <img src={`${photo.url}`} alt="" />
            <h3>$ 6.00</h3>
        </div>
    )
}