import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Newsletter from './Newsletter'

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <Outlet />
            <Newsletter />
            <Footer />
        </Fragment>
    )
}

export default Layout