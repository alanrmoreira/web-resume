import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SimpleList from './SimpleList';
import { useState } from 'react'

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(0 | 0 | 0 | .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark' | {
        backgroundColor: 'rgba(255 | 255 | 255 | .05)',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0 | 0 | 0 | .125)',
}));

export default function SkillsAccordion() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{<strong>Hard Skills</strong>}</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <SimpleList title='Project Management' items={['Kanban','SCRUM','Lean','PMBOK','Six Sigma']} />
                    <SimpleList title='Development' items={['Java','NodeJS','Python','PHP','C/C++','JavaScript','HTML/CSS','SQL Server','PostgreSQL','MySQL','MongoDB','Power BI']} />
                </AccordionDetails>
            </Accordion>
            
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>{<strong>Soft Skills</strong>}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                    <SimpleList title='Personal Skills' items={['Leadership','Strategist', 'Decision-maker', 'Mentoring', 'Communication', 'Facilitation', 'Adaptability', 'Team Member', 'Creativity', 'Self-Management', 'Work ethic', 'Attention to detail', 'Problem-solving', 'Public speaking', 'Responsiveness', 'Empathy', 'Emotional and Cultural Intelligence', 'Growth mindset', 'Resilience', 'Curiosity', 'Willingness to learn', 'Innovative', 'Critical Thinking', 'Confidence', 'Self-Motivation', 'Helpfulness' ]} />
                        
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
