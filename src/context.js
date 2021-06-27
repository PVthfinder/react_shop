import { createContext, useReducer } from 'react';

import reducer from './reducer';

export const ShopContext = createContext();
const initialState = {
    goods: [],
    isLoading: true,
    orders: [],
    isCartShow: false,
    alert: ''
};

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data});
    }

    value.addToCart = (goodObj) => {
        dispatch({type: 'ADD_TO_CART', payload: goodObj});
    }

    value.deleteFromCart = (itemId) => {
        dispatch({type: 'DELETE_FROM_CART', payload: {id: itemId}});
    }

    value.deleteOneGood = (goodObj) => {
        dispatch({type: 'DELETE_ONE_GOOD', payload: goodObj});
    }

    value.showCartHandler = () => {
        dispatch({type: 'SHOW_CART_HANDLER'});
    }

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'});
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
}