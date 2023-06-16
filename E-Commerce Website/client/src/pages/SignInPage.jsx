import React, { Suspense, lazy } from 'react'
import { Fragment } from 'react'
const SignIn = lazy(()=>import('../components/SignIn'))

const SignInPage = () => {
  return (
    <Fragment>
        <Suspense /*fallback={<LazyLoader />}*/>
        <SignIn />
      </Suspense>
    </Fragment>
  )
}

export default SignInPage