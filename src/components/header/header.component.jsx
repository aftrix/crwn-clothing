import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.style.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='nav'>
            <Link className='nav-item' to='/shop'>Shop</Link>
            <Link className='nav-item' to='/shop'>Contact</Link>
            {
                currentUser ?
                <div className='nav-item' onClick={() => auth.signOut()}> Sign Out</div>
                :
                <Link className='nav-item' to='/signin'>
                    Sign In
                </Link>
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);