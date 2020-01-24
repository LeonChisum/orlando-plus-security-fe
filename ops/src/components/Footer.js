import React from 'react'

//imported images
import BBB from '../images/BBB.png'
import FDAC from '../images/FDACS-title-seal.png'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-nav">
                <section>
                    <h5>Orlando Plus Security</h5>
                    <p>Strong. Friendly. Reliable.</p>
                </section>
                <section>
                    <h5>Explore</h5>
                    <a href='/'>Home</a>
                    <a href='/services'>Services</a>
                    <a href='/about'>About Us</a>
                </section>
                <section>
                    <div className='flex-vertical'>
                        <h5>Visit</h5>
                        <a href='http://maps.google.com/?q=7616SouthlandBlvd,Ste108Orlando,FL32809'
                           target ='_blank'>
                            <span>Orlando Plus Security & Event Staffing</span><br/>
                            <span>7616 Southland Blvd, Ste 108</span><br/>
                            <span>Orlando, FL 32809</span><br/><br/>
                        </a>
                        <h5>Contact</h5>
                        <a href="mailto:info@Orlandoplussecurity.com" target="_blank">info@orlandoplussecurity.com</a>
                        <a href="tel:4078015323">(407)-801-5323</a>
                    </div>
                </section>
                <section>
                    <h5>Follow</h5>
                    <a href="https://www.facebook.com/OrlPlus/" target="_blank">Facebook</a>
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
