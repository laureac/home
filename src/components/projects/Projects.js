import React, {useEffect} from 'react';
import './projects.scss';
import event from '../../assets/event.JPG';
import guitar from '../../assets/guitar.JPG';
import tracker from '../../assets/tracker.JPG';
import meditation from '../../assets/meditation.JPG';
import jap from '../../assets/jap.JPG';
import video from '../../assets/video.JPG';
import login from '../../assets/login.JPG';
import git from '../../assets/github.JPG';
import portfolio from '../../assets/portfolio.JPG';
import meme from '../../assets/meme.JPG';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects (){

    useEffect (()=>{
        AOS.init({duration: 1000});
      }, []);

    const projects = [{
        id: 'Video App',
        text: 'Key Learning : Youtube API, @material-UI and React Hooks.',
        img: video,
        link: 'https://laureac.github.io/video-app/',
        code: 'https://github.com/laureac/video-app'
    },
    {
        id: 'Learn Japanese App',
        text: 'Key Learning : Coding a design found on Dribbble. Link to the design : https://dribbble.com/shots/6678558-Japanese-Courses-Landing-Page. Note : screened shot the background and the icons, guess the rest (font, size, margin...)',
        img: jap,
        link: 'https://laureac.github.io/learn-japanese/',
        code: 'https://github.com/laureac/learn-japanese'
    },
    {
        id: 'Event Finder',
        text: 'Key Learning : Foursquare API fetch, render and style.',
        img: event,
        link: 'https://laureac.github.io/eventfinder/',
        code: 'https://github.com/laureac/eventfinder'
    },
    {
        id: 'Corona Tracker',
        text: 'Key Learning : API, Chart.js and React Hooks.',
        img: tracker,
        link: 'https://laureac.github.io/chart/',
        code: 'https://github.com/laureac/chart'
    },
    {
        id: '3D Guitar',
        text: 'Key Learning : Three.js, vanilla JavaScript and 3D objects.',
        img: guitar,
        link: 'https://laureac.github.io/3d-animation/',
        code: 'https://github.com/laureac/3d-animation'
    },
    {
        id: 'Registration form',
        text: 'Key Learning : Firebase for login authentification.',
        img: login,
        link: 'https://laureac.github.io/registration/',
        code: 'https://github.com/laureac/registration'
    },
    {
        id: 'Meditation App',
        text: 'My first app made with React. Key Learning : Howler.js and React Components.',
        img: meditation,
        link: 'https://laureac.github.io/meditation-app/',
        code: 'https://github.com/laureac/meditation-app'
    },{
        id: 'Meme-generator',
        text: 'My first React app using API. Key Learning : API fetch (imgflip API).',
        img: meme,
        link: 'https://laureac.github.io/meme-generator/',
        code: 'https://github.com/laureac/meme-generator'
    },
    {
        id: 'Portfolio',
        text: 'You are looking at it! Key Learning : React router and GSAP.',
        img: portfolio,
        link: '',
        code: 'https://github.com/laureac/portfolio'
    }]
    return (
        <div className='projects'>
            <div className='title' data-aos="fade-right">
                <h2>My projects.</h2>
            </div>
            <div className='grid' data-aos="fade-right">
                {projects.map((project)=>(
                    <div key={project.id} className='project' data-aos="zoom-in">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img className='image' src={project.img} alt={project.id}/>
                        </a>
                        <h3>{project.id}</h3>
                        <p>{project.text}</p>
                        <a title="link to code" href={project.code} target="_blank" rel="noopener noreferrer"><img className='git-icon' src={git} alt='github code'/></a>
                    </div>
                ))}
            </div>
            <div className='title' data-aos="fade-right">
                <h2>Interested? Let's talk.</h2>
                <a href="mailto:'laure.a.claret@gmail.com"><button>-> Laure.a.claret@gmail.com</button></a>
            </div>
        </div>
    );
}

export default Projects;