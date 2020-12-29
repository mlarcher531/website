import React from 'react'
import me from '../images/me.jpeg'


function About () {

    let content =(
        <div className='wrapper'>
            <div></div>
            <div className='box'>
                <img src={me} className='profile-pic'></img>
            </div>
            <div></div>
            <div className='box'> I am a full-stack software engineer and recent graduate from Flatiron School. In my spare time I enjoy golfing, video games, and exploring all of the good food and drinks Houston has to offer. I believe the keys to success are to never shy from an opportunity and to take pride in everything you do. I hope to use my skills and experience to be bring positive change to the world around me.  </div>
            <div></div>
        </div>

    )

    return content
}

export default About