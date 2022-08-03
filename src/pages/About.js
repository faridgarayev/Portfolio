import React from 'react'

import Title from '../components/Title'
import WhoAmI from '../components/About/WhoAmI'
import Skills from '../components/About/Skills'

const About = () => {
    return (
        <div className="about pages">
            <div className="container">
                <Title titleh6="Get to know me" titleh1="About Me" />
                <WhoAmI />
                <div className="mySkills">
                    <Title titleh6="My level of knowledge in some tools" titleh1="My SKills" />
                    <Skills />
                </div>
            </div>
        </div>
    )
}

export default About
