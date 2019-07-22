import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header>
                <img className="logo" src="favicon.ico" alt="logo" />
                <nav className="navbar">
                    <li><a href = "#">HOME</a></li>
                    <li><a href = "#">PRODUCTS</a></li>
                    <li><a href = "#">SERVICS</a></li>
                    <li><a href = "#">ABOUT US</a></li>
                </nav>
                <a className="btn" href="#"><button>CONTACT</button></a>
            </header>
        )
    }
}

export default Header;