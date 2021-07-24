import React from 'react';

const ItemCount = ({ sumar, restar, cant, inicial, stock }) => {

    return(
        <div className='contador'>
            <button className='contador-resta fas fa-minus' onClick={restar} disabled={cant > inicial ? false : true}></button>
            <p className='contador-cant'>{cant}</p>
            <button className='contador-suma fas fa-plus' onClick={sumar} disabled={cant < stock ? false : true}></button>
        </div>
    );
}

export default ItemCount;