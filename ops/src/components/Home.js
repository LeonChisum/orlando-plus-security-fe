import React from 'react'

export default function Home() {
    const quoteBtn = (e) => {
        e.preventDefault();

    }

    return (
        <div className="home-bg">
            <div className="home-content">
                <h1>Our Business is Protecting Yours.</h1>
                <h2>Strong, friendly, reliable for all your security needs serving the greater Orlando area</h2>
                <button onClick={quoteBtn}>
                    <a 
                        href="mailto:info@Orlandoplussecurity.com" 
                        target="_blank">Get a Quote
                    </a>
                </button>
            </div>
        </div>
    )
}
