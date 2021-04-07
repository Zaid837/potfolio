import React, { useState } from 'react'

function Navbar() {
    const [open, isOpen] =  useState(false)
    return (
        <div>
            <nav>
                    <div className="container">
                        <h2 className="logo">OZ</h2>
                        <div className="nav2">
                            <ul className="navItems ">
                                <li>Projects</li>
                                <li>Contact Me</li>
                                <div className="hamburger" open={open} onClick={() => isOpen(!open)}>
                                    <div className="bar1"></div>
                                    <div className="bar2"></div>
                                    <div className="bar3"></div>
                                </div>
                            </ul>
                        </div>

                    </div>
                </nav>
        </div>
    )
}

export default Navbar
