import { createSlice } from "@reduxjs/toolkit";
import { SuccessToast } from "../../helper/formHelper";


export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        Cart: [],
        clientSecret: ""
    },

    reducers:{
        setCart:(state, action)=>{
            state.Cart = action.payload
        },
        addToCart: (state, action)=>{
            var temp = state.Cart.find((item)=> item.productId === action.payload._id)
                if(temp) SuccessToast('Product already added to cart.')
                else{
                    state.Cart = [...state.Cart, { ...action.payload, qty: 1 }]
                    SuccessToast('Product added to cart.')
                }
        },
        removeFromCart: (state, action)=>{
            state.Cart = state.Cart.filter((c) => c._id !== action.payload._id),
            SuccessToast('Product remove from cart.')
        },
        incrementQty: (state, action) =>{
            let items = [...state.Cart];
            let index = items?.findIndex((p) => p.id === action.payload._id);
            if (type === "inc") {
                items[index].attributes.quantity += 1;
            } else if (type === "dec") {
                if (items[index].attributes.quantity === 1) return;
                items[index].attributes.quantity -= 1;
            }
            setCartItems(items);
        },
        setClientSecret:(state, action)=>{
            state.clientSecret = action.payload
        },
    }
})

export const {setCart, addToCart, removeFromCart, setClientSecret} = cartSlice.actions
export default cartSlice.reducer