// Reducers start with an initial state, which is the state 
// of your application before any actions are dispatched.

const initialState = {
    cardData:[]
}


// The reducer function takes two parameters: state and action. 
// The state represents the current state of your application, 
//and the action is the dispatched action.

export default function cartItems(state = initialState,action) {
 switch(action.type){
    case 'ADD_TO_CART':
        console.log('reducer',action)
        return{
            ...state,
            cardData:action.data
        }
        break;
        default:
            return state  // Return the unchanged state if no matching action type
 

 }
}