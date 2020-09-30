import React, { useRef} from "react";
import Title from "../components/Title";

const Home = () => {
  let myRef = useRef(null)
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const executeScroll = () => scrollToRef(myRef)
  
  return (
    <>
    <div className='inner home'>
        <Title 
         lineContent='TRIBAL & BOHEMIAN'
         lineContent2='Coastal Bohemian Chic'
       />
      <div>
        <p className='other'>
        Our passion is to design unique, fresh and timeless pieces, that add warmth, love and texture to your home. We offer a variety of small, medium and large size outdoor and indoor plants. Hopefully you can find something you fall in love!
        </p>
      </div>
    </div>
    </>
  );
};

export default Home;