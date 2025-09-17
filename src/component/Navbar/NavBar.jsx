import React from 'react'
import { useState, useEffect } from "react";

import './Navbar.css'


function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`text-white ${scrolled ?  "ba-nav" :  "bg-transparent"}`}
>
            <div className=' container flex flex-col justify-between items-center mx-auto pt-3 pb-3 sm:flex-row'>
                <div className="logo">
                    <h1 className='text-3xl italic font-extrabold sm:text-5xl'>Task<span className='ms-3'>Flow</span></h1>
                </div>
                <ul className="links mt-1 flex flex-row justify-between gap-10 italic ul-links sm:flex-row sm:gap-10 ">
                    <li><a href="#home" className="">Home</a></li>
                    <li><a href="#features" className="">Features</a></li>
                    <li><a href="#Clinets" className="">Clinets</a></li>
                    <li><a href="#pricing" className="">Pricing</a></li>

                </ul>

            </div>

        </nav>
    )
}

export default NavBar
