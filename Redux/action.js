import {ADD_TO_CART} from './constant'
import { REMOVE_FROM_CART } from './constant'

export const addtocart=(item)=>{
return{
    type:ADD_TO_CART,
    data:item
}
}

export const removefromcart =(item)=>{
return{
    type:REMOVE_FROM_CART,
     data:item
}
}