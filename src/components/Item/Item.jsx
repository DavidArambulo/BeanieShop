import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ img, nombre, precio, cant, stock, id }) => {
    return (
        <Link to={`/item/${id}`} className='producto'>
            <img src={img} alt={nombre} className='producto-img' />
            <div className='producto-datos'>
                <h3 className='datos-nombre'>{nombre}</h3>
                <p className='datos-precio'>${precio}</p>
            </div>
            
        </Link>
    )
}

export default Item;
