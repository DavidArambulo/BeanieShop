import React, { useState } from 'react';

const ItemCount = ({ inicial, stock }) => {
    const [cant, setCant] = useState(inicial)

    const sumarCant = (event) =>{
        event.preventDefault();
        cant < stock ? setCant(cant + 1): setCant(cant);
    };
    const restarCant = (event) =>{
        event.preventDefault();
        cant > 0 ? setCant(cant - 1): setCant(cant);
    };

    return(
        <div className='contador'>
            <button className='contador-resta fas fa-minus' onClick={restarCant}></button>
            <p className='contador-cant'>{cant}</p>
            <button className='contador-suma fas fa-plus' onClick={sumarCant}></button>
        </div>
    );
}

export default ItemCount;