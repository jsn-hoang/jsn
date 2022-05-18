import './styles/Intro.css';
import Spline from '@splinetool/react-spline';

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
                <Spline scene="https://prod.spline.design/13tgrogdzr14GaVd/scene.splinecode" />
            </div>
        </div>
    );
}

export default Intro;