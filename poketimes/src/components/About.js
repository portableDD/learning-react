import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna arcu, ultrices tincidunt bibendum vel, pulvinar ut dolor. Etiam sed auctor nibh, a posuere dui.</p>
        </div>
    )
}

export default Rainbow(About)