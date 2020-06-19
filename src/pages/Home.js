import React, { useRef} from "react";
import Title from "../components/Title";
import Projects from '../components/projects/Projects';

const Home = () => {
  let myRef = useRef(null)
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const executeScroll = () => scrollToRef(myRef)
  
  return (
    <>
    <div className='inner'>
        <Title 
         lineContent='Flawless web apps'
         lineContent2='is what I make'
       />
        <div>
        <p className='other'>
          Looking for a Front-End Dev to join your team? Hi I am &nbsp;<span style={{fontWeight: "bold"}}>Laure Claret</span>, 
          my main skills are Javascript, HTML and CSS. I work essentially with&nbsp;<span style={{fontWeight: "bold"}}>React</span> to realise my projects.
          If you want to hire me now give me a call or take a look around!&nbsp;<span onClick={executeScroll} style={{fontWeight: "bold", textDecoration: 'none', cursor: 'pointer'}}>SCROLL DOWN</span>.
        </p>
          <a href='/contact'><button className='black'>Contact</button></a>
          <a href='https://www.keepandshare.com/doc21/111861/laure-claret-cv-pdf-2-2-meg?da=y' target="_blank" rel="noopener noreferrer"><button >CV</button></a>
      </div>
    </div>
    <div className= 'projects' ref={myRef} >
      <Projects />
    </div>
    </>
  );
};

export default Home;