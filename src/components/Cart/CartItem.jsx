import React from 'react';

function CartItem(props) {
    const {id, name, price, quantity} = props.good;
    const {
        deleteFromCart=Function.prototype, 
        deleteOrder=Function.prototype,
        addToCart=Function.prototype
    } =props;

    return (
        <li className="collection-item">
            {name}: 
            <i 
                className="material-icons quantity-btn tiny" 
                onClick={() => deleteOrder(props.good)}
            >
                remove_circle_outline
            </i>
            {quantity} 
            <i 
                className="material-icons quantity-btn tiny" 
                onClick={() => addToCart(props.good)}
            >
                add_circle_outline
            </i>
            x
            {price} = 
            {quantity * price}
            <i 
                className="material-icons secondary-content delete-order" 
                onClick={() => deleteFromCart(id)}
            >
                remove_shopping_cart
            </i>
        </li>
    )
}

export default CartItem;
