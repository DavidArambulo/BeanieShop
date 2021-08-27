import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../services/CartContext';
import BotonVaciarCarrito from './BotonVaciarCarrito/BotonVaciarCarrito';
import OrdenDeCompra from './OrdenDeCompra/OrdenDeCompra';
import ProductoCarrito from './ProductoCarrito/ProductoCarrito';

const Cart = () => {
    const { carrito, total, vaciarCarrito } = useContext(CartContext);


    return (
        <section className='mi-carrito'>

            <h2 className='mi-carrito-titulo'>Mi Carrito</h2>

            {/* MUESTRO EL CARRITO DE HABER PRODUCTOS */}
            {carrito.length !== 0 ? (<>

                <ul className='carrito'>
                    {carrito.map( (productoCart, i) => (

                        <li className='producto-carrito' key={i}>
                            <ProductoCarrito producto={productoCart.producto} cant={productoCart.cantidad} />
                        </li>

                    ))}
                </ul>

                <BotonVaciarCarrito />
                
                <div className='carrito-total'>
                    <p>Total: ${total}</p>
                    <OrdenDeCompra carrito={carrito} total={total} vaciarCarrito={vaciarCarrito} />
                </div>
                
                </>
            ) : (
                <div className='carrito-vacio'>
                    <h3 className='carrito-vacio-mensaje'>Tu carrito esta vacío, corrijamoslo:</h3>
                    <Link to='/' className='btn-primario carrito-vacio-btn'>Ir al catalogo</Link>
                </div>) }

        </section>
    )
}

export default Cart;