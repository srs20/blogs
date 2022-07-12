import React,{useState,useRef,useEffect} from 'react';
import { Link } from 'react-router-dom';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


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

const Navigation = ({user}) =>{

    const[menuActive, setMenuActive] = useState(false);

    const navRef = useRef();

    useEffect(() =>{
        function handler(event){
            console.log(event);
            if(event.path[0].tagName !== 'I'){
                setMenuActive(false);
            }
        }
        window.addEventListener('click',handler)
        return () => window.removeEventListener('click',handler)
    },[])

    return(
        <nav className='site-navigation'>
            <span className='menu-title'>My Blogs</span>
            <div ref={navRef} className={`menu-content-container ${menuActive && 'active'}`}>
                <ul>
                    {
                        navLinks.map((link, index) => (
                            <Link to={link.path} key={index}>
                                <li>{link.title}</li>
                            </Link>
                        ))
                    }
                </ul>
                <span className='menu-avatar-container'>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} size={38} />
                    <span className='menu-avatar-name'>{`${user.firstName} ${user.lastName}`}</span>
                </span>
                
            </div>
            <i className='ionicons icon ion-ios-menu' onClick={() => setMenuActive(!menuActive)} />
        </nav>
    );
};

export default Navigation;