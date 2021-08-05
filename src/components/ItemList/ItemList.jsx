import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
import { useParams } from "react-router";
import { database } from "../../services/firebase";

const ItemList = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const { idCategoria } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);

    const obtenerDatos = () => {
        const productos = idCategoria !== undefined ? 
            database.collection("productos").where("categoria", "==", idCategoria) : 
            database.collection("productos");

        productos
            .get()
            .then( query => 
                setListaProductos(
                    query.docs.map( doc => (
                        { ...doc.data(), id: doc.id }
                    ))
                )
            )
            .then(() => setIsLoaded(true));
    };

    useEffect(
        () => {
            setIsLoaded(false);
            setListaProductos([]);
            obtenerDatos();
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