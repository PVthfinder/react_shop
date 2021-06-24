import React from 'react';

function GoodsItem(props) {
    const {id, name, description, price, full_background} = props.good;
    const {good, buy} = props;

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
                    <button className="btn right" onClick={() => buy(good)}>Buy</button>
                </div>
            </div>
    )
}

export default GoodsItem;
