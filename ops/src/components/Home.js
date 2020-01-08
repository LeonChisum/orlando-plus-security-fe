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
                <button onClick={quoteBtn}>Get a Quote</button>
            </div>
        </div>
    )
}
