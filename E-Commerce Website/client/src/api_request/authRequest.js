import axios from "axios";
import store from "../redux/store/store";
import { ErrorToast, SuccessToast } from "../helper/formHelper";
import { setCart } from "../redux/state/cartSlice";
import { getToken, removeSessions, setToken, setUserDetails } from "../helper/sessionHelper";
const BaseURL = "https://shop-web.onrender.com/api"
const AxiosHeader = { headers: { "token": getToken() } }

export const RegistrationRequest = (firstname, lastname, email, password) => {
    let URL = BaseURL + "/auth/register";
    let PostBody = { firstname: firstname, lastname: lastname, email: email, password: password }
    return axios.post(URL, PostBody).then((res) => {
        if (res.status === 200) {
            SuccessToast("Registration Successfull.")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        if (err.response.data.status === 400) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const LoginRequest = (email, password) => {
    let URL = BaseURL + "/auth/login";
    let PostBody = { email: email, password: password }
    return axios.post(URL, PostBody).then((res) => {
        if (res.status === 200) {
            setToken(res.data.token)
            setUserDetails(res.data.data)
            SuccessToast("Login Successfull.")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        if (err.response.data.status === 400) {
            ErrorToast(err.response.data.message)
            return false;
        } else if (err.response.data.status === 404) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const Logout = async() =>{
    let URL = BaseURL + "/auth/logout";

    return await axios.get(URL).then((res) => {
        if (res.status === 200) {
            removeSessions()
            SuccessToast("Logout Successfull.")
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

export const ForgetPasswordRequest = (email) =>{
    store.dispatch(showLoader())
    let URL = BaseURL + "/auth/forgotPassword";
    let PostBody = { email: email }
    return axios.post(URL, PostBody).then((res) => {
        store.dispatch(hideLoader())
        if (res.status === 200) {
            SuccessToast(res.data)
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        store.dispatch(hideLoader())
        if (err.response.data.status === 404) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const ResetPasswordRequest = (password, resetToken) =>{
    store.dispatch(showLoader())
    let PostBody = { password: password }
    let URL = BaseURL + "/auth/resetPassword/"+resetToken;
    return axios.put(URL, PostBody).then((res) => {
        store.dispatch(hideLoader())
        if (res.status === 200) {
            SuccessToast(res.data)
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        store.dispatch(hideLoader())
        if (err.response.data.status === 401) {
            ErrorToast(err.response.data.message)
            return false;
        } else if (err.response.data.status === 404) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const ProfileDetailsRequest = () =>{
    store.dispatch(showLoader())
    let URL = BaseURL + "/auth/profile/details";
    return axios.get(URL, AxiosHeader).then((res) => {
        store.dispatch(hideLoader())
        if (res.status === 200) {
            store.dispatch(setProfile(res.data.data))
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        store.dispatch(hideLoader())
        if (err.response.data.status === 400) {
            ErrorToast(err.response.data.message)
            return false;
        } else if (err.response.data.status === 404) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const UpdateProfileRequest = async (fname,lname,photo) =>{
    store.dispatch(showLoader())
    let URL = BaseURL + "/auth/updateProfile";
    let PostBody = { firstname: fname, lastname: lname, photo: photo }
    return await axios.put(URL, PostBody, AxiosHeader).then((res) => {
        store.dispatch(hideLoader())
        if (res.status === 200) {
            SuccessToast("Profile Updated Successfull.")
            store.dispatch(setProfile(res.data.data))
            setUserDetails(res.data.data)
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        store.dispatch(hideLoader())
        if (err.response.data.status === 400) {
            ErrorToast(err.response.data.message)
            return false;
        } else if (err.response.data.status === 404) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const ChangePasswordRequest = (oldPass, newPass) =>{
    store.dispatch(showLoader())
    let URL = BaseURL + "/auth/change/password";
    let PostBody = { oldPassword: oldPass, newPassword: newPass }
    return axios.put(URL, PostBody, AxiosHeader).then((res) => {
        store.dispatch(hideLoader())
        if (res.status === 200) {
            SuccessToast(res.data)
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        store.dispatch(hideLoader())
        if (err.response.data.status === 400) {
            ErrorToast(err.response.data.message)
            return false;
        }else if (err.response.data.status === 401) {
            ErrorToast(err.response.data.message)
            return false;
        } else if (err.response.data.status === 403) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}