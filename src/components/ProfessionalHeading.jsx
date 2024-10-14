import * as React from 'react';

export default function ProfessionalHeading(params) {

    const { name, length, logo } = params;

    return (
        <>
            <div className='professional-experience-heading'>
                <img src={logo} className='professional-experience-logo' />
                <p>
                    <span className='professional-experience-company-name'>
                        {name}
                    </span>
                    <br />
                    <small>
                        | {length} |
                    </small>
                </p>
            </div>
        </>
    );
};
