import React from 'react';
import { Link } from 'react-router-dom';


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
            <span>My Blogs</span>
            <ul>
                {
                    navLinks.map((link, index) => (
                        <Link to={link.path} key={index}>
                            <li>{link.title}</li>
                        </Link>
                        
                    ))
                }

            </ul>
        </nav>
    );
};

export default Navigation;