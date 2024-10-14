import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Divider } from '@mui/joy';
import ProfessionalHeading from './ProfessionalHeading';

export default function ProfessionalExperienceItem(params) {

    const [valueRethink, setValueRethink] = React.useState('1');
    const [valuePosiTec, setValuePosiTec] = React.useState('1');
    const [valueBrf, setValueBrf] = React.useState('1');
    const [valueEdPos, setValueEdPos] = React.useState('1');
    const [valueMicro, setValueMicro] = React.useState('1');

    const handleChangeRethink = (event, newValue) => {
        setValueRethink(newValue);
    };

    const handleChangePosiTec = (event, newValue) => {
        setValuePosiTec(newValue);
    };

    const handleChangeBrf = (event, newValue) => {
        setValueBrf(newValue);
    };

    const handleChangeEdPos = (event, newValue) => {
        setValueEdPos(newValue);
    };

    const handleChangeMicro = (event, newValue) => {
        setValueMicro(newValue);
    };


    return (
        <>

            <div id="xp-1">
                
                <ProfessionalHeading name='Rehtink Tecnologia' length='Mar 2023 - Current' logo='rethink-logo.jpg' />

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={valueRethink}>
                        <Box sx={{ borderBottom: 0.3, borderColor: 'divider' }}>
                            <TabList onChange={handleChangeRethink} aria-label="lab API tabs example">
                                <Tab label="Responsabilities" value="1" />
                                <Tab label="Achievements" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <p><strong>Esfera Santander Online Shopping</strong> - Present:</p>

                            <ul className='professional-experience-responsabilites-list'>
                                <li>Acting in technical leadership, manage the team's work routine, perform code reviews, merges and publications, and act as an intermediary layer between the team and the client, participating in and conducting refinement meetings that will define the backlog. Additionally, I act as a backend developer, performing adaptations to the ecosystem's microservices so they can receive requests/orders from new applications external to the Esfera app environment and reduce operational costs.</li>

                                <li>Responsible for the technical interviews of new developers, architects, testers and analysts during the hiring process.</li>

                                <li>I also worked as a backend developer to correct vulnerabilities highlighted by Snyk and Dynatrace in the Java backend of the Esfera Points Exchange and Cashback Store to improve security and reduce risks.</li>
                            </ul>

                            <p><strong>Ipriranga:</strong></p>
                            <ul className='professional-experience-responsabilites-list'>
                                <li>Redesign of the notifications service for migration from a C# monolith to a new Java microservices architecture and from legacy infrastructure to AWS Cloud to reduce costs through improved database performance and application.</li>
                            </ul>
                        </TabPanel>
                        <TabPanel value="2">
                            Achievements
                        </TabPanel>
                    </TabContext>
                </Box>


            </div>

            <Divider />

            <div id="xp-2">

                <ProfessionalHeading name='Positivo Tecnologia' length='Mar 2020 - Dec 2022' logo='postec-logo.jpg' />

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={valuePosiTec}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChangePosiTec} aria-label="lab API tabs example">
                                <Tab label="Responsabilities" value="1" />
                                <Tab label="Achievements" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <ul className='professional-experience-responsabilites-list'>
                                <li>Managed and led a highly skilled team of 12 members to achieve project goals, resulting in a 60% increase in productivity</li>
                                <li>Collaborated with product owners and stakeholders to define project requirements and documentation, prioritize work, and ensure timely delivery</li>
                                <li>Developed APIs and bots using Java, Spring Boot, and NodeJS and built frontend applications using React</li>
                                <li>Successfully led the migration of legacy applications to a new cloud-based environment on AWS, migrating old APIs from .NET 4.6 or lower versions to .NET Core, NodeJS, Spring Boot, and Python and migrating apps from Ionic to Flutter</li>
                                <li>Created and maintained performance dashboards using Power BI to monitor team progress and achievements</li>
                                <li>Mentored and coached team members to enhance their technical and soft skills, resulting in higher productivity and job satisfaction</li>
                                <li>Promoted a positive and collaborative team culture and continuously improved processes to enhance productivity andults.</li>
                            </ul>
                        </TabPanel>
                        <TabPanel value="2">
                            Achievements
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>

            <Divider />

            <div id="xp-3">

                <ProfessionalHeading name='BRF' length='Sep 2019 - Mar 2020' logo='brf-logo.jpg' />

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={valueBrf}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChangeBrf} aria-label="lab API tabs example">
                                <Tab label="Responsabilities" value="1" />
                                <Tab label="Achievements" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <ul className='professional-experience-responsabilites-list'>
                                <li>Initiated and managed global IT projects, ensuring accurate and up-to-date information throughout the project lifecycle using SAP, MS Office, and MS Project.</li>
                                <li>Guided project teams in preparing necessary documents based on guidelines and best practices to obtain executive committee approval.</li>
                                <li>Monitored total Capex consumption of the portfolio and prepared monthly reports for the board.</li>
                                <li>Elaborated on project portfolio planning.</li>
                                <li>Proposed and implemented improvements to project approval and management processes.</li>
                            </ul>
                        </TabPanel>
                        <TabPanel value="2">
                            Achievements
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>

            <Divider />

            <div id="xp-4">

                <ProfessionalHeading name='Positivo Soluções Didáticas' length='Feb 2015 - Aug 2019' logo='edpos-logo.jpg' />

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={valueEdPos}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChangeEdPos} aria-label="lab API tabs example">
                                <Tab label="Responsabilities" value="1" />
                                <Tab label="Achievements" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <ul className='professional-experience-responsabilites-list'>
                                <li>Developed APIs and websites using HTML, CSS, JS, PHP, Python 3, NodeJS, MSSQL Server, PostgreSQL, and MySQL for education system products.</li>
                                <li>Developed and maintained own-built business intelligence applications.</li>
                                <li>Led a team of 7 members.</li>
                                <li>Created and maintained dashboards in Power BI.</li>
                                <li>Modeled MSSQL, MySQL, and PostgreSQL databases.</li>
                                <li>Gathered business requirements for software and maintained the backlog up-to-date.</li>
                                <li>Implemented agile transformation using the SCRUM framework.</li>
                                <li>Supported CAPEX and OPEX cost planning projects.</li>
                                <li>Monitored project progress and took action to keep deliveries on time.</li>
                                <li>Managed changes and deadlines with clients.</li>
                                <li>Prepared and sent project status reports.</li>
                            </ul>
                        </TabPanel>
                        <TabPanel value="2">
                            Achievements
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>

            <Divider />

            <div id="xp-5">

                <ProfessionalHeading name='Microcamp' length='Apr 2013 - Feb 2015' logo='microcamp-logo.jpg' />

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={valueMicro}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChangeMicro} aria-label="lab API tabs example">
                                <Tab label="Responsabilities" value="1" />
                                <Tab label="Achievements" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <ul className='professional-experience-responsabilites-list'>
                                <li>Instructed VIP students in a wide range of technologies, including C, C++, C#, HTML, CSS, JavaScript, jQuery, Java, PHP, PostgreSQL, MySQL, Advanced Excel, and VBA.</li>
                            </ul>
                        </TabPanel>
                        <TabPanel value="2">
                            Achievements
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>

        </>
    );
};
