import React, { Suspense } from 'react';
import './styles/Intro.css';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

function Intro() {
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
                <Suspense>
                    <Spline scene="https://prod.spline.design/13tgrogdzr14GaVd/scene.splinecode" />
                </Suspense>
            </div>
        </div>
    );
}

export default Intro;