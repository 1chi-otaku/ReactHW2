import React from 'react'
import { NavLink } from 'react-router-dom'
function Navigation() {
    return (
        <>
        <nav>
            <ul className='menu'>
                <li><NavLink to="/AboutMe">About Me</NavLink></li>
                <li><NavLink to="/Book">My Favourite Book</NavLink></li>
                <li><NavLink to="/City">My City</NavLink></li>
            </ul>
        </nav>
        </>
    )
}

export default Navigation
