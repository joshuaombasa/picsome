import React, {createContext, useState, useEffect} from "react";

const cartContext = createContext()

function CartContextProvider(props) {

    const [photosData, setPhotosData] = useState()

    const [cartItemsDataArray, setcartItemsDataArray] = useState([])

    const [totalCostOfItemsInCart, setTotalCostOfItemsInCart] = useState(0)

    function addItemToCart(newItemObject) {
        setcartItemsDataArray(prevCartItemsDataArray => [...prevCartItemsDataArray, newItemObject])
    }

    useEffect(() => {
        setTotalCostOfItemsInCart(cartItemsDataArray.length * 6)
    }, [cartItemsDataArray])

    
    function removeItemFromCart(id) {
        setcartItemsDataArray(prevCartItemsDataArray => {
           return prevCartItemsDataArray.filter(item =>  item.id !== id)
        })
    }

    function toggleIsFavourite(id) {
        setPhotosData(prevPhotosData => {
            return prevPhotosData.map(photo => (
                photo.id === id ? {...photo, isFavorite: !photo.isFavorite} : photo
            ))
        })
    }

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data => setPhotosData(data))
    }, [])


    return (
        <cartContext.Provider 
        value={{
            photosData: photosData,
            toggleIsFavourite: toggleIsFavourite,
            addItemToCart: addItemToCart,
            cartItemsDataArray: cartItemsDataArray,
            totalCostOfItemsInCart: totalCostOfItemsInCart,
            removeItemFromCart: removeItemFromCart
            }}>

            {props.children}
        </cartContext.Provider>
    )
}

export {CartContextProvider, cartContext}