import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="herocontainer">
                    <h1>Hi!I'm Farid</h1>
                    <h2>Front-End Developer</h2>
                    <div className="discoverhome">
                        <h3>Recognize me </h3>
                        <Link  to="/About" className="link"><div><i className="fas fa-level-down-alt"></i></div></Link>
                    </div>
                </div>
                <div className="heroImg"></div>
                <img src="https://demo.themecon.net/onlyme/html/images/dot-texture.png" alt="Dots" />
            </div>
        )
    }
}

export default Home
