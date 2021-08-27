import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';
import Loader from '../Loader/Loader';
import { database } from '../../services/firebase';

const ItemDetailContainer = () => {
    const [productoAMostrar, setProductoAMostrar] = useState();
    const { id: paramId } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    
    const obtenerDatosProducto = () => {
        const productos = database.collection("productos");

        productos
            .get()
            .then(query => query.docs.find(doc => doc.id === paramId))
            .then(doc => setProductoAMostrar({...doc.data(), id: doc.id}))
            .then(() => setIsLoaded(true));
    }
    
    useEffect(
        () => {
            setIsLoaded(false);
            setProductoAMostrar();
            obtenerDatosProducto();
        }, 
        // eslint-disable-next-line
        [paramId]
    );

    return (
        <>
            <h2 className='detalle-item-titulo'>Detalle de producto</h2>
            {isLoaded ? <ItemDetail producto={productoAMostrar} /> : <Loader />}
        </>
    );
}

export default ItemDetailContainer;