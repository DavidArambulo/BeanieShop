import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../services/CartContext';

const BotonComprar = ({ terminarCompra, isTerminarCompra, producto, cant }) => {
    const { addCarrito } = useContext(CartContext)

    return (
        <>
        {isTerminarCompra ? (
            <>
            <Link to='/cart'><button className='btn-primario'>TERMINAR COMPRA</button></Link>

            <button className='btn-secundario' type='button' onClick={terminarCompra}>MODIFICAR</button>

            <Link to='/'><button className='btn-secundario'>Volver al catalogo</button></Link>
            </>
        ) : (
            <button className='btn-primario' type='button' onClick={event =>{

                terminarCompra(event)
                addCarrito(producto,cant)

            }}>COMPRAR</button>
        )}
        
        </>
    );
}

export default BotonComprar;