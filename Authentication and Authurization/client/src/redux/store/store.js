import {configureStore} from "@reduxjs/toolkit";
import settingReducer from '../state/settingSlice'
import profileReducer from '../state/profileSlice'

export default configureStore({
    reducer:{
        settings: settingReducer,
        profile: profileReducer
    }
})