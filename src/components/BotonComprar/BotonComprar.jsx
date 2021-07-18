import React from 'react';

const BotonComprar = () => {
    return <button className='btn-comprar' type='submit' onClick={event=>{

    event.preventDefault();
    console.log('compraste');
    }}>COMPRAR</button>;
}

export default BotonComprar;
