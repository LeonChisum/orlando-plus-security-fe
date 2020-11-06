import React from 'react'
import { Link } from 'react-router-dom'

// images and css
import logo from '../../images/OPSLogo.png'
import "../Nav/Nav.css"

export default function Nav() {
    return (
        <div className='header'>
            <img src={logo} alt='OPS logo' className='logo' />
            <div className='nav-list'>
                <div className='nav-btn'>
                    <div className='nav-btn-burger' />
                </div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/services'>Services</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/securitydtraining'>Training</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
