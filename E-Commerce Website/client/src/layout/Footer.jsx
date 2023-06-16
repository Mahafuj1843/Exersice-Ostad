import React from 'react'
import paymentImg from '../assets/image/payments.png'

const Footer = () => {
  return (
    <footer className="bg-white">
            <div class="w-full px-[2rem] md:px-[3rem] lg:px-[5rem] py-10 ">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between">
                    <div className='flex flex-col items-center lg:items-start'>
                        <img class="w-28" src="https://i.ibb.co/YfSJPnY/1.png" />

                        <p class="mt-3 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Incidunt consequuntur amet culpa cum itaque neque.
                        </p>
                    </div>
                    <div class="text-center lg:text-left">
                        <p class="text-lg font-medium text-gray-900">About Us</p>

                        <nav aria-label="Footer About Nav" class="mt-3">
                            <ul class="space-y-2 text-sm">
                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        Company History
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        Meet the Team
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        Employee Handbook
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div class="text-center lg:text-left">
                        <p class="text-lg font-medium text-gray-900">Helpful Links</p>

                        <nav aria-label="Footer Helpful Nav" class="mt-3">
                            <ul class="space-y-2 text-sm">
                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        Support
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        Terms & Conditions
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className='flex justify-center lg:justify-start'>
                                <a class="flex gap-1.5" href="/"
                                    >
                                        <span class="text-gray-700 transition group-hover:text-gray-700/75">
                                            Live Chat
                                        </span>

                                        <span class="relative flex h-2 w-2">
                                            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                                            <span class="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div class="text-center lg:text-left">
                        <p class="text-lg font-medium text-gray-900">Contact Us</p>

                        <ul class="space-y-2 text-sm mt-3">
                            <li>
                                <a
                                    class="flex items-center justify-center lg:justify-start gap-1.5"
                                    href="/"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 shrink-0 text-gray-900"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>

                                    <span class="text-gray-700">john@doe.com</span>
                                </a>
                            </li>

                            <li>
                                <a
                                    class="flex items-center justify-center lg:justify-start gap-1.5"
                                    href="/"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 shrink-0 text-gray-900"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>

                                    <span class="text-gray-700">0123456789</span>
                                </a>
                            </li>

                            <li class="flex justify-center lg:justify-start gap-1.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 shrink-0 text-gray-900"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>

                                <address class="not-italic text-gray-700">
                                    213 Lane, London, United Kingdom
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>          
            <div class=" mx-auto max-w-screen-xl px-4  py-6 sm:px-6 lg:px-8 lg:py-6 border-t">
                <div class="text-center  sm:justify-between sm:text-left ">
                    <div class="text-sm flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center text-gray-500 ">
                        <div >
                        <p class="mt-4 text-sm text-gray-500 sm:order-first  sm:mt-0" style={{margin: 0}}>
                                &copy; 2023 All rights reserved.
                            </p>
                            <div>Created By Mahafuj Chowdhury</div>
                            
                        </div>
                        <div className='flex gap-2'>
                            <img src={paymentImg} className='h-[20px]' alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer