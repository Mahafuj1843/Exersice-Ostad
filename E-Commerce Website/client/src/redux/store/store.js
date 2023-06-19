import {configureStore} from "@reduxjs/toolkit";
import productReducer from '../state/productSlice'
import cartReducer from '../state/cartSlice'
import orderReducer from '../state/orderSlice'
export default configureStore({
    reducer:{
        product: productReducer,
        cart: cartReducer,
        order: orderReducer
    }
})