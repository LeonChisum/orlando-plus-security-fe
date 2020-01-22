import React from 'react'

//imported images
import BBB from '../images/BBB.png'
import FDAC from '../images/FDACS-title-seal.png'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-nav">
                <section>
                    <h4>Orlando Plus Security</h4>
                    <p>Strong. Friendly. Reliable.</p>
                </section>
                <section>
                    <h4>Explore</h4>
                    <a href='/'>Home</a>
                    <a href='/services'>Services</a>
                    <a href='/about'>About Us</a>
                </section>
                <section>
                    <div className='flex-vertical'>
                        <h5>Visit</h5>
                        <a href='#' target ='_blank'>
                            <span>Orlando Plus Security & Event Staffing</span><br/>
                            <span>7616 Southland Blvd, Ste 108</span><br/>
                            <span>Orlando, FL 32809</span><br/><br/>
                        </a>
                        <h5>Contact</h5>
                        <a href="#" target="_blank">info@Orlandoplussecurity.com</a>
                        <a href="#">(407)-801-5323</a>
                    </div>
                </section>
                <section>
                    <h5>Follow</h5>
                    <a href="#" target="_blank">Facebook</a>
                </section>
                <section>
                    <img src={BBB} alt='better business bureau' />
                    <img src={FDAC} alt='Department of Agriculture Seal' />
                </section>
                
            </div>
            <small className='footer-copyright'>&copy; 2020 Orlando Plus Security & Event Staffing, LLC. All Rights Reserved.</small>
        </div>
    )
}
