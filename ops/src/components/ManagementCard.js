import React from 'react'

export default function ManagementCard(props) {
    return (
        <div className='card-container'>
            <img src={props.manager.image} alt='management' />
            <section>
                <h1 className='management-name'>{props.manager.name}</h1>
                <h1>{props.manager.title}</h1>
            </section>
            <section>
                <p>{props.manager.bio}</p>
            </section>
        </div>
    )
}
