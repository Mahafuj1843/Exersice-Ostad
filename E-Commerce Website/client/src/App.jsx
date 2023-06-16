import { Fragment } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import PaymentPage from './pages/PaymentPage';
import SuccessPage from './pages/SuccessPage';
import { Toaster } from 'react-hot-toast';
import ProductListPage from './pages/ProductListPage';
import Newsletter from './layout/Newsletter';
import Footer from './layout/Footer';
import Header from './layout/Header';
import { ProtectedRoute } from './helper/protectedRoute';
import CheckoutPage from './pages/CheckoutPage';

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/signup' element={<SignUpPage />} />
          <Route exact path='/signin' element={<SignInPage />} />
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/product' element={<ProductListPage />} />
          <Route exact path='/productdetails/:id' element={<ProductDetailsPage />} />
          <Route exact path='/cart' element={<CartPage />} />
          <Route exact path='/checkout' element={<ProtectedRoute Component={CheckoutPage} />} />
          <Route exact path='/payment' element={<ProtectedRoute Component={PaymentPage} />} />
          <Route exact path='/success' element={<ProtectedRoute Component={SuccessPage} />} />
          <Route exact path='/about' element={<AboutPage />} />
          <Route exact path='/contact' element={<ContactPage />} />
        </Routes>
        <Newsletter />
        <Footer />
      </BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
    </Fragment>
  )
}

export default App
