import React from 'react'

//imported images
import BBB from '../images/BBB.png'

export default function Footer() {
    return (
        <div>
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
                <div>
                    <h5>Visit</h5>
                    <a href='#' target ='_blank'>
                        <span>Orlando Plus HQ</span>
                        <span>7616 Southland Blvd, Ste 108</span>
                        <span>Orlando, FL 32809</span>
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
            <img src={BBB} alt='better business bureau' />
            <small>&copy; 2020 Orlando Plus Security & Event Staffing, LLC. All Rights Reserved.</small>
        </div>
    )
}
