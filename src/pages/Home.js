import React, { useRef} from "react";
import Title from "../components/Title";
import img from '../assets/1.jpg';

const Home = () => {
  let myRef = useRef(null)
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const executeScroll = () => scrollToRef(myRef)
  
  return (
    <>
    <div className='inner home'>
        <Title 
         lineContent='YOGA & QUIGONG'
         lineContent2='Studio Breathes'
       />
      <div>
        <p className='other'>
          Y O G I  . T E A C H E R  .  N A M A S T E
        </p>
      </div>
    </div>
    <div>
      <div class="grid-container">
        <div class="bottom1"></div>
        <div class="bootom2">
          <h3>hatha yoga</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="bottom3"></div>
        <div class="side">
          <h2>Next 5 weeks Meditation Course</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3>see more</h3>
        </div>
        <div class="main"></div>
      </div>
    </div>
    </>
  );
};

export default Home;