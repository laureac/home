import React from "react";
import Title from "../components/Title";

const About = () => {
  return (
    <>
    <div className='inner about'>
        <Title 
        lineContent='Sarah B. Lyn' 
        lineContent2='The founder'/>
      <p className='other'>
        Breathes Yoga is run by Sarah Lyn. She has studied with teachers around the world since 1975.
        After studying with the International Yoga Teachers' Association (I.Y.T.A.) Sarah received her Diploma in 1982.
        She has been devotedly teaching Hatha Yoga since that time (before Yoga was popular)!

        The classes at Breathes Yoga are centered on total body wellness.
      </p>
    </div>
    </>
  );
};

export default About;