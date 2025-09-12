import * as React from 'react';
import ProfessionalExperienceItem from './ProfessionalExperienceItem';
import { Divider } from '@mui/joy';

export default function ProfessionalExperience() {
    return (
        <>
            <Divider />
            <section className="inner-section-container" id="professional">
                <h1>Professional Experience</h1>
                <ProfessionalExperienceItem />
            </section>
        </>
    );
}