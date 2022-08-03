import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Navbar = (props) => {

    function NavToggleClass() {
        props.setClassList(!props.clasList);
    }

    return (
        <div className={`navbar ${props.clasList ? "navbar" : "navbarDisplay"}`} id="navbar">
            <section>
                <ul>
                    <li><Link exact="true" to="/" data-text="Home" className="links" onClick={NavToggleClass} >Home</Link></li>
                    <li><Link to="/About" data-text="About" className="links" onClick={NavToggleClass} >About</Link></li>
                    <li><Link to="/Projects" data-text="Projects" className="links" onClick={NavToggleClass} >Projects</Link></li>
                    <li><Link to="/Contact" data-text="Contact" className="links" onClick={NavToggleClass} >Contact</Link></li>
                </ul>
            </section>
        </div>
    )
}

const Header = () => {
    const [clasList, setclasList] = useState("false");
    const [navbar, setNavbar] = useState(false);


    function ToggleClass() {
        setclasList(!clasList);
    }

    const changeBackground = () => {
        if (window.scrollY >= 70) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <header className={navbar ? 'active' : ''}>
            <Navbar clasList={clasList} setClassList={setclasList} />

            <div className="logo">
                <Link exact="true" to="/" data-text="Home" className="links"><img src={logo} alt="Logo" /></Link>
            </div>

            <div className="burger" onClick={ToggleClass}>
                <i className={`fas fa-bars ${clasList ? "fa-bars" : "fa-times"}`}></i>
            </div>
        </header>
    )
}

export default Header







