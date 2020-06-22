import React from 'react';
import './skills.scss';
import Section from './section';
import codingIcon from '../../assets/coding.png';
import designIcon from '../../assets/design.png';


function Skills() {
const design = ['UI/UX','XD','Photoshop','Illustrator','Figma','After Effect','Spark',]
const coding = ['JavaScript', 'HTML', 'CSS', 'React', 'Sass', 'Front-End Libraries']

    return (
        <div>
            <div className='skills' style={{display: 'flex', flexDirection: 'column'}}>
                <div data-aos="zoom-in">
                <h2 style={{fontSize: '120px', color: '#ffe190'}}>My skills.</h2>
                </div>
                <div style={{display: 'flex'}}>
                <Section title='CODING' skills={coding} icon={codingIcon} /> 
                <Section title='DESIGN' skills={design} icon={designIcon}/> 
                </div>
            </div>
        </div>
    );
}

export default Skills;