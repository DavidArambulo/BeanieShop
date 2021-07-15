import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ img, nombre, precio, cant, stock }) => {
    return (
        <article className='producto'>
            <img src={img} className='producto-img' />
            <div className="producto-datos">
                <h3 className='datos-nombre'>{nombre}</h3>
                <p className='datos-precio'>${precio}</p>
                <div className='datos-cant'><ItemCount inicial={cant} stock={stock} /></div>
            </div>
            
        </article>
    )
}

export default Item;
