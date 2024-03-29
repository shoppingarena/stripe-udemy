const storeCartItems = (cartItems) => {
  const cart = cartItems.length > 0 ? cartItems : [];
  localStorage.setItem('cart', JSON.stringify(cart));
}

export const sumItems = cartItems => {
  storeCartItems(cartItems);
    return {
        itemCount: cartItems.reduce((total, prod ) => total + prod.quantity, 0),
        total: cartItems.reduce((total, prod) => total + (prod.price * prod.quantity), 0)
    }
}

const cartReducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            // check if item is in cart
            /* 
            In the  ADD_ITEM  case,
            we update the cartItems array immutably by creating a new array with the existing items
            and the new item.  
             */
            if (!state.cartItems.find((item) => item.id === action.payload.id)) {
              return {
                ...state,
                cartItems: [
                  ...state.cartItems,
                  { ...action.payload, quantity: 1 },
                ],
                ...sumItems([...state.cartItems, { ...action.payload, quantity: 1 }]),
              };
            }
            return {
              ...state,
              cartItems: [...state.cartItems],
              ...sumItems(state.cartItems),
            }
      
          case "INCREASE":
            /*
            Similarly, in the INCREASE case,
            we create a new array with the updated quantity for the specific item.
            By updating the state immutably,
            you ensure that the component re-renders correctly
            and the quantity is incremented properly when the "Add More" button is clicked.
            */
            const increaseIndex = state.cartItems.findIndex(
              (item) => item.id === action.payload.id
            );
            const updatedCartItems = [...state.cartItems];
            updatedCartItems[increaseIndex] = {
              ...updatedCartItems[increaseIndex],
              quantity: updatedCartItems[increaseIndex].quantity + 1,
            };
            return {
              ...state,
              cartItems: updatedCartItems,
              ...sumItems(updatedCartItems),
            }

            case 'DECREASE':
              const decreaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
              const updateDecreaseCartItems = [...state.cartItems];
              updateDecreaseCartItems[decreaseIndex] = {
                ...updateDecreaseCartItems[decreaseIndex],
                quantity: updateDecreaseCartItems[decreaseIndex].quantity - 1,
              };
              return {
                ...state,
                cartItems: updateDecreaseCartItems,
                ...sumItems(updateDecreaseCartItems),
              }
          
          case 'REMOVE':
            const newCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                cartItems: [...newCartItems],
                ...sumItems(newCartItems),
            }

          case 'CLEAR':
            localStorage.removeItem('cart');
            return {
              cartItems: [],
              itemCount: 0,
              total: 0,
            }

          default:
            return state;
        }
      };
export default cartReducer;