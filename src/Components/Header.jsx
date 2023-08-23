import React from 'react'
import ParticlesBg from 'particles-bg'
import { motion } from 'framer-motion'
export default function Header() {
    return (
        <header id="home" >
            <ParticlesBg type="circle" bg={true} />
             <nav id="nav-wrap" >
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                    Show navigation
                </a>
                <a className="mobile-btn" href="#home" title="Hide navigation">
                    Hide navigation
                </a>
                <ul id="nav" className="nav" style={{listStyle:"none",flex:"1"}} >
                    <li className="current">
                        <a className="smoothscroll" href="#home">Home</a>
                    </li>
                    <li >
                        <a className="smoothscroll" href="#about">
                            About
                        </a>
                    </li>

                    <li>
                        <a className="smoothscroll" href="#education">
                            Education
                        </a>
                    </li>
                   
                    <li>
                        <a className="smoothscroll" href="#Interest">
                            Interests
                        </a>
                    </li>
                 <li>
                        <a className="smoothscroll" href="#Project">
                            Projects
                        </a>
                    </li> 
                    <li>
                        <a className="smoothscroll" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav> 
            <div className="row banner">
                <div className="banner-text" >
                    <motion.h1 
                    initial={{x:'-100vw'}}
    animate={{x:0}}
    transition={{duration:2,type:"spring"}}
                    className="responsive-headline">Krishna Patel</motion.h1>
                    <motion.h3  initial={{x:'100vw'}}
    animate={{x:0}}
    transition={{duration:3,type:"spring"}}>I am a FrontEnd || Full-Stack Developer </motion.h3>                   
                </div>
            </div>
             <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p> 
        </header>
    )
}
