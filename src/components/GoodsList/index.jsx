import React from 'react';

import GoodsItem from './GoodsItem';

import './GoodsList.css';

function GoodsList(props) {
    const {goods = [], buy=Function.prototype} = props;

    return (
        <div className="goods">
            {goods.map(item => <GoodsItem key={item.id} good={item} buy={buy}/>)}
        </div>
    )
}

export default GoodsList;
