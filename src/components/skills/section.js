import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section({skills, title, icon}) {
    useEffect (()=>{
        AOS.init({duration: 1000});
      }, []);
    return (
        <div className='section' >
            <img src={icon} alt='icon' style={{height: '300px', marginBottom: '20px'}} data-aos="zoom-in-left"/>
            <h2 data-aos="zoom-in-right">{title}</h2>
            <div>
            {skills.map(skill=>(
                <div style={{letterSpacing: '4px', lineHeight: '30px'}} data-aos="zoom-in-left">
                    <span style={{fontWeight: 'bold'}}>+</span>{skill}
                </div>))}
            </div>
        </div>
    );
};
