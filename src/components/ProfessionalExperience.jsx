import * as React from 'react';
import ProfessionalExperienceItem from './ProfessionalExperienceItem';
import { Divider } from '@mui/joy';

export default function ProfessionalExperience(params) {

    return (
        <>
            <Divider />
            <section className='inner-section-container'>
                <h1>Professional Experience</h1>
                <ProfessionalExperienceItem />
            </section>
        </>
    )
};
