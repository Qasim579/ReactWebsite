import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button } from './Button'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }
    useEffect(()=>{
        showButton()
    },[])

    window.addEventListener('resize', showButton)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                        <li className="nav-items">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link className="nav-links" to='/services' onClick={closeMobileMenu}>Services
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link className="nav-links" to='/products' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link className="nav-links-mobile" to='/sign-up' onClick={closeMobileMenu}>Sign-up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn-outline'>SIGN-UP</Button>}

                </div>
            </nav>

        </>
    )
}

export default Navbar
