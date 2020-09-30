import React from 'react';

import './menu-item.style.scss';

const MenuItem = ({ title, imgUrl, size }) => (
    <div className='{size !== undefined ? size+" ":null} menu-item'>
        <div className='background-image' style={{
            backgroundImage: `url(${imgUrl})`
        }}></div>
        <div className='content'>
            <div className='title'>{title}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;