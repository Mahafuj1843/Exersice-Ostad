import React, { Fragment, useEffect, useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../components/CheckoutForm';
import { useSelector } from 'react-redux';
import '../assets/css/stripe.css'

const stripePromise = loadStripe("pk_test_51NIZ5YHXYshn0OkhX8bSzG5WsIizH8sSCZYnmidCwtPAQ58t9QWjHgWaSI4TSdcguhUrOTMRRtrtyr33lv4li66r001zFOIsFQ");


const PaymentPage = () => {
  let clientSecret = useSelector((state) => (state.cart.clientSecret));

  // const makeApiRequest = async () => {
  //   try {
  //     fetch("/create-payment-intent", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       // body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setClientSecret(data.clientSecret));
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   makeApiRequest()
  // }, [])

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <Fragment>
      <div className='Stripe w-full px-[2rem] md:px-[3rem] lg:px-[5rem] py-10 md:py-14'>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </Fragment>
  )
}

export default PaymentPage
