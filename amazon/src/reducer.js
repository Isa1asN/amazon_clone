export const initialState = {
    cart : []
}
const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart : [...state.cart, action.item ],
            };

        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex((item) => item.id === action.item.id)
            const updatedCart = [...state.cart];
            updatedCart.splice(index, 1)
            return {
                ...state,
                cart : updatedCart,
            };
            
        default:
            return state;
    }
}

export default reducer;