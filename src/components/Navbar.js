import './styles/Navbar.css';
import { IconButton } from '@chakra-ui/button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar() {
    return (
        <div className="navbar">
            <a href="#top" className="navbar-name">
                Jason Hoang
            </a>
            <div className='navbar-icons'>
                <IconButton icon={<FaGithub />} m='1' size='lg' colorScheme='gray' onClick={() =>
                    window.open('https://github.com/jsn-hoang')}></IconButton>
                <IconButton icon={<FaLinkedin />} m='1' size='lg' colorScheme='linkedin' onClick={() =>
                    window.open('https://www.linkedin.com/in/jsn-hoang/')}></IconButton>
            </div>
        </div>
    );
}

export default Navbar;