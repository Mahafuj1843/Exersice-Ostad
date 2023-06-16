import React, { Fragment, lazy } from 'react'
import { Link } from 'react-router-dom'
import emptyCartImg from '../assets/image/empty-cart.jpg'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

const CartPage = () => {
    let cart = useSelector((state) => (state.cart.Cart));
    return (
        <Fragment>
            <div className='w-full px-[2rem] md:px-[3rem] lg:px-[5rem] md:py-12'>
                {
                    cart.length>0 ?
                <div>
                    <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                            Shopping Cart
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 py-10">
                        <div className="flex-[2]">
                            <div className="hidden lg:flex text-sm font-bold py-4 ps-4 pe-8 bg-gray-200 rounded-sm">
                                <span className='flex-[4]'>Cart Items</span>
                                <span className='flex-[1] text-center'>Price</span>
                                <span className='flex-[2] text-center'>Qty</span>
                                <span className='flex-[1] text-center'>Subtotal</span>
                            </div>
                            {
                                cart.map((item, i) =>
                                    <CartItem key={i} item={item} />
                                )
                            }
                        </div>

                        <div className="flex-[1]">
                            <div className='flex flex-col sticky top-16'>
                                <div className="text-lg font-bold">Summary</div>
                                <div className="p-5 my-3 bg-black/[0.05] rounded-xl">
                                    <div className="flex justify-between">
                                        <div className="uppercase text-sm md:text-md font-medium text-gray-600">
                                            Subtotal
                                        </div>
                                        <div className="text-sm md:text-md font-semibold text-black">
                                            &#2547;{cart.map(x => x.price * x.qty).reduce((prev, curr) => prev + curr, 0)}
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
                                    <div className="flex items-center justify-between">
                                        <div className="uppercase text-sm md:text-md font-medium text-black">
                                            Total
                                        </div>
                                        <div className="text-lg md:text-2xl font-semibold text-black">
                                            &#2547;{cart.map(x => x.price * x.qty).reduce((prev, curr) => prev + curr, 0)}
                                        </div>
                                    </div>
                                    <div className="text-sm md:text-md py-5 border-t mt-5">
                                        The total price of
                                        your order, including duties and taxes,
                                        before any applicable discounts. It does
                                        not include delivery costs and
                                        international transaction fees.
                                    </div>
                                </div>
                                <div className="flex gap-2 my-5 justify-center">
                                    <input className='flex-[3] md:w-[250px] h-[50px] lg:h-[40px] px-3 border border-gray-400 outline-gray-400' type="text" placeholder="Enter coupon code" />
                                    <button className='flex-[1] px-3 md:px-8 py-2 bg-black text-white hover:opacity-75'>Apply</button>
                                </div>

                                <Link to="/checkout"
                                    className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                                // onClick={handlePayment}
                                >
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="flex flex-col items-center pb-10 ">
                    <img
                        src={emptyCartImg}
                        width={200}
                        height={200}
                        className="w-[200px] md:w-[300px]"
                    />
                    <span className="text-xl font-bold">
                        Your cart is empty
                    </span>
                    <span className="text-center mt-4">
                        Looks like you have not added anything in your cart.
                        <br />
                        Go ahead and explore top categories.
                    </span>
                    <Link
                        to="/product"
                        className="py-3 px-6 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                    >
                        Continue Shopping
                    </Link>
                </div>
                }
            </div>
        </Fragment>
    )
}

export default CartPage