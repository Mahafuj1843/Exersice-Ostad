import {configureStore} from "@reduxjs/toolkit";
import productReducer from '../state/productSlice'
import cartReducer from '../state/cartSlice'
export default configureStore({
    reducer:{
        product: productReducer,
        cart: cartReducer
    }
})