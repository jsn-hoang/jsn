import './styles/Intro.css';
import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

function Intro() {
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
                <Suspense fallback={<div className='loading'>Loading...</div>}>
                    <Spline scene="https://prod.spline.design/I862iW2kh6EPqPqY/scene.splinecode" />
                </Suspense>
            </div>
        </div>
    );
}

export default Intro;