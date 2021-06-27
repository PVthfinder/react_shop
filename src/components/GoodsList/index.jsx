import React, {useContext} from 'react';

import {ShopContext} from '../../context';

import GoodsItem from './GoodsItem';

import './GoodsList.css';

function GoodsList() {
    const {goods = []} = useContext(ShopContext);

    return (
        <div className="goods">
            {goods.map(item => <GoodsItem key={item.id} good={item}/>)}
        </div>
    )
}

export default GoodsList;
