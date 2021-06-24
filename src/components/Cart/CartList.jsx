import React from 'react';

import CartItem from '../Cart/CartItem';

function CartList(props) {
    const {
        orders = [], 
        showCartHandler=Function.prototype,
        deleteFromCart=Function.prototype,
        addToCart=Function.prototype,
        deleteOrder=Function.prototype
    } = props;

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
                        deleteFromCart={deleteFromCart}
                        addToCart={addToCart}
                        deleteOrder={deleteOrder}
                    />) :
                <li className="collection-item">Cart is empty</li>
            }
            <li className="collection-item">Total price: {totalPrice}</li>
        </ul>
    )
}

export default CartList;
