import axios from "axios";
import store from "../redux/store/store";
import { ErrorToast } from "../helper/formHelper";
import { setCart, setClientSecret } from "../redux/state/cartSlice";
import { getToken } from "../helper/sessionHelper";
import { setMyOrders } from "../redux/state/orderSlice";
const BaseURL = "https://shop-web.onrender.com/api"
const AxiosHeader = { headers: { "token": getToken() } }

export const PlaceOrder = (shipping, cartItems) => {
    let URL = BaseURL + "/order/create-payment-intent";
    let postBody = { shipping: shipping, cartItems: cartItems}
    return axios.post(URL, postBody, AxiosHeader).then((res) => {
        if (res.status === 200) {
            store.dispatch(setClientSecret(res.data.clientSecret))
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
            ErrorToast("Something Went Wrong")
            return false;
    })
}

export const updateOrderStatus = (payment_intent) => {
    let URL = BaseURL + "/order/confirm";
    let postBody = { payment_intent }
    return axios.put(URL, postBody, AxiosHeader).then((res) => {
        if (res.status === 200) {
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
            ErrorToast("Something Went Wrong")
            return false;
    })
}

export const myOrderRequest = (payment_intent) => {
    let URL = BaseURL + "/order";
    return axios.get(URL, AxiosHeader).then((res) => {
        if (res.status === 200) {
            store.dispatch(setMyOrders(res.data))
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
            ErrorToast("Something Went Wrong")
            return false;
    })
}