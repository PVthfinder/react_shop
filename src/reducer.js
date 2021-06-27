function reducer (state, action) {
    const {type, payload} = action;

    const changeQuantity = (goodObj, sign) => {
        let newGood = {};
        if (sign === '-') {
            newGood = {...goodObj, quantity: goodObj.quantity - 1}
        } else if (sign === '+') {
            newGood = {...goodObj, quantity: goodObj.quantity + 1}
        }
        return newGood;
    }

    const deleteFromCart = (id) => {
        return {
            ...state,
            orders: state.orders.filter(item => item.id !== id)
        };
    }

    switch(type) {
        case 'SET_GOODS' :
            return {
                ...state,
                goods: payload || [],
                isLoading: false
            }

        case 'ADD_TO_CART': {
            const orderIndex = state.orders.findIndex(item => item.id === payload.id);

            if(orderIndex < 0) {
                const newGood = {...payload, quantity: 1};
                return {
                    ...state,
                    orders: [...state.orders, newGood],
                    alert: payload.name
                };
            } else {
                const newOrders = state.orders.map((item) => {
                    if (item.id === payload.id) {
                        return changeQuantity(item, '+');
                    } else {
                        return item;
                    }
                });
                return {
                    ...state,
                    orders: newOrders
                };
            }
        }

        case 'DELETE_FROM_CART':
            return deleteFromCart(payload.id);

        case 'DELETE_ONE_GOOD': {
            const newGood = changeQuantity(payload, '-');

            if (newGood.quantity === 0) {
                return deleteFromCart(payload.id);
            } else {
                const newOrders = state.orders.map((item) => {
                    if (item.id === payload.id) {
                        const newGood = changeQuantity(item, '-');
                        return newGood;
                    } else {
                        return item;
                    }
                });
                return {
                    ...state,
                    orders: newOrders
                };
            };
            break;
        }

        case 'SHOW_CART_HANDLER':
            return {
                ...state,
                isCartShow: !state.isCartShow
            };

        case 'CLOSE_ALERT':
            return {
                ...state,
                alert: ''
            };

        default:
            return state;
    }
}

export default reducer;