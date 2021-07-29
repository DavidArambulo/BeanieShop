import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartDataProvider = ({ children }) => {
    // ESTADOS
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    // METODOS
    const addCarrito = ( nuevoProducto, cant ) => {
        // Saco el producto del carrito
        let carritoFiltrado = carrito.filter(elemento => elemento.producto.id !== nuevoProducto.id);
        // Lo agrego con los nuevos valores
        let productoAAgregar = {
            producto: nuevoProducto,
            cantidad: cant
        };
        setCarrito([...carritoFiltrado, productoAAgregar]);
    }

    const removeProducto = ( idProducto ) => {
        let carritoFiltrado = carrito.filter( elemento => elemento.producto.id !== idProducto);
        
        setCarrito(carritoFiltrado);
    }

    const vaciarCarrito = () => setCarrito([]);

    const calcularTotal = () =>{
        let auxTotal = 0
        carrito.forEach(elemento => {
            auxTotal += elemento.producto.precio * elemento.cantidad;
        });
        setTotal(auxTotal);
    }

    useEffect(
        () => {
        calcularTotal()
    },
    // eslint-disable-next-line
    [carrito, total])

    return (
        <CartContext.Provider value={{ carrito, total, addCarrito, removeProducto, vaciarCarrito }}>
            { children }
        </CartContext.Provider>
    );
}
