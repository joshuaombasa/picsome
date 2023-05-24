import React, { useState, useContext } from "react";
import { cartContext } from "../CartContext";

export default function Image({ photo }) {

    const {cartItemsDataArray, toggleIsFavourite, addItemToCart} = useContext(cartContext)

    const [isHovered, setIsHovered] = useState(false)

   

    const isImageInCart = cartItemsDataArray.some(item => item.id === photo.id)

    const ItemInCartClassName = isImageInCart ? "ri-shopping-cart-fill" : "ri-add-circle-line"
   

    // photo && console.log(photo)
    const heartClassName = photo.isFavorite ? "ri-heart-fill" : "ri-heart-line"

    return (
        <div
            className="image--container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >    {isHovered &&
            <i className={`${heartClassName}`} onClick={() => toggleIsFavourite(photo.id)}></i>
            }
            {isHovered &&
                <i
                    className={`${ItemInCartClassName}  cart--in--styling`}
                    onClick={() => addItemToCart(photo)}
                ></i>}

            <img src={`${photo.url}`} alt="" />
        </div>
    )
}

{/* <i class="ri-heart-fill"></i> */ }