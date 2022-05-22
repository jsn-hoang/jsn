import React, { Suspense } from 'react';
import './styles/Intro.css';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

function Intro() {
    function onLoad() {
        setTimeout(function() {
            
            document.getElementById('intro-model').style.display = 'none';
            document.getElementById('intro-model').style.display = 'block';
            console.log('hi');
        }, 1000);
    }

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
            <div id='intro-model'>
                <Suspense>
                    <Spline onLoad={onLoad} scene="https://prod.spline.design/13tgrogdzr14GaVd/scene.splinecode" />
                </Suspense>
            </div>
        </div>
    );
}

export default Intro;