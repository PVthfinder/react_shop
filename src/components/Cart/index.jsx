import React, {useContext} from 'react';

import {ShopContext} from '../../context';

import './Cart.css'

function Cart() {
    const {orders = [], showCartHandler=Function.prototype} = useContext(ShopContext);

    const quantity = orders.length;

    return (
        <div className="cart blue white-text" onClick={showCartHandler}>
            <i className="material-icons small">shopping_basket</i>
            <span className="cart-quantity">{quantity ? quantity : null}</span>
        </div>
    )
}

export default Cart;
