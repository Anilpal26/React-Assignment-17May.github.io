import React from 'react';
import TypeOfSoftware from './TypeOfSoftware';


const ProjectIntroduction = () => {
    return (
        <div>
            <div className='introductionCard'>
            <h1>ProjectIntroduction</h1>
            <h3>What is a software in definition?</h3>
            <p>
                Image result for what is software ?
                Software is a set of instructions, data or programs used to operate computers and execute specific tasks. 
                It is the opposite of hardware, which describes the physical aspects of a computer. Software is a generic 
                term used to refer to applications, scripts and programs that run on a device.
            </p>
            </div>
            <TypeOfSoftware />
        </div>
    )
}

export default ProjectIntroduction