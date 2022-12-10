import TheSun from "../TheSun";
import "./index.scss";
import AnimatedText from "../AnimatedText";
import { useEffect, useState } from 'react'


window.addEventListener('load',() =>{
    var element = document.getElementsByClassName("body");
    element.classList.remove('preload')
})

const Layout = () => {
    const letterClass = 'text-animate'
    const welcomeArray = ['W','e','l','c','o','m','e'];
    const toArray = ['t','o'];
    const appTitle = ['C','o','m','f','o','r','t'];

    return (
        <body className="preload">
            <div className="App">
                <TheSun>
                </TheSun>
                <div className="animated-text-holder">
                    <AnimatedText letterClass={letterClass} strArray={welcomeArray} idx={1}/>
                    <br/>
                    <AnimatedText letterClass={letterClass} strArray={toArray} idx={8}/>
                    <br/>
                    <span className="title"><AnimatedText letterClass={letterClass} strArray={appTitle} idx={10}/></span>
                </div>
            </div>
        </body>
    )
}

export default Layout;