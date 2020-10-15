import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './account.style.scss';

const AccountPage = () => (
    <div className='account'>
        <SignIn />
        <SignUp />
    </div>
);

export default AccountPage;