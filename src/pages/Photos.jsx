import React, {useContext, useEffect} from "react";
import {cartContext} from "../CartContext"
import Image from "../components/Image";
export default function Photos() {
    
    const {photosData} = useContext(cartContext)

    

    let PhotosJsx
    if (photosData) {
        PhotosJsx = photosData.map(photo => {
            return <Image key={photo.id} photo={photo}/>
        })
    }
    

    return (
        <main>
            {photosData && PhotosJsx}
        </main>
    )
}