import React from "react";
import Title from "../components/Title";
import contact from '../assets/shoot.png';

const Contact = () => {
  return (
    <>
    <div className='inner'>
        <Title 
        lineContent='Get in' 
        lineContent2='touch...' 
       />
      <p className='other'>
      I am open to new projects and to be a new member of a team.
      <h3>Phone : 0466 896 995</h3>
      <h3>Email : laure.a.claret@gmail.com</h3>
      <h3>Location : Brisbane</h3>
      </p>
    </div>
    <img src={contact} alt='shoot email' style={{position: 'absolute', zIndex:'-10', width:'300px', margin:'-450px -280px'}}/>
    </>
  );
};

export default Contact;