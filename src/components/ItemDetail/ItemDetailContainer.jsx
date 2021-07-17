import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { productos } from '../../data/productos.json'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [productoAMostrar, setProductoAMostrar] = useState();
    const { id: paramId } = useParams();

    const obtenerDatosProducto = () => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(productos.find(item => item.id.toString() === paramId))
            }, 2000);
        });
    };
    useEffect(
        () => {
            //setProductoAMostrar();
            obtenerDatosProducto().then(respuesta => setProductoAMostrar(respuesta));
        }, 
        // eslint-disable-next-line
        [paramId]
    );

    return <ItemDetail {...productoAMostrar} />;
}

export default ItemDetailContainer;
