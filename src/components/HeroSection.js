import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src='/vidoes/vidoe-2.mp4' autoPlay loop muted />
            <h1>Adventure</h1>
            <p>What are you waiting for </p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large' >
                    Get started
                </Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large' >
                    Watch Trailer <i className="far fa-play-circle"/>
                </Button>
            </div>

        </div>
    )
}

export default HeroSection
