import React, {useState} from 'react'
import { Link } from 'react-router-dom'

// images and css
import logo from '../../images/OPSLogo.png'
import "../Nav/Nav.css"

export default function Nav() {
    const [menuHidden, setMenuHidden] = useState('closed')

    return (
        <div className='header'>
            <img src={logo} alt='OPS logo' className='logo' />
            <div className='nav-list'>
                {/* menuHidden toggles the hamburger nav menu when clicked */}
               <div className={`nav-btn ${menuHidden}`} onClick={() => setMenuHidden('open')}>
                        <div className='nav-btn-burger' />
                </div> 
                <div id="desktop-menu" className={`nav-menu ${menuHidden}`} onClick={() => setMenuHidden('closed')}>
                    <div className='x'>X</div>
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
        </div>
    )
}
