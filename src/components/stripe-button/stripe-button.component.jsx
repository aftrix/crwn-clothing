import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey = 'pk_test_gSTrC2wvSHQ6PgnPBHdszjTZ';

  const onToken = token => {
    console.log();
    alert('Payment Successful');
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