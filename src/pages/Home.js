import React from "react";
import Title from "../components/Title";
import Projects from './projects/Projects';


const Home = () => {
  return (
    <>
    <div className='inner'>
        <Title 
         lineContent='Making seamless websites'
         lineContent2='is what I do'
       />
        <div>
        <p className='other'>
          Does project report used question death, out more rhetoric unpleasing
          what compared both of sentinels.
        </p>
      </div>
    </div>
    <div className= 'projects'>
      <Projects />
    </div>
    </>
  );
};

export default Home;