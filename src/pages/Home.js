import React from "react";
import Title from "../components/Title";
import Projects from './projects/Projects';


const Home = () => {
  return (
    <>
    <div className='inner'>
        <Title 
         lineContent='Flawless web apps'
         lineContent2='is what I make'
       />
        <div>
        <p className='other'>
          Looking for someone to join your team? My name is &nbsp;<span style={{fontWeight: "bold"}}>Laure Claret</span>, I have a strong background in Marketing and now I am orientating my career in the field of the Front-end Developpement. I have a good knowledge in Javascript, HTML and CSS. I use essentially React to realise my projects.
          If you want to hire me right now contact me or to see some of my work&nbsp;<span style={{fontWeight: "bold"}}>SCROLL DOWN</span>.
        </p>
          <button className='black' onClick=''>Contact</button>
          <button >CV</button>
      </div>
    </div>
    <div className= 'projects'>
      <Projects />
    </div>
    </>
  );
};

export default Home;