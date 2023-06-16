import React, { Fragment } from 'react'

const SuccessPage = () => {
  return (
    <Fragment>
      <div className='w-full px-[2rem] md:px-[3rem] lg:px-[5rem] py-14 md:py-32'>
        <div className='w-full flex flex-col items-center justify-center gap-3'>
          <div className="text-xl font-bold text-gray-400">Thanks for your order</div>
          <div className="text-xs md:text-lg font-bold text-black">Your order has been placed successfully</div>
          <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto mt-6 mb-2">
            <path fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
          </svg>
          <span className="text-base font-medium text-green-500">
            Payment successful
          </span>
          <div className='text-sm md:text-base font-medium'>
            You are being redirected to the orders page. Please do not close the page.
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default SuccessPage
