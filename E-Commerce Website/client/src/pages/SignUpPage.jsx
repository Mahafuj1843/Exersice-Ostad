import React, { Suspense, lazy } from 'react'
import { Fragment } from 'react'
const SignUp = lazy(()=>import('../components/SignUp'))

const SignUpPage = () => {
  return (
    <Fragment>
      <Suspense /*fallback={<LazyLoader />}*/>
        <SignUp />
      </Suspense>
    </Fragment>
  )
}

export default SignUpPage
