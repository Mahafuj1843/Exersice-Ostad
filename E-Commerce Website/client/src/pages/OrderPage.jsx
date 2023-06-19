import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { myOrderRequest } from '../api_request/orderRequest';

const OrderPage = () => {
    let myOrders = useSelector((state) => (state.order.MyOrders));
    console.log(myOrders)
    useEffect(() => {
        (async () => {
            await myOrderRequest();
        })();
    }, [])
    return (
        <Fragment>
            <div className='w-full px-[2rem] md:px-[3rem] lg:px-[5rem] py-14 md:py-18'>
                {
                    myOrders ?
                        <div className='space-y-3'>
                            <h3 className='text-xl font-semibold'>My Orders</h3>
                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                #No
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Subtotal
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Shipping Cost
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Total
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Payment Status
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Order Status
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Delivery Date
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            myOrders.map((order, i) =>
                                                <tr key={i} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {i}
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        {order.subTotal}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {order.shippingCost}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        ${order.total}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {order.payment}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {order.orderStatus}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {order.deliveryDate}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Details</a>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        <div className='w-full flex justify-center'>
                            <h3>No order done yet.</h3>
                        </div>
                }


            </div>
        </Fragment>
    )
}

export default OrderPage
