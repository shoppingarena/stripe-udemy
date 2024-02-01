import React, { createContext, useReducer} from 'react';
import cartReducer from './cart-reducer';
import { Children } from 'react';

export const CartContext = createContext();

const initialState = { cartItems: [], itemCount: 0, total: 0};

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

const contextValues = {
    ...state,
}

return (
    <CartContext.Provider value={{ contextValues }}>
        {
            Children
        }
    </CartContext.Provider>
);
}

export default CartContextProvider;