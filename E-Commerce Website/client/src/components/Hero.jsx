import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <Fragment>
            <div className='bg-[#222] text-[#ffff] w-full px-[2rem] md:px-[3rem] lg:px-[5rem]'>
                <div className='w-full py-16 lg:py-40'>
                    <div className='flex flex-col-reverse gap-6 lg:gap-0 lg:flex-row items-center justify-between'>
                        <div className='flex-1 items-center'>
                            <div className='space-y-5'> 
                                <span className='font-bold text-[2rem] md:text-[2.5rem] lg:text-[3rem]'>MackBook 14 Pro</span>
                                <p className='text-sm text-gray-400 m-0' style={{margin: 0}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tenetur, illo consequuntur, ducimus dolor beatae laborum aperiam dicta voluptas ipsam doloribus vero placeat necessitatibus, incidunt illum aspernatur ratione rerum maiores?</p>
                                <div className='flex items-center gap-2 pb-3'>
                                    <Link className='px-4 py-2 border border-white rounded-md' /*href={'/product/' + product._id} outline={1} white={1}*/>Read more</Link>
                                    <Link className='px-4 py-2 flex gap-2 items-center bg-white text-black rounded-md'/*white onClick={addFeaturedToCart}*/>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /> </svg>
                                        Add to cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 flex items-center lg:justify-end'>
                            <img className='max-w-full max-h-[180px] lg:max-h-[220px]' src="https://i.ibb.co/2YJj80z/img.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Hero