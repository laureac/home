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
         lineContent='Laborum dolore'
         lineContent2='culpa do ut.'
       />
      <div>
        <p className='other'>
          Nulla ad consectetur ut nostrud elit sunt nulla commodo excepteur ex voluptate. Commodo ea pariatur proident excepteur Lorem.
        </p>
      </div>
    </div>
    </>
  );
};

export default Home;