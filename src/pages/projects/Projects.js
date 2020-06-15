import React, {useEffect} from 'react';
import './projects.scss';
import event from '../../assets/event.JPG';
import guitar from '../../assets/guitar.JPG';
import tracker from '../../assets/tracker.JPG';
import meditation from '../../assets/meditation.JPG';
import jap from '../../assets/jap.JPG';
import git from '../../assets/github.JPG';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects (){

    useEffect (()=>{
        AOS.init({duration: 1000});
      }, []);

    const projects = [{
        id: 'Learn Japanese App',
        text: 'Coding a design found on Dribbble. Find the link of the design here : https://dribbble.com/shots/6678558-Japanese-Courses-Landing-Page. For this, I screened shot the background and the icons, and intent to guess the rest (font, size, margin...)',
        img: jap,
        link: 'https://laureac.github.io/learn-japanese/',
        code: 'https://github.com/laureac/learn-japanese'
    },
    {
        id: 'Event Finder',
        text: 'The project was done using the Foursquare API and React. The key point was to fetch, extract infos, render and style it.',
        img: event,
        link: 'https://laureac.github.io/eventfinder/',
        code: 'https://github.com/laureac/eventfinder'
    },
    {
        id: 'Corona Tracker',
        text: 'Made during the Corona lock down. Used API, Chart.js and React.',
        img: tracker,
        link: 'https://laureac.github.io/chart/',
        code: 'https://github.com/laureac/chart'
    },
    {
        id: '3D Guitar',
        text: 'Exemple of a simple use of Three.js, vanilla JavaScript and 3D objects.',
        img: guitar,
        link: 'https://laureac.github.io/3d-animation/',
        code: 'https://github.com/laureac/3d-animation'
    },
    {
        id: 'Meditation App',
        text: 'My first app made with React. The illustration is made by me on illustrator. And it allows me to learn how to manipulate Howler.js as well.',
        img: meditation,
        link: 'https://laureac.github.io/meditation-app/',
        code: 'https://github.com/laureac/meditation-app'
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