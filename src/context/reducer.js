export const initialState = {
    basket:[],
    user:null
};

export const getBasktTotal = (basket) => 
    basket?.reduce((amount,item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {...state, user: action.payload}
        case 'ADD_TO_BASKET':
            return {...state, basket: [...state.basket, action.payload]};
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id = action.payload.id);
            if(index >= 0){
                newBasket.splice(index,1)
            }
            return {...state, basket: newBasket};
        default:
            return state;
    }
}

export default reducer;