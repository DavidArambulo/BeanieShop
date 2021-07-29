import React, { useContext } from 'react';
import { CartContext } from '../../../services/CartContext';

const BotonRemove = ({ id }) => {
    const { removeProducto } = useContext(CartContext);
    return (
        <button type='button' onClick={event=>{
            event.preventDefault()
            removeProducto(id)
        }}><i className="far fa-trash-alt"></i></button>
    )
}

export default BotonRemove;
