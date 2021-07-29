import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartDataProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const addCarrito = ( nuevoProducto, cant ) => {
        // Saco el producto del carrito
        let carritoFiltrado = carrito.filter(elemento => elemento.producto.id !== nuevoProducto.id);
        // Lo agrego con los nuevos valores
        let productoAAgregar = { 
            producto: nuevoProducto,
            cantidad: cant
        };
        setCarrito([...carritoFiltrado, productoAAgregar])
    }

    const removeProducto = ( idProducto ) => {
        let carritoFiltrado = carrito.filter( elemento => elemento.producto.id !== idProducto);
        
        setCarrito(carritoFiltrado);
    }

    const vaciarCarrito = () => setCarrito([]);

    return (
        <CartContext.Provider value={{ carrito, addCarrito, removeProducto, vaciarCarrito }}>
            { children }
        </CartContext.Provider>
    );
}
