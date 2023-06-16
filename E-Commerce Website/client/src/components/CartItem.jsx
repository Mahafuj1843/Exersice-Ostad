import React from 'react'
import { Fragment } from 'react'
import IMG from '../assets/image/thumbnail.webp'

const CartItem = () => {
    return (
        <Fragment>
            <div className="flex flex-col lg:flex-row py-4 items-center border-b gap-6 lg:gap-0">
                <div className='w-full lg:flex-1 flex justify-start lg:justify-normal gap-3'>
                    <div className="shrink-0 aspect-square w-[50px] md:w-[80px] mb-2 lg:mb-0">
                        <img
                            src={IMG}
                            // alt={p.name}
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className='w-full flex flex-row justify-between lg:justify-normal lg:flex-col lg:gap-1'>
                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 justify-normal lg:justify-between">
                            <div className="text-base md:text-md font-semibold text-black/[0.8]">
                                Mackbook 14 pro
                            </div>
                            <div className="text-sm md:text-md font-medium text-black/[0.5] block lg:hidden">
                                MackBook
                            </div>
                        </div>
                        <div className="block lg:hidden px-1 cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /> </svg>
                        </div>
                        <div className="text-base font-medium text-gray-400 hidden lg:block">
                            MackBook
                        </div>
                    </div>
                </div>
                <div className='w-full lg:flex-1 flex items-center'>
                    <div className='flex-[1] text-center'>
                        <div className="text-sm font-semibold text-gray-500">
                            &#2547; 180000
                        </div>
                    </div>
                    <div className='flex-[2] text-center'>
                        <div className="flex items-center justify-center gap-1">
                            <button className='py-2 px-3 font-semibold bg-gray-200 rounded-full' /*onClick={() => lessOfThisProduct(product._id)}*/>
                                <svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6 12H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /> </svg>
                            </button>
                            <span className='text-sm px-2 py-2'>
                                {/* {cartProducts.filter(id => id === product._id).length} */}
                                5
                            </span>
                            <button className='py-2 px-3 font-semibold bg-gray-200 rounded-full' /*onClick={() => moreOfThisProduct(product._id)}*/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" /> </svg>
                            </button>
                        </div>
                    </div>
                    <div className='flex-[1] text-center'>
                        <div className="text-sm font-semibold text-gray-500">
                            &#2547; 180000
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block px-1 cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /> </svg>
                </div>

            </div >
        </Fragment >
    )
}

export default CartItem
