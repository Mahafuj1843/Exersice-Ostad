import React, { Fragment } from 'react'
import IMG from '../assets/image/thumbnail.webp'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
    return (
        <Fragment>
            <div className="w-full px-[2rem] md:px-[3rem] lg:px-[5rem] py-10 md:py-14">
                <div className="flex flex-col-reverse lg:flex-row md:px-10 gap-[50px] lg:gap-[60px]">
                    <div className='flex-1'>
                        <div className="w-full bg-white rounded-lg shadow md:mt-0 xl:p-0 ">
                            <div className="p-6 space-y-3 md:space-y-4 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                    Shipping Address
                                </h1>
                                <div className="space-y-2 md:space-y-3">
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-semibold text-gray-900 ">Email</label>
                                        <input /*ref={(i) => email = i}*/ type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#0C7075] focus:border-[#0C7075] block w-full p-2.5 " required="" />
                                    </div>
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-semibold text-gray-900 ">Firstname</label>
                                        <input /*ref={(i) => email = i}*/ type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#0C7075] focus:border-[#0C7075] block w-full p-2.5 " required="" />
                                    </div>
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-semibold text-gray-900 ">Lastname</label>
                                        <input /*ref={(i) => email = i}*/ type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#0C7075] focus:border-[#0C7075] block w-full p-2.5 " required="" />
                                    </div>
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-semibold text-gray-900 ">Street Address</label>
                                        <input /*ref={(i) => email = i}*/ type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#0C7075] focus:border-[#0C7075] block w-full p-2.5 " required="" />
                                    </div>
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-semibold text-gray-900 ">City</label>
                                        <input /*ref={(i) => email = i}*/ type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#0C7075] focus:border-[#0C7075] block w-full p-2.5 " required="" />
                                    </div>
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-semibold text-gray-900 ">State/Province</label>
                                        <input /*ref={(i) => email = i}*/ type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#0C7075] focus:border-[#0C7075] block w-full p-2.5 " required="" />
                                    </div>
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-semibold text-gray-900 ">Zip/Postal Code</label>
                                        <input /*ref={(i) => email = i}*/ type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#0C7075] focus:border-[#0C7075] block w-full p-2.5 " required="" />
                                    </div>
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-semibold text-gray-900 ">Country</label>
                                        <input /*ref={(i) => email = i}*/ type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#0C7075] focus:border-[#0C7075] block w-full p-2.5 " required="" />
                                    </div>
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-semibold text-gray-900 ">Phone No</label>
                                        <input /*ref={(i) => email = i}*/ type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#0C7075] focus:border-[#0C7075] block w-full p-2.5 " required="" />
                                    </div>
                                    <div>
                                        <label for="note" className="block mb-2 text-sm font-semibold text-gray-900 ">Order Note (Optional)</label>
                                        <textarea name="note" id="" cols={10} rows={6} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#0C7075] focus:border-[#0C7075] block w-full p-2.5 " style={{ resize: 'none' }} placeholder='Note about your order e.g. special note for delivery.'></textarea>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="checkbox w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#13c6cf] " required="" />
                                        </div>
                                        <div className="ml-1 md:ml-3 text-sm">
                                            <label for="remember" className="text-xs md:text-sm text-gray-500 ">Create an account</label>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/checkout"
                                    className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                                // onClick={handlePayment}
                                >
                                    Place Order
                                    {/* {loading && <img src="/spinner.svg" />} */}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className="text-lg font-bold">Order Summary</div>
                        <div className="p-5 my-3 bg-black/[0.05] space-y-2 rounded-xl">
                            <div className="flex justify-between">
                                <div className="uppercase text-sm md:text-md font-medium text-gray-600">
                                    Subtotal
                                </div>
                                <div className="text-sm md:text-md font-semibold text-black">
                                    &#2547;5000{/*{subTotal} */}
                                </div>
                            </div>
                            <div className="flex justify-between gap-1">
                                <div className="uppercase text-sm md:text-md font-medium text-gray-600">
                                    Discount
                                </div>
                                <div className="text-sm md:text-md font-semibold text-black">
                                    -&#2547;0{/*{subTotal} */}
                                </div>
                            </div>
                            <div className="flex justify-between gap-1">
                                <div className="uppercase text-sm md:text-md font-medium text-gray-600">
                                    Shipping
                                </div>
                                <div className="text-sm md:text-md font-semibold text-black">
                                    &#2547;00.00
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="uppercase text-sm md:text-md font-medium text-black">
                                    Total
                                </div>
                                <div className="text-lg md:text-2xl font-semibold text-black">
                                    &#2547;5000{/*{subTotal} */}
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='w-full lg:flex-1 flex justify-start lg:justify-normal gap-2 border-b'>
                                <div className="shrink-0 aspect-square w-[50px] md:w-[80px] mb-2 lg:mb-0">
                                    <img
                                        src={IMG}
                                        // alt={p.name}
                                        width={70}
                                        height={70}
                                    />
                                </div>
                                <div className='flex flex-col gap-1 mb-2 lg:mb-0'>
                                    <div className="text-base md:text-md font-semibold text-black/[0.8]">
                                        Mackbook 14 pro
                                    </div>
                                    <div className="text-sm font-medium text-gray-500">
                                        &#2547; 180000
                                    </div>
                                    <div className="text-xs font-normal text-gray-500">
                                        x2
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:flex-1 flex justify-start lg:justify-normal gap-2 border-b'>
                                <div className="shrink-0 aspect-square w-[50px] md:w-[80px] mb-2 lg:mb-0">
                                    <img
                                        src={IMG}
                                        // alt={p.name}
                                        width={70}
                                        height={70}
                                    />
                                </div>
                                <div className='flex flex-col gap-1 mb-2 lg:mb-0'>
                                    <div className="text-base md:text-md font-semibold text-black/[0.8]">
                                        Mackbook 14 pro
                                    </div>
                                    <div className="text-sm font-medium text-gray-500">
                                        &#2547; 180000
                                    </div>
                                    <div className="text-xs font-normal text-gray-500">
                                        x2
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:flex-1 flex justify-start lg:justify-normal gap-2 border-b'>
                                <div className="shrink-0 aspect-square w-[50px] md:w-[80px] mb-2 lg:mb-0">
                                    <img
                                        src={IMG}
                                        // alt={p.name}
                                        width={70}
                                        height={70}
                                    />
                                </div>
                                <div className='flex flex-col gap-1 mb-2 lg:mb-0'>
                                    <div className="text-base md:text-md font-semibold text-black/[0.8]">
                                        Mackbook 14 pro
                                    </div>
                                    <div className="text-sm font-medium text-gray-500">
                                        &#2547; 180000
                                    </div>
                                    <div className="text-xs font-normal text-gray-500">
                                        x2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CheckoutPage