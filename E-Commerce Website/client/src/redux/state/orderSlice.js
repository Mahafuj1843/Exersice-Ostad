import { createSlice } from "@reduxjs/toolkit";


export const orderSlice = createSlice({
    name: 'order',
    initialState:{
        MyOrders: null
    },

    reducers:{
        setMyOrders:(state, action)=>{
            state.MyOrders = action.payload
        }
    }
})

export const {setMyOrders} = orderSlice.actions
export default orderSlice.reducer