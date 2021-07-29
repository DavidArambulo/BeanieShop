import React from 'react';
import BotonRemove from '../BotonRemove/BotonRemove';

const ProductoCarrito = ({ producto, cant }) => {
    const subTotal = producto.precio * cant;
    return (
        <>
            <img src={producto.img} alt='imagen'/>
            <ul>
                <li><h3>{producto.nombre}</h3></li>
                <li>{producto.precio}</li>
                <li>{cant}</li>
                <li>{subTotal}</li>
            </ul>
            <BotonRemove id={producto.id} />
        </>
    )
}

export default ProductoCarrito;
