import axios from "axios";
import store from "../redux/store/store";
import { ErrorToast } from "../helper/formHelper";
import { setCart } from "../redux/state/cartSlice";
import { getToken } from "../helper/sessionHelper";
const BaseURL = "https://shop-web.onrender.com/api"
const AxiosHeader = { headers: { "token": getToken() } }

export const CartItemsRequest = () => {
    let URL = BaseURL + "/cart";
    return axios.get(URL, AxiosHeader).then((res) => {
        if (res.status === 200) {
            store.dispatch(setCart(res.data))
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

export const ProductdetailsRequest = (productId) => {
    let URL = BaseURL + `/product/details/${productId}`;
    return axios.get(URL).then((res) => {
        if (res.status === 200) {
            store.dispatch(setProductDetails(res.data))
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