import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import BotonComprar from '../BotonComprar/BotonComprar';

const ItemDetail = ({ img, nombre, precio, stock }) => {
    return (
        <form>
            <img src={'/' + img} alt={nombre} />
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <div><ItemCount inicial={0} stock={stock} /></div>
            <div><BotonComprar /></div>
        </form>
    )
}

export default ItemDetail;
