import React from 'react';

const BotonComprar = () => {
    return <button type='submit' onClick={event=>{

    event.preventDefault();
    console.log('compraste');
    }}>Comprar</button>;
}

export default BotonComprar;
