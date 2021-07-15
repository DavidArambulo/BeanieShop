import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ nombre, precio, cant, stock }) => {
    return (
        <article>
            <ul>
                <li><h3>{nombre}</h3></li>
                <li>{precio}</li>
            </ul>
            <ItemCount inicial={cant} stock={stock} />
        </article>
    )
}

export default Item;
