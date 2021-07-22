import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import { productos } from "../../data/productos.json";
import Loader from "../Loader/Loader";
import { useParams } from "react-router";

const ItemList = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const { idCategoria } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);

    const obtenerDatos = () => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if (idCategoria === undefined) {
                    resolve(productos);
                } else {
                    resolve(productos.filter(item => item.categoria.toString() === idCategoria));
                }
            }, 2000);
        });
    };

    useEffect(
        () => {
            setIsLoaded(false)
            setListaProductos([]);
            obtenerDatos()
                .then(respuesta => setListaProductos(respuesta))
                .then(() => setIsLoaded(true))
        }, 
        // eslint-disable-next-line
        [idCategoria]
    );

    return (
        <>
        <h2 className='catalogo-titulo'>Catalogo de productos</h2>
            {
                isLoaded ? (
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