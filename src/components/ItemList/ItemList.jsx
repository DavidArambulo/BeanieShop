import React, { useState } from "react";
import Item from "../Item/Item";

const ItemList = () => {
    const [listaProductos, setListaProductos] = useState([])
    const productos = [
        {
            id: 0,
            categoria: 1,
            nombre: "Gorro de Invierno Negro",
            img:"./img/beanie-black.jpg",
            precio: 1499,
            stock: 10,
            cant: 0
        },
        {
            id: 1,
            categoria: 1,
            nombre: "Gorro de Invierno Verde",
            img:"./img/beanie-green.jpg",
            precio: 1199,
            stock: 23,
            cant: 0
        },
        {
            id: 2,
            categoria: 1,
            nombre: "Gorro de Invierno Gris",
            img:"./img/beanie-grey.jpg",
            precio: 1499,
            stock: 13,
            cant: 0
        },
        {
            id: 3,
            categoria: 1,
            nombre: "Gorro de Invierno Purpura",
            img:"./img/beanie-purple.jpg",
            precio: 999,
            stock: 13,
            cant: 0
        },
        {
            id: 4,
            categoria: 1,
            nombre: "Gorro de Invierno Rojo",
            img:"./img/beanie-red.jpg",
            precio: 1399,
            stock: 16,
            cant: 0
        }
    ]

    const obtenerDatos = () => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => resolve(productos), 2000);
        });
    };

    obtenerDatos().then(respuesta => setListaProductos(respuesta));

    return (
        <>
        <h2 className='catalogo-titulo'>Catalogo de productos</h2>
        <section className='catalogo'>
            {listaProductos.map(producto => (
                <Item {...producto} key={producto.id} />
            ))}
        </section>
        </>
    );
}

export default ItemList;