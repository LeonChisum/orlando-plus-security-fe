import React from 'react'
import { Link } from 'react-router-dom'

// images and css
import logo from '../images/OPSLogo.png'
import '../App.css'

export default function Nav() {
    return (
        <div className='header'>
            <img src={logo} className='logo' />
            <nav>
                <ul className='nav-list'>
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
                </ul>
            </nav>
        </div>
    )
}
