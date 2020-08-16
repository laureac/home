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
         lineContent='Whats crackin'
         lineContent2='you little ripper'
       />
      <div>
        <p className='other'>
        Lurk come a rock up maccas bazza joey swagger beauty. Mate sickie joey cleanskin offsider.
        </p>
      </div>
    </div>
    </>
  );
};

export default Home;