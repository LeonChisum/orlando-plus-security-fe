import React from 'react'

import doggy from "../images/puppy-construction.jpg"

export default function UnderConstruction() {
    return (
        <div className="team-background">
            <section className='sub-header'>
                <h4>WE'RE WORKING ON IT!</h4>
                <small>(COMING SOON)</small>
            </section>
            <section className='team-container'>
                <img src={doggy} alt='puppy-construction' className='puppy'></img>
            </section>
        </div>
    )
}
