import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import BotonComprar from '../BotonComprar/BotonComprar';

const ItemDetail = ({ producto }) => {
    const [cant, setCant] = useState(1);
    const [isTerminarCompra, setIsTerminarCompra] = useState(false);

    const toggleIsTerminarCompra = (event) =>{
        event.preventDefault();
        setIsTerminarCompra(!isTerminarCompra)
    }

    const sumarCant = (event) =>{
        event.preventDefault();
        cant < producto.stock ? setCant(cant + 1): setCant(cant);
    };
    const restarCant = (event) =>{
        event.preventDefault();
        cant > 1 ? setCant(cant - 1): setCant(cant);
    };

    return (
        <form className={`detalle-item${isTerminarCompra ? " terminar" : "" }`}>

            <img src={producto.img} alt={producto.nombre} className="detalle-item-img" />
            <h3 className='detalle-item-nombre'>{producto.nombre} <span className='item-nombre-stock'>(Stock: {producto.stock})</span></h3>
            <p className='detalle-item-precio'>Precio: ${producto.precio}</p>

            <div className='detalle-item-contador'>
                <ItemCount sumar={sumarCant} restar={restarCant} cant={cant} inicial={1} stock={producto.stock}/>
            </div>

            <p className='detalle-item-total'>Total: ${producto.precio*cant}</p>

            <div className='detalle-item-btn-comprar'>
                <BotonComprar terminarCompra={toggleIsTerminarCompra} isTerminarCompra={isTerminarCompra} producto={producto} cant={cant} />
            </div>

        </form>
    )
}

export default ItemDetail;