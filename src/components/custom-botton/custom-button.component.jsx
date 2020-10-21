import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({ children, isGoogleSignIn, isLiteBtn, ...otherProps }) => (
    <button 
        className={`${isGoogleSignIn ? 'google-sign-in ' : ''}${isLiteBtn ? 'lite ' : ''}custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;