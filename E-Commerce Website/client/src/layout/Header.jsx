import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <Fragment>
            <header className='w-full px-[2rem] md:px-[3rem] lg:px-[5rem] border-b'>
                <div className='flex items-center justify-between py-1'>
                    <ul className='flex gap-2 lg:gap-4'>
                        <li className='relative'>
                            <Link className='flex items-center gap-1 text-sm '>
                                English
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" aria-hidden="true" className="rotate-180 transform h-5 w-5 text-primary"><path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path></svg>
                            </Link>
                            <ul className='hidden bg-white absolute left-[-1em] leading-[2em] z-10 border border-gray-200 mt-1.5'>
                                <li className='active border-b'><a className='px-[1em] py-[0.25em]' href="#">English</a></li>
                                <li className='border-b'><a className='px-[1em] py-[0.25em]' href="#">Bangla</a></li>
                                <li className=''><a className='px-[1em] py-[0.25em]' href="#">Arabic</a></li>
                            </ul>
                        </li>
                        <li className='relative'>
                            <Link className='flex items-center gap-1 text-sm'>
                                USD
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" aria-hidden="true" className="rotate-180 transform h-5 w-5 text-primary"><path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path></svg>
                            </Link>
                            <ul className='hidden bg-white absolute left-[-1em] leading-[2em] z-10 border border-gray-200 mt-1.5'>
                                <li className=''><a href="#" className='px-[1em] py-[0.25em] '>BDT</a></li>
                                <li className='active'><a href="#" className='px-[1em] py-[0.25em]'>USD</a></li>
                                <li className=''><a href="#" className='px-[1em] py-[0.25em]'>EURO</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='flex items-center gap-3 '>
                        <li>
                            <Link to="/signin" className='text-sm'>
                                SignIn
                            </Link>
                        </li>
                        <li>
                            <Link to="/signup" className='text-sm'>
                                SignUp
                            </Link>
                        </li>
                        <li className='relative hidden'>
                            <Link className='flex items-center gap-1 text-sm'>
                                My Account
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" aria-hidden="true" className="rotate-180 transform h-5 w-5 text-primary"><path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path></svg>
                            </Link>
                            <ul className='hidden bg-white absolute left-[-1em] leading-[2em] z-10 border border-gray-200 mt-1.5'>
                                <li><a href="#" className='px-[1em] py-[0.25em] border-b'>Dashboard</a></li>
                                <li><a href="#" className='px-[1em] py-[0.25em]'>Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </header>
        <div className={` w-full px-[2rem] md:px-[3rem] lg:px-[5rem] border-b bg-white sticky top-0 z-50`}>
                <div className='flex justify-between items-center py-2'>
                    <Link>
                        <img class="w-12 lg:w-16 " src="https://i.ibb.co/YfSJPnY/1.png" />
                    </Link>
                    <nav className='hidden lg:block'>
                        <ul className='flex items-center gap-4 uppercase'>
                            <li><Link to='/'>Home</Link></li>
                            <li className='relative'>
                                <Link className='flex items-center gap-1'>
                                    Category
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" aria-hidden="true" className="rotate-180 transform h-5 w-5 text-primary"><path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path></svg>
                                </Link>
                                <ul className='hidden absolute left-[-1em] leading-[2em] z-10 border border-gray-200 mt-5'>
                                    <li className='active border-b hover:bg-gray-300'><a className='px-[1em] py-[0.25em]' href="#">Laptop</a></li>
                                    <li className='border-b hover:bg-gray-300'><a className='px-[1em] py-[0.25em]' href="#">Mobile</a></li>
                                    <li className='border-b hover:bg-gray-300'><a className='px-[1em] py-[0.25em]' href="#">Watch</a></li>
                                    <li className='hover:bg-gray-300'><a className='px-[1em] py-[0.25em]' href="#">Headphone</a></li>
                                </ul>
                            </li>
                            <li><Link>Product</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link>Contact</Link></li>
                        </ul>
                    </nav>
                    <div className='flex items-center gap-1'>
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" id="IconChangeColor" transform="scale(-1, 1)"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" id="mainIconPathAttribute"></path> </svg>
                        </div>
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" /> </svg>
                            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                51
                            </div>
                        </div>
                        <Link to="/cart">
                            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /> </svg>
                                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                    5
                                </div>
                            </div>
                        </Link>
                        <div onClick={()=> setShowMenu(!showMenu)} className="lg:hidden w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /> </svg>

                        </div>
                    </div>
                    <div className={`${showMenu ? 'top-0' : 'top-[100%]'} w-full h-[450px] overflow-y-auto p-10 rounded-b-3xl bg-white fixed left-0`}>
                        <div onClick={()=> setShowMenu(!showMenu)} className={`${showMenu ? 'block' : 'hidden'} fixed right-8 top-8 z-50 cursor-pointer`}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" id="mainIconPathAttribute"></path> </svg></div>
                        <ul id="menu" class="w-full text-black text-center space-y-10 font-bold uppercase">
                            <li className='flex justify-center'><Link to='/'>Home</Link></li>
                            <li className='relative flex justify-center'>
                                <Link className='flex items-center gap-1 text-black text-center font-bold uppercase'>
                                    Category
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" aria-hidden="true" className="rotate-180 transform h-5 w-5 text-primary"><path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </li>
                            <ul className='flex justify-center'>
                                <li className=''><Link>Laptop</Link></li>
                            </ul>
                            <li className='flex justify-center'><Link>Product</Link></li>
                            <li className='flex justify-center'><Link>About</Link></li>
                            <li className='flex justify-center'><Link>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header