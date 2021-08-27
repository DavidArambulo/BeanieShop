import React from 'react';
import BotonRemove from '../BotonRemove/BotonRemove';

const ProductoCarrito = ({ producto, cant }) => {
    const subTotal = producto.precio * cant;

    return (
        <>
            <img className='producto-carrito-img' src={producto.img} alt='imagen'/>

            <ul className='producto-carrito-datos'>
                <li className='datos-nombre'><h3>{producto.nombre}</h3></li>
                <li className='datos-precio'>Precio: ${producto.precio}</li>
                <li className='datos-cant'>x{cant}</li>
                <li className='datos-subtotal'>Subtotal: ${subTotal}</li>
            </ul>

            <BotonRemove id={producto.id} />
        </>
    )
}

export default ProductoCarrito;