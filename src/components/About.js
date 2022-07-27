import './styles/About.css';

function About() {
    return (
        <div className="about">
            <div className='about-text'>
                <div className='heading'>
                    <span className="about-heading">
                        a bit about me
                    </span>
                </div>
                <p className='about-body'>
                    I am a fourth-year Computing Science major at the <a href="https://www.ualberta.ca/about/index.html">University of Alberta</a>.
                    My interest in programming encompasses anything from machine learning and artificial intelligence to web and game development,
                    and I enjoy trying to learn new things. Some of my other hobbies include basketball, golf, video games, and chess.
                </p>
            </div>
            <div id='about-picture'>
                <img src="assets/chaosonic47.png" alt="Jason Hoang"></img>
            </div>
        </div>
    );
}

export default About;