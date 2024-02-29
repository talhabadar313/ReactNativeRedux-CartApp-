import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";
const initialState=[];

export const reducer=(state=initialState , action)=>{
  switch(action.type){
    case ADD_TO_CART:
        return[
         ...state,
         action.data
        ]
        case REMOVE_FROM_CART:
     let result = state.filter((item)=>{
        return item.id !=action.data.id
     })
     return [...result]

    default:
        return state  
  }
}

