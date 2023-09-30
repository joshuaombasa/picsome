import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../CartContext";

export default function Header() {

    const { cartItemsDataArray } = useContext(cartContext)

    const iconToDisplay = cartItemsDataArray.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"

    return (
        <header>
            <h1 className="logo--title">
                <Link to="/">picSome</Link>
            </h1>
            <Link to="/cart">
                <i className={`${iconToDisplay} cart--icon`}></i>
                <span className="cart--count">{cartItemsDataArray.length > 0 && cartItemsDataArray.length}</span>
            </Link>
        </header>
    )
}