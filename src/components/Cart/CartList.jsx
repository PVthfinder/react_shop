import React, {useContext} from 'react';

import {ShopContext} from '../../context.js';

import CartItem from '../Cart/CartItem';

function CartList() {
    const {
        orders = [], 
        showCartHandler=Function.prototype,
    } = useContext(ShopContext);

    const totalPrice = orders.reduce((sum, item) => {
        return sum + item.price * item.quantity
    }, 0);

    return (
        <ul className="collection with-header cart-list">
            <li className="collection-item active">
                Cart<i className="material-icons secondary-content close-cart" onClick={showCartHandler}>close</i>
            </li>
            {
                orders.length ? 
                orders.map(item => 
                    <CartItem 
                        key={item.id} 
                        good={item}
                    />) :
                <li className="collection-item">Cart is empty</li>
            }
            <li className="collection-item">Total price: {totalPrice}</li>
        </ul>
    )
}

export default CartList;
