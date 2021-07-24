import React from 'react';
import { Link } from 'react-router-dom';

const BotonComprar = ({ terminarCompra, isTerminarCompra }) => {
    return (
        <>
        {isTerminarCompra ? (
            <>
            <Link to='/cart'><button className='btn-primario'>TERMINAR COMPRA</button></Link>
            <button className='btn-secundario' type='button' onClick={terminarCompra}>MODIFICAR</button>
            </>
        ) : (
            <button className='btn-primario' type='button' onClick={terminarCompra}>COMPRAR</button>
        )}
        
        </>
    );
}

export default BotonComprar;
