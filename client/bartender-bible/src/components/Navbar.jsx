import React from 'react'
import './Navbar.css'
import Logo from './assets/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <h1 className='navLogo'>Bartender Bible</h1>
                <div className="links">
                    <a href='#' className='link'>Home</a>
                    <a href="#" className='link'>Catergories</a>
                    <a href="#" className='link'>Favorites</a>
                </div>
            </nav>
        </div>
    )
}
