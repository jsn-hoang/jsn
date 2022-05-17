import './styles/Navbar.css';
import { IconButton } from '@chakra-ui/button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar() {
    return (
        <div className="navbar">
            <span className="navbar-name">
                Jason Hoang
            </span>
            <div className='navbar-icons'>
                <IconButton icon={<FaGithub />} m='1' colorScheme='gray' onClick={() =>
                    window.open('https://github.com/jsn-hoang')}></IconButton>
                <IconButton icon={<FaLinkedin />} m='1' colorScheme='linkedin' onClick={() =>
                    window.open('https://www.linkedin.com/in/jsn-hoang/')}></IconButton>
            </div>
        </div>
    );
}

export default Navbar;