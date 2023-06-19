import React, { Fragment, useState } from 'react'
import Ratings from './Ratings'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import store from '../redux/store/store'
import { addToCart } from '../redux/state/cartSlice'


const ProductCard = ({ product }) => {
    const [click, setClick] = useState(false);
    let cart = useSelector((state) => (state.cart.Cart));
    return (
        <Fragment>
            <div className='relative'>
                <Link to={`/productdetails/${product._id}`}>
                    <div className="w-full bg-white rounded-lg shadow-md p-3 cursor-pointer">
                        <img
                            src={product.image.url}
                            alt=""
                            className="w-full h-[200px] object-contain"
                        />
                        <div className='flex flex-col gap-2 pt-2'>
                            <h5 className='text-sm text-blue-400'>{product.brand.title}</h5>
                            <h2 className="text-lg font-medium">{product.title}</h2>
                            {/* {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name} */}
                            <div className="flex">
                                <Ratings rating={product.totalrating} />
                            </div>
                            <div className="flex items-center text-black/[0.5]">
                                <p className="mr-2 text-lg font-semibold">
                                    &#2547;{product.price}
                                </p>

                                {/* {p.original_price && ( */}
                                <>
                                    <p className="text-base  font-medium line-through">
                                        &#2547;{product.originalPrice}
                                    </p>
                                    <p className="ml-auto text-base font-medium text-green-500">
                                        {/* {getDiscountedPricePercentage(
                                        p.original_price,
                                        p.price
                                    )} */}5
                                        % off
                                    </p>
                                </>
                                {/* )} */}
                            </div>
                        </div>
                    </div>
                </Link>
                <div className='z-10'>
                    {click ? (
                        <div className="p-2 bg-gray-200  rounded-full flex justify-center items-center cursor-pointer absolute right-2 top-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" id="mainIconPathAttribute" fill="#ff0000"></path> </svg>
                        </div>
                        // <AiFillHeart
                        //     size={22}
                        //     className="cursor-pointer absolute right-2 top-5"
                        //     onClick={() => removeFromWishlistHandler(data)}
                        //     color={click ? "red" : "#333"}
                        //     title="Remove from wishlist"
                        // />
                    ) : (
                        <div className="p-2 bg-gray-200 rounded-full flex justify-center items-center cursor-pointer absolute right-2 top-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" /> </svg>
                        </div>
                        // <AiOutlineHeart
                        //     size={22}
                        //     className="cursor-pointer absolute right-2 top-5"
                        //     onClick={() => addToWishlistHandler(data)}
                        //     color={click ? "red" : "#333"}
                        //     title="Add to wishlist"
                        // />
                    )}
                    {/* <AiOutlineEye
                        size={22}
                        className="cursor-pointer absolute right-2 top-14"
                        onClick={() => setOpen(!open)}
                        color="#333"
                        title="Quick view"
                    /> */}
                    {
                        cart.some((p) => p._id === product._id) ?
                            <></>
                            :
                            <div onClick={() => store.dispatch(addToCart(product))} className="p-2 bg-gray-200 rounded-full flex justify-center items-center text-black cursor-pointer absolute right-2 top-16">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /> </svg>
                            </div>
                    }
                    {/* <AiOutlineShoppingCart
                        size={25}
                        className="cursor-pointer absolute right-2 top-24"
                        onClick={() => addToCartHandler(data._id)}
                        color="#444"
                        title="Add to cart"
                    /> */}
                    {/* {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null} */}
                </div>
            </div>
        </Fragment>
    )
}

export default ProductCard