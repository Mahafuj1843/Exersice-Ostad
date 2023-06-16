import axios from "axios";
import store from "../redux/store/store";
import { ErrorToast } from "../helper/formHelper";
import { setCart, setClientSecret } from "../redux/state/cartSlice";
import { getToken } from "../helper/sessionHelper";
const BaseURL = "http://localhost:8001/api"
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