import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar } from 'antd';


const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'Login',
        path: '/login'
    }
]

const Navigation = () =>{
    return(
        <nav className='site-navigation'>
            <span className='menu-title'>My Blogs</span>
            <div className='menu-content-container'>
                <ul>
                    {
                        navLinks.map((link, index) => (
                            <Link to={link.path} key={index}>
                                <li>{link.title}</li>
                            </Link> 
                        ))
                    }
                </ul>
                <span>
                    <Avatar src="https://joeschmoe.io/api/v1/random" size={38} />
                </span>
                
            </div>
            
        </nav>
    );
};

export default Navigation;