import React, { createContext, useState } from "react";
import SHOP_DATA from '../shop';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const[products] = useState(SHOP_DATA);

    return (
        <ProductsContext.Provider value={{ products }}>
             {Array.isArray(children) ? (
                children.map((child, index) => (
                    <React.Fragment key={index}>{child}</React.Fragment>
                ))
            ) : (
                children
            )}
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;