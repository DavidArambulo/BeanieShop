import React, { useState } from 'react';

const ItemCount = ({ inicial, stock }) => {
    const [cant, setCant] = useState(inicial);

    const sumarCant = () =>{
        cant < stock ? setCant(cant + 1): setCant(cant);
    };
    const restarCant = () =>{
        cant > 0 ? setCant(cant - 1): setCant(cant);
    };

    return(
        <div className='contador'>
            <button className='contador-resta' onClick={restarCant}><i className="fas fa-minus"></i></button>
            <p className='contador-cant'>{cant}</p>
            <button className='contador-suma' onClick={sumarCant}><i className="fas fa-plus"></i></button>
        </div>
    );
}

export default ItemCount;