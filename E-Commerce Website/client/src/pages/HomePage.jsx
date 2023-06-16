import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import { Fragment } from 'react'
import ProductCard from '../components/ProductCard'
import ProductCarousel from '../components/ProductCarousel'
import { AllProductRequest } from '../api_request/productRequest'
import { useSelector } from 'react-redux'

const HomePage = () => {
  let product = useSelector((state) => (state.product.Product));
  useEffect(()=>{
    (async () => {
      await AllProductRequest();
    })();
  }, [])
  return (
    <Fragment>
      <Hero />
      <div className='px-[2rem] md:px-[3rem] lg:px-[5rem]'>
        <ProductCarousel product={product?.slice(0, 10)} text={"New Arrival"}/>
      </div>
      <div className='px-[2rem] md:px-[3rem] lg:px-[5rem]'>
        <ProductCarousel  product={product?.slice(10, product?.length)} text={"Feature Product"}/>
      </div>
    </Fragment>
  )
}

export default HomePage
