import * as React from 'react';
import SkillsAccordion from './SkillsAccordion';


export default function Summary(params) {
    return (
        <>

            <section className='inner-section-container' id='about'>
                <h1>Summary</h1>

                <p>As an experienced professional with vast expertise in the tech industry, I have worked as a Developer, Business Analyst, Project Manager and Tech Lead and possess a proven track record of success in those roles. With my strong technical background, adaptability to new technologies and scenarios and ability to translate business needs into software requirements, I am well-equipped to tackle any challenges that come my way. I am an experienced leader.</p>

                <SkillsAccordion />

            </section>

        </>
    )
};
