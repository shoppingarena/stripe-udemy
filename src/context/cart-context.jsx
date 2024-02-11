import React, { createContext, useReducer} from 'react';
import cartReducer, { sumItems } from './cart-reducer';



export const CartContext = createContext();
// check if there is item in localStorage
const cartFromStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const initialState = { cartItems: cartFromStorage, ...sumItems(cartFromStorage) };

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addProduct = (product) => dispatch({ type: 'ADD_ITEM', payload: product});
    const increase = (product) => dispatch({type: 'INCREASE', payload: product});
    const decrease = (product) => dispatch({ type: 'DECREASE', payload: product});
    const remove = (product) => dispatch({ type: 'REMOVE', payload: product});
    const clearCart = () => dispatch({ type: 'CLEAR'});

    const contextValues = {
    ...state,
    addProduct,
    increase,
    decrease,
    remove,
    clearCart,
    };

return (
    <CartContext.Provider value={ contextValues }>
        {
            children
        }
    </CartContext.Provider>
);
}

export default CartContextProvider;