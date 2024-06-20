import {FaFacebookSquare,FaInstagram,FaInstagramSquare,FaLinkedin, FaLinkedinIn} from 'react-icons/fa'
import '../Css/Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'
function Navbar(){
     const [Hamburger,setHamburger]= useState(false)
     const Clickhamburger = () =>{
        setHamburger(!Hamburger)

     }
    return(
        <>
        <nav className="nav-main">
        <div className="logo">
            <h2>
                <span>A</span>kash
                <span>A</span>mir
            </h2>
        </div>
        <div className={Hamburger ? "menu-link mobile-menu-link" : "menu-link"}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#About">About</a>
                </li>
                <li>
                    <a href="#Project">Projects</a>
                </li>
                <li>
                    <a href="#Skill">Skills</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
        <div className="social-media">
            <ul>
                <li><a href="https://www.facebook.com/akash.amir.524?mibextid=ZbWKwL" target='blank'><FaFacebookSquare></FaFacebookSquare></a></li>
                <li><a href="https://www.instagram.com/akash_amir.01?igsh=a2V1eW4zcTQxbmkx" target='blank'><FaInstagram></FaInstagram></a></li>
                <li><a href="https://www.linkedin.com/in/akash-amir" target='blank'><FaLinkedinIn></FaLinkedinIn></a></li>
            </ul>
            <div className='Hamburger'>
                <a href='#' onClick={Clickhamburger}>
                    <GiHamburgerMenu></GiHamburgerMenu>
                </a>
            </div>

        </div>
        </nav>
        </>
    )
}

export default Navbar;