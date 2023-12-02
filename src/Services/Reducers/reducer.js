const intialState = {
    cardData:[]
}

export default function cartItems(intialState,action) {
 switch(action.type){
    case ADD_TO_CART:
        return{
            ...state,
            cardData:action.data
        }
        break;
        default:
            return state

 }
}