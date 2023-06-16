import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name: 'product',
    initialState:{
        Product: [],
        ProductDetails: null
    },

    reducers:{
        setProduct:(state, action)=>{
            state.Product = action.payload
        },
        setProductDetails:(state, action)=>{
            state.ProductDetails = action.payload
        }
    }
})

export const {setProduct, setProductDetails} = productSlice.actions
export default productSlice.reducer