import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey = 'pk_test_gSTrC2wvSHQ6PgnPBHdszjTZ';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment successful!');
      })
      .catch(error => {
        console.log(error);
        alert('There was an issue, processing your payment!');
      });
  }

  return(
    <StripeCheckout
      label='Pay now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel='Payment'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;