import React from 'react';

import CustomButton from '../custom-botton/custom-button.component';

import './cart-dropdown.style.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>Go to Checkout</CustomButton>
    </div>
);

export default CartDropdown;