import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import Page404 from "./pages/Page404";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ChangePassPage from "./pages/ChangePassPage";
import ForgetPassPage from "./pages/ForgetPassPage";
import ResetPassPage from "./pages/ResetPassPage";
import FullscreenLoader from './components/MasterLayout/FullscreenLoader';
import { ProtectedRoute } from './helper/protectedRoute';

const App = () => {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
              <Route path="/Login" exact element={<LoginPage />} />
              <Route path="/Registration" exact element={<RegisterPage />} />
              <Route path="/ForgetPassword" exact element={<ForgetPassPage />} />
              <Route path="/ResetPassword/:token" exact element={<ResetPassPage />} />
              <Route exact path='/' element={<ProtectedRoute Component={DashboardPage} />} />
              <Route exact path="/Profile" element={ <ProtectedRoute Component={ProfilePage} />} />
              <Route exact path="/ChangePassword" element={<ProtectedRoute Component={ChangePassPage} />} />
              <Route path="*" element={<ProtectedRoute Component={Page404} />} />
          </Routes>
        </BrowserRouter>
        <FullscreenLoader/>
        <Toaster position="top-right" reverseOrder={false}/>
      </Fragment>
    )
  
}

export default App
