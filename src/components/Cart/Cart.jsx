import React, { useContext } from 'react';
import { CartContext } from '../../services/CartContext';
import BotonVaciarCarrito from './BotonVaciarCarrito/BotonVaciarCarrito';
import ProductoCarrito from './ProductoCarrito/ProductoCarrito';

const Cart = () => {
    const { carrito, total } = useContext(CartContext);


    return (
        <section>
            <h2>Mi Carrito</h2>
            {carrito.length !== 0 ? (<>
                {carrito.map( (productoCart, i) => (
                    <li key={i}>
                        <ProductoCarrito producto={productoCart.producto} cant={productoCart.cantidad} />
                    </li>
                ))}
                <BotonVaciarCarrito />
                <h2>Total: ${total}</h2></>
            ) : (<h3>Carrito Vacio</h3>) }
        </section>
    )
}

export default Cart;
