import React from 'react';
import './sidebar.scss';

const  sidebar = (props) => {
    return (
        <ul className="sidebar">
            <li className="sidebar__item">Home</li>
            <li className="sidebar__item">About</li>
            <li className="sidebar__item">Service</li>
            <li className="sidebar__item">Product</li>
            <li className="sidebar__item">Career</li>
        </ul>
    );
}

export default sidebar;