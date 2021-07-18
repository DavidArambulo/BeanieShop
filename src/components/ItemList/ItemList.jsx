import React, { useState } from "react";
import Item from "../Item/Item";
import { productos } from "../../data/productos.json";
import Loader from "../Loader/Loader";

const ItemList = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const obtenerDatos = () => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => resolve(productos), 2000);
        });
    };
    obtenerDatos().then(respuesta => setListaProductos(respuesta));

    return (
        <>
        <h2 className='catalogo-titulo'>Catalogo de productos</h2>
            {
                listaProductos.length !== 0 ? (
                    <section className='catalogo'>
                        {listaProductos.map(producto => (
                            <Item {...producto} key={producto.id} />
                        ))}
                    </section>
                ) : (
                    <Loader />
                )
            }
        </>
    );
}

export default ItemList;