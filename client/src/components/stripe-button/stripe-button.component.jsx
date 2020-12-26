import React from "react";
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';
import { STRIPE_PUBLISHABLE_KEY } from "../../utils/keys.constant";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = STRIPE_PUBLISHABLE_KEY;
 
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment. Please make sure you use the provided test credit card.');

        })
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Test'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
