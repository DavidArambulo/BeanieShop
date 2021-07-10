import React from "react";
import ItemList from "./ItemList";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {

    const greeting = "Hola, bienvenidxs a todxs!!"

    return(
        <>
            <ItemList greeting={greeting} />
            <ItemCount inicial={0} stock={25} />
        </>
    );
}

export default ItemListContainer;