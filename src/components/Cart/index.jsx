import React from 'react';

import './Cart.css'

function Cart(props) {
    const {quantity = 0, showCartHandler=Function.prototype} = props;

    return (
        <div className="cart blue white-text" onClick={showCartHandler}>
            <i className="material-icons small">shopping_basket</i>
            <span className="cart-quantity">{quantity ? quantity : null}</span>
        </div>
    )
}

export default Cart;
