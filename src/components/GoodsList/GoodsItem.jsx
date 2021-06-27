import React, {useContext} from 'react';

import {ShopContext} from '../../context';

function GoodsItem(props) {
    const {name, description, price, full_background} = props.good;
    const {addToCart} = useContext(ShopContext);

    return (
        <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img 
                        className="activator" 
                        src={full_background} 
                        alt={name}
                    />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{name}</span>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <span style={{fontSize: '1.5rem'}}>{price}</span>
                    <button className="btn right" onClick={() => addToCart(props.good)}>Buy</button>
                </div>
            </div>
    )
}

export default GoodsItem;
