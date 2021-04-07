import React from 'react'
import Navbar from "./navbar"
import blob from "../assets/images/blob.svg"

function Intro() {
    return (
        <div>
            <div className="intro">
                <Navbar/>
                <div className="aboutMe">
                    <div className="about-container">
                        <div className="col1">
                            <h1 className="name">Hi there <span className="wavingHand">👋🏾</span><br/> My name is Zaid Tamilore.</h1>
                            <p className="aboutText">
                                I am a Software developer from Lagos, Nigeria who enjoys making fun, interactive things 
                                with code. I also specialize in creating software for clients ranging from individuals or small businesses
                                to large corporations.🚀⚡
                            </p>
                            <button class="custom-btn btn-12"><span>Click!</span><span>Here's my resume</span></button>
                        </div>
                        <div className="col2">
                            <img src={blob} alt="" className="blob"/>
                        </div>
                    </div>
                    <span class="page-header__scroll" aria-hidden="true"><span><span>S</span> <span>c</span> <span>r</span> <span>o</span> <span>l</span> <span>l</span></span></span>
                </div>
            </div>
        </div>
    )
}

export default Intro;
