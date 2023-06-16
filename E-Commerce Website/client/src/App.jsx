import { Fragment } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Layout from './layout/Layout';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentPage from './pages/PaymentPage';
import SuccessPage from './pages/SuccessPage';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/' element={<Layout />}>
            <Route index exact element={<HomePage />} />
            <Route path='productdetails/:id' element={<ProductDetailsPage />} />
            <Route path='cart' element={<CartPage />} />
            <Route path='checkout' element={<CheckoutPage />} />
            <Route path='payment' element={<PaymentPage />} />
            <Route path='success' element={<SuccessPage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='contact' element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" reverseOrder={false}/>
    </Fragment>
  )
}

export default App
