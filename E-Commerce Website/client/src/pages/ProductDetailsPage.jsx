import React, { Fragment, useEffect } from 'react'
import ProductCarousel from '../components/ProductCarousel'
import Ratings from '../components/Ratings'
import { ProductdetailsRequest } from '../api_request/productRequest'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import store from '../redux/store/store'
import { addToCart, removeFromCart } from '../redux/state/cartSlice'

const ProductDetailsPage = () => {
    let params = useParams()
    let productdetails = useSelector((state) => (state.product.ProductDetails));
    let cart = useSelector((state) => (state.cart.Cart));

  useEffect(()=>{
    (async () => {
      await ProductdetailsRequest(params.id);
    })();
  }, [])
    return (
        <Fragment>
            {
                productdetails &&
                <div className="w-full px-[2rem] md:px-[3rem] lg:px-[5rem] py-10 md:py-20">
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        {/* <ProductDetailsCarousel images={p.image.data} /> */}
                        <div className="text-white text-[20px] flex justify-center w-full max-w-[1360px] mx-auto sticky top-[65px]">
                            <img src={productdetails.image.url} width={500} height={500} alt="" srcset="" />
                        </div>
                    </div>
                    <div className="flex-[1] py-3">
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            {productdetails.title}
                        </div>
                        <div className="flex text-lg font-semibold mb-5">
                            <Ratings rating={productdetails.totalrating} />
                            <p className="text-xs pt-auto ms-2 font-medium text-gray-400">
                                (0 reviews)
                            </p>
                        </div>
                        <div className="text-xs mb-5 flex gap-4 items-center">
                            <span className='py-1 px-2 font-semibold bg-green-100 text-green-500 rounded-lg'>In Stock</span>
                            <span className='text-gray-400 font-medium text-sm'>{productdetails.sku}</span>
                        </div>
                        <div className="text-lg font-semibold mb-5">
                            {productdetails.brand.title}
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : &#8377;{productdetails.price}
                            </p>
                            {/* {p.original_price && ( */}
                            <>
                                <p className="text-base text-gray-400 font-medium line-through">
                                    &#8377;{productdetails.originalPrice}
                                </p>
                                <p className="ml-auto text-base font-medium text-green-500">
                                    {/* {getDiscountedPricePercentage(
                                            p.original_price,
                                            p.price
                                        )} */}12
                                    % off
                                </p>
                            </>
                            {/* )} */}
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        {
                            cart.some((p) => p._id === productdetails._id) ?
                            <button onClick={() => store.dispatch(removeFromCart(productdetails))} className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                            >
                                Remove from cart
                            </button>
                            :
                            <button onClick={() => store.dispatch(addToCart(productdetails))} className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                            >
                                Add to Cart
                            </button>
                        }

                        {/* WHISHLIST BUTTON START */}
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" /> </svg>
                        </button>
                        {/* WHISHLIST BUTTON END */}

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            {/* markdown */}
                            <div className=" text-md mb-5">
                            {productdetails.desc}
                                {/* <ReactMarkdown>{p.description}</ReactMarkdown> */}
                            </div>
                        </div>
                    </div>
                    {/* right column end */}
                </div>
                {/* <ProductCarousel /> */}
            </div>
            }
        </Fragment>
    )
}

export default ProductDetailsPage
