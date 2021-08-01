import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartDataProvider = ({ children }) => {
    // ESTADOS
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantTotal, setCantTotal] = useState(0);

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
        let auxTotal = 0;
        let auxCantTotal = 0;
        carrito.forEach(elemento => {
            auxTotal += elemento.producto.precio * elemento.cantidad;
            auxCantTotal += elemento.cantidad;
        });
        setTotal(auxTotal);
        setCantTotal(auxCantTotal);
    }

    useEffect(
        () => {
        calcularTotal()
    },
    // eslint-disable-next-line
    [carrito, total, cantTotal])

    return (
        <CartContext.Provider value={{ carrito, total, cantTotal, addCarrito, removeProducto, vaciarCarrito }}>
            { children }
        </CartContext.Provider>
    );
}
