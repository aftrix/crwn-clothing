import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.style.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='nav'>
            <Link className='nav-item' to='/shop'>Shop</Link>
            <Link className='nav-item' to='/shop'>Contact</Link>
        </div>
    </div>
)

export default Header;