import './styles/Projects.css';
import { IconButton } from '@chakra-ui/button';
import { Icon } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { DiAndroid, DiFirebase, DiJava, DiDart, DiHtml5, DiCss3, DiJavascript, DiReact } from 'react-icons/di';
import { RiFlutterFill } from 'react-icons/ri';

function Projects() {
    return (
        <div className="projects">
            <span className='projects-heading'>
                some of my software projects...
            </span>
            <div className='projects-grid'>
                <div className='grid-item grid-one'>
                    <div className='icon-buttons'>
                        <IconButton icon={<FaGithub />} m='1' variant='ghost' isRound='true' onClick={() =>
                                window.open('https://github.com/jsn-hoang/habit-tracker')}></IconButton>
                    </div>
                    <h3 className='grid-item-title'>Habit Tracker</h3>
                    <p>
                        An Android application that helps users build good habits and track their progress,
                        with additional features such as following, geolocation, history, etc.
                    </p>
                    <div className='icons'>
                        <Icon p='4' as={DiAndroid} w='16' h='16' />
                        <Icon p='4' as={DiJava} w='16' h='16' />
                        <Icon p='4' as={DiFirebase} w='16' h='16' />
                    </div>
                </div>
                <div className='grid-item grid-two'>
                    <div className='icon-buttons'>
                        <IconButton icon={<FaGithub />} m='1' variant='ghost' isRound='true' onClick={() =>
                                window.open('https://github.com/jsn-hoang/todoapp')}></IconButton>
                    </div>
                    <h3 className='grid-item-title'>To Do App</h3>
                    <p>
                    A Flutter to-do app with smooth animations and a dark UI theme
                    that uses the shared_preferences package for persistent store of data.
                    </p>
                    <div className='icons'>
                        <Icon p='4' as={RiFlutterFill} w='16' h='16' />
                        <Icon p='4' as={DiDart} w='16' h='16' />
                    </div>
                </div>
                <div className='grid-item grid-three'>
                    <div className='icon-buttons'>
                        <IconButton icon={<FaGithub />} m='1' variant='ghost' isRound='true' onClick={() =>
                                window.open('https://github.com/jsn-hoang/jsn')}></IconButton>
                    </div>
                    <h3 className='grid-item-title'>jsn</h3>
                    <p>
                        My personal website (you're on it right now!) built with React,
                        leveraging Chakra UI and Spline.
                    </p>
                    <div className='icons'>
                        <Icon p='4' as={DiHtml5} w='16' h='16' />
                        <Icon p='4' as={DiCss3} w='16' h='16' />
                        <Icon p='4' as={DiJavascript} w='16' h='16' />
                        <Icon p='4' as={DiReact} w='16' h='16' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;