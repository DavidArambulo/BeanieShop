import React, { useContext } from 'react';
import { CartContext } from '../../services/CartContext';

const Cart = () => {
    const { addCarrito, carrito, removeProducto, vaciarCarrito } = useContext(CartContext);
    const producto1 = {
        id: 1,
        nombre: "Producto 1"
    }
    const producto2 = {
        id: 2,
        nombre: "Producto 2"
    }


    return (
        <div>
            <button onClick={()=> addCarrito(producto1,1)}>agregar producto1</button>
            <br />
            <button onClick={()=> addCarrito(producto2,1)}>agregar producto2</button>
            <br />
            {carrito.length !== 0 ? (<>
                {carrito.map( (productoCart, i) => (
                    <div key={i}>
                        <h1>{productoCart.producto.nombre}</h1>
                        <button onClick={ () => removeProducto(productoCart.producto.id) }>Remove</button>
                    </div>
                ))}
                <button onClick={() => vaciarCarrito()}>vaciarCarrito</button></>
            ) : (<h3>Carrito Vacio</h3>) }
        </div>
    )
}

export default Cart;
