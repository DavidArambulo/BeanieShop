import React, { useContext } from "react";
import { CartContext } from "../../services/CartContext";

const CartWidget = () => {
    const { cantTotal } = useContext(CartContext);

    return(
        <div className='cart-widget'>
            <i className="fas fa-shopping-cart" role="button" />
            {cantTotal > 0 && <p className='cart-widget-bubble'>{cantTotal}</p>}
        </div>
    );
}

export default CartWidget;