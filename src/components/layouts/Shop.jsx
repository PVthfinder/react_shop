import React, { useContext, useEffect } from 'react';
import {API_KEY, API_URL} from '../../config';

import {ShopContext} from '../../context.js';

import Preloader from '../Preloader';
import GoodsList from '../GoodsList';
import Cart from '../Cart';
import CartList from '../Cart/CartList';
import Alert from '../Cart/Alert';

function Shop() {
    // const [goods, setGoods] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [orders, setOrders] = useState([]);
    // const [isCartShow, setCartShow] = useState(false);
    // const [alert, setAlert] = useState('');

    const {isLoading, isCartShow, alert, setGoods} = useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY
            }
        })
        .then((response) => response.json())
        .then((data) => {setGoods(data.featured)});
        //eslint-disable-next-line
    }, []);

    // const changeQuantity = (goodObj, sign) => {
    //     let newGood = {};
    //     if (sign === '-') {
    //         newGood = {...goodObj, quantity: goodObj.quantity - 1}
    //     } else if (sign === '+') {
    //         newGood = {...goodObj, quantity: goodObj.quantity + 1}
    //     }
    //     return newGood;
    // }

    // const addToCart = (goodObj) => {
    //     const orderIndex = orders.findIndex(item => item.id === goodObj.id);

    //     if(orderIndex < 0) {
    //         const newGood = {...goodObj, quantity: 1};
    //         setOrders([...orders, newGood]);
    //         setAlert(goodObj.name);
    //     } else {
    //         const newOrders = orders.map((item) => {
    //             if (item.id === goodObj.id) {
    //                 return changeQuantity(item, '+');
    //             } else {
    //                 return item;
    //             }
    //         });
    //         setOrders(newOrders);
    //     }
    // }

    // const deleteFromCart = (id) => {
    //     const newOrders = orders.filter(item => item.id !== id);
    //     setOrders(newOrders);
    // }

    // const deleteOrder = (goodObj) => {
    //     const newGood = changeQuantity(goodObj, '-');
    //     if (newGood.quantity === 0) {
    //         deleteFromCart(goodObj.id);
    //         return;
    //     } else {
    //         const newOrders = orders.map((item) => {
    //             if (item.id === goodObj.id) {
    //                 const newGood = changeQuantity(item, '-');
    //                 return newGood;
    //             } else {
    //                 return item;
    //             }
    //         });
    //         setOrders(newOrders);
    //     }
    // }

    // const showCartHandler = () => {
    //     setCartShow(!isCartShow);
    // }

    // const closeAlert = () => {
    //     setAlert('');
    // }

    return (
        <main className="container content">
            <Cart/>
            {isLoading ? <Preloader /> : <GoodsList/>}
            {isCartShow && 
                <CartList />}
            {alert && <Alert />}
        </main>
    )
}

export default Shop;
