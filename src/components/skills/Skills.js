import React from 'react';
import './skills.scss';
import Section from './section';
import codingIcon from '../../assets/coding.png';
import designIcon from '../../assets/design.png';


function Skills() {
const design = ['UI/UX','XD','Photoshop','Illustrator','Figma','After Effect','Spark',]
const coding = ['JavaScript', 'HTML', 'CSS', 'React']

    return (
        <div>
            <div className='skills'>
                <Section title='CODING' skills={coding} icon={codingIcon} /> 
                <Section title='DESIGN' skills={design} icon={designIcon}/> 
            </div>
        </div>
    );
}

export default Skills;