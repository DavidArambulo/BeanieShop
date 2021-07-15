import React, { useState } from "react";
import Item from "../Item/Item";

const ItemList = () => {
    const [listaProductos, setListaProductos] = useState([])
    const productos = [
        {
            id: 0,
            categoria: 1,
            nombre: "Producto 0",
            img:"",
            precio: 1000,
            stock: 10,
            cant: 0
        },
        {
            id: 1,
            categoria: 1,
            nombre: "Producto 1",
            img:"",
            precio: 1100,
            stock: 23,
            cant: 0
        },
        {
            id: 2,
            categoria: 1,
            nombre: "Producto 2",
            img:"",
            precio: 1200,
            stock: 13,
            cant: 0
        },
        {
            id: 3,
            categoria: 1,
            nombre: "Producto 3",
            img:"",
            precio: 1300,
            stock: 13,
            cant: 0
        },
        {
            id: 4,
            categoria: 1,
            nombre: "Producto 4",
            img:"",
            precio: 1400,
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
        <article>
            {listaProductos.map(producto => (
                <div>
                    <Item {...producto} key={producto.id} />
                </div>
            ))}
        </article>
    );
}

export default ItemList;