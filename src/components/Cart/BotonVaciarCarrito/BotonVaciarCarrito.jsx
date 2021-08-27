import React, { useContext } from 'react';
import { CartContext } from '../../../services/CartContext';

const BotonVaciarCarrito = () => {
    const { vaciarCarrito } = useContext(CartContext);

    return (
        <button className='btn-vaciar-carrito btn-secundario' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
    )
}

export default BotonVaciarCarrito;