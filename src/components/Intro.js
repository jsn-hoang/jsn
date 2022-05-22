import React, { useState } from "react";
import './styles/Intro.css';
import Spline from '@splinetool/react-spline';

function Intro() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };
    // function onLoad() {
    //     setTimeout(function() {
    //         const x = document.getElementById('intro-model');
    //         document.getElementById('intro-model').style.display = 'none';
    //         document.getElementById('intro-model').style.display = 'block';
    //         console.log('hi');
    //         console.log(x);
    //     }, 1000);
    //     document.getElementById('intro-model').style.display = 'block';
    // }

    return (
        <div className="intro">
            <div className='intro-text'>
                <h1 className="intro-greeting">
                    Hello!
                </h1>
                <p className='intro-sub-greeting'>
                    Welcome to my virtual home.
                </p>
            </div>
            <div className='intro-model'>
                <Spline onLoad={incrementCount} scene="https://prod.spline.design/13tgrogdzr14GaVd/scene.splinecode" />
            </div>
        </div>
    );
}

export default Intro;