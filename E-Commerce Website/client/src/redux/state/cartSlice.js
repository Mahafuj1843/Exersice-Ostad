import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        Cart: [],
        ProductDetails: null
    },

    reducers:{
        setCart:(state, action)=>{
            state.Cart = action.payload
        }
    }
})

export const {setCart} = cartSlice.actions
export default cartSlice.reducer