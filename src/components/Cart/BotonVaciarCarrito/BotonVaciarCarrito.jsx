import React, { useContext } from 'react';
import { CartContext } from '../../../services/CartContext';

const BotonVaciarCarrito = () => {
    const { vaciarCarrito } = useContext(CartContext);
    return (
        <button onClick={() => vaciarCarrito()}>vaciarCarrito</button>
    )
}

export default BotonVaciarCarrito;
