import CartActionTypes from "./cart.types";

const INTITAL_SATE = {
    hidden:true
}

const CartReducer = (state=INTITAL_SATE,action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
        return{
            ...state,
            hidden:!state.hidden
        }
        default:
            return state;
    }
}

export default CartReducer;