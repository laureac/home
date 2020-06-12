import React from 'react';
import './projects.scss';
import event from '../../assets/event.JPG';
import guitar from '../../assets/guitar.JPG';
import tracker from '../../assets/tracker.JPG';
import meditation from '../../assets/meditation.JPG';
import jap from '../../assets/jap.JPG';
import git from '../../assets/github.JPG';

function Projects (){
    const projects = [{
        id: 'Learn Japanese App',
        text: 'Purpose: coding a design found on Dribbble. Find the link of the design here : https://dribbble.com/shots/6678558-Japanese-Courses-Landing-Page. For this, I screened shot the background and the icons, and intent to guess the rest (font, size, margin...)',
        img: jap,
        link: 'https://laureac.github.io/learn-japanese/',
        code: 'https://github.com/laureac/learn-japanese'
    },
    {
        id: 'Event Finder',
        text: 'The project was done using the Foursquare API. The key point was to fetch, extract infos, render and style it.',
        img: event,
        link: 'https://laureac.github.io/eventfinder/',
        code: 'https://github.com/laureac/eventfinder'
    },
    {
        id: 'Corona Tracker',
        text: 'whatever',
        img: tracker,
        link: 'https://laureac.github.io/chart/',
        code: 'https://github.com/laureac/chart'
    },
    {
        id: '3D Guitar',
        text: 'whatever',
        img: guitar,
        link: 'https://laureac.github.io/3d-animation/',
        code: 'https://github.com/laureac/3d-animation'
    },
    {
        id: 'Meditation App',
        text: 'whatever',
        img: meditation,
        link: 'https://laureac.github.io/meditation-app/',
        code: 'https://github.com/laureac/meditation-app'
    }]
    return (
        <div className='projects'>
            <h2>Projects.</h2>
            <div className='grid'>
                {projects.map((project)=>(
                    <div key={project.id} className='project'>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img className='image' src={project.img} alt={project.id}/>
                        </a>
                        <h3>{project.id}</h3>
                        <p>{project.text}</p>
                        <a title="link to code" href={project.code} target="_blank" rel="noopener noreferrer"><img className='git-icon' src={git} alt='github code'/></a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;