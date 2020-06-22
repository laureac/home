import React from "react";
import Title from "../components/Title";
import Skills from '../components/skills/Skills';

const About = () => {
  return (
    <>
    <div className='inner'>
        <Title 
        lineContent='Who I am and' 
        lineContent2='What I have done'/>
      <p className='other'>
        <span style={{fontWeight: 'bold'}}>Developer with a lot of positive energy! I switched from Business and Marketing career to Web Development. </span> 
        &nbsp;After a master2 from a Business school,
        I spent 5 years in digital marketing, worked in 3 different countries and found ❤ for coding.
        I am currently learning to code better web app with React and having fun with new tech. 
        I enjoy traveling to different exotic destinations, volunteering for my assos and run marathons. 
        <span style={{fontWeight: 'bold'}}>Scroll down to check out my skills.</span>
        <div>
        <a href='https://www.keepandshare.com/doc21/111861/laure-claret-cv-pdf-2-2-meg?da=y' target="_blank" rel="noopener noreferrer"><button>CV</button></a>
        </div>
      </p>
    </div>
    <Skills />
    </>
  );
};

export default About;