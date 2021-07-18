import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import BotonComprar from '../BotonComprar/BotonComprar';

const ItemDetail = ({ img, nombre, precio, stock }) => {
    return (
        <form className='detalle-item'>
            <img src={'/' + img} alt={nombre} className="detalle-item-img" />
            <h3 className='detalle-item-nombre'>{nombre}</h3>
            <p className='detalle-item-precio'>${precio}</p>
            <div className='detalle-item-cant'><ItemCount inicial={0} stock={stock} /></div>
            <div className='detalle-item-btn-comprar'><BotonComprar /></div>
        </form>
    )
}

export default ItemDetail;
