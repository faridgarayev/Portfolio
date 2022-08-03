import React from 'react'
import heroImg from '../../images/heroImg.jpeg'
import { socialLinks } from '../../data'

const WhoAmI = () => {
    return (
        <div className="whoami">
            <div className="titleFirst">
                <div className="titleImg">
                    <img src={heroImg} alt="Me" />
                </div>
            </div>

            <div className="titleSec">
                <div className="titleMe">
                    <h3><span>Who am i?</span></h3>
                    <h2>My name is Farid Garayev.I'm a Front End Developer.</h2>
                    <p>
                        I am studying at Baku Engineering University.
                        I can create a website as customer wish.
                        I describe myself as a passionate developer who loves coding, open source, and the web platform.
                        I use HTML, CSS, JavaScript and ReactJS to produce responsive websites and web apps that provide users
                        the best and most appropriate experience suited to their device and browser.
                    </p>
                </div>

                <div className="aboutMe">
                    <div className="row">
                        <div className="col-md-6">
                            <p>Name : <span>Farid Garayev</span></p>
                        </div>
                        <div className="col-md-6">
                            <p>Email : <span>farid.garayev.1@gmail.com</span></p>
                        </div>
                        <div className="col-md-6">
                            <p>Birth : <span>22.11.2000</span></p>
                        </div>
                        <div className="col-md-6">
                            <p>From : <span>Baku,Azerbaijan</span></p>
                        </div>
                    </div>
                </div>

                <div className="aboutSocial">
                    <div className="row">
                        <div className="col-md-6">
                            <button><a href='https://www.linkedin.com/in/faridgarayev/' >Download CV <i className="far fa-check-circle"></i></a></button>
                        </div>
                        <div className="col-md-6">
                            <div className="socialIcons">
                                {socialLinks.map((link) => (
                                    <a key={link.id} rel="noreferrer" target="_blank" href={link.href}>
                                        <i className={`fab ${link.icon}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoAmI