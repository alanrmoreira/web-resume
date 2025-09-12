import * as React from 'react';

export default function ProfessionalHeading(params) {
    const { name, length, logo } = params;

    let logoSrc = '';
    try {
        logoSrc = require(`../../assets/${logo}`);
    } catch {
        logoSrc = `${process.env.PUBLIC_URL}/assets/${logo}`;
    }

    return (
        <div className="professional-experience-heading">
            <img src={logoSrc} className="professional-experience-logo" alt="logo" />
            <p>
                <span className="professional-experience-company-name">{name}</span>
                <br />
                <small>{length}</small>
            </p>
        </div>
    );
}