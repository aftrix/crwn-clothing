import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <div 
        className={'menu-item' + (typeof size !== 'undefined' ? ' '+size : '')}
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className='content'>
            <div className='title'>{title}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);