import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Divider } from '@mui/joy';
import ProfessionalHeading from './ProfessionalHeading';

export default function ProfessionalExperienceItem() {
    const [valueRethink, setValueRethink] = React.useState('1');
    const [valuePosiTec, setValuePosiTec] = React.useState('1');
    const [valueBrf, setValueBrf] = React.useState('1');
    const [valueEdPos, setValueEdPos] = React.useState('1');
    const [valueMicro, setValueMicro] = React.useState('1');

    return (
        <>
            <div id="xp-1">
                <ProfessionalHeading name="Nexxt Ideas" length="Mar 2025 - Current" logo="logo-nexxt.png" />

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={valueRethink}>
                        <Box sx={{ borderBottom: 0.3, borderColor: 'divider' }}>
                            <TabList onChange={(_, v) => setValueRethink(v)} aria-label="lab API tabs example">
                                <Tab label="Responsibilities" value="1" />
                                <Tab label="Achievements" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <p>Allocated for:
                                <a href="https://decorepair.com/" target="_blank"> Deco Repair</a>,
                                <a href="https://connectsport.ca/" target="_blank"> Connect Sport</a>,
                                <a href="https://athletearena.com/" target="_blank"> Athlete Arena</a>
                            </p>

                            <ul className="professional-experience-responsibilities-list">
                                <li>Develop and maintain backend services using Node.js, TypeScript, Laravel, and PHP-FPM.</li>
                                <li>Design, optimize, and refactor complex business flows such as subscription billing, payment processing, timelines, feeds, and content visibility rules.</li>
                                <li>Implement and maintain CI/CD pipelines using GitHub Actions, AWS CodeBuild, and AWS CodePipeline.</li>
                                <li>Architect and manage Docker-based environments, including Nginx, multi-stage builds, supervisors, and container orchestration.</li>
                                <li>Configure cloud infrastructure using AWS services such as EC2, Load Balancer with HTTPS, Route 53, EFS, and secure environment variables.</li>
                                <li>Customize and extend large platforms, implementing themes, plugins, core modifications, and automated installation scripts.</li>
                                <li>Build advanced SQL reports and queries using MariaDB and PostgreSQL for analytics, user behavior, learning metrics, and performance insights.</li>
                                <li>Improve performance and code quality by reviewing critical services, fixing inconsistencies, and enforcing architectural standards.</li>
                                <li>Integrate frontend applications with modern tooling such as Vite, hot module reload, and optimized build processes.</li>
                                <li>Collaborate in architectural decisions to ensure scalability, maintainability, and clean system design.</li>
                                <li>Perform detailed code reviews and contribute to best practice guidelines across backend and frontend teams.</li>
                                <li>Troubleshoot and resolve issues in production environments, ensuring stable deployments and reliable user experiences.</li>
                            </ul>
                            <br />
                            <p>Node.js, TypeScript, Laravel, PHP-FPM, React, Vite, Docker, Nginx, AWS (EC2, ALB, Route 53, EFS, CodeBuild, CodePipeline), GitHub Actions, MongoDB, PostgreSQL, MariaDB, Stripe, Playwright, CI/CD, Linux, SCRUM, Kanban.</p>
                        </TabPanel>
                        <TabPanel value="2">
                            <ul className="professional-experience-responsibilities-list">
                                <li>Achievements:</li>
                                <ul>
                                    <li>Implemented optimized backend architectures improving performance, scalability and consistency across multiple services.</li>
                                    <li>Refactored and stabilized complex billing and subscription flows, reducing failures and ensuring reliable payment processing.</li>
                                    <li>Designed and deployed CI/CD pipelines with GitHub Actions and AWS services, enabling fully automated and repeatable deployments.</li>
                                    <li>Developed custom platform extensions, themes, plugins and automated installation processes for large-scale LMS environments.</li>
                                    <li>Created advanced SQL reports and analytics dashboards, improving visibility of user behavior, learning metrics and operational insights.</li>
                                    <li>Improved overall code quality by reviewing critical services, standardizing architecture patterns and eliminating inconsistencies.</li>
                                    <li>Implemented Dockerized environments with Nginx, multi-stage builds and optimized container performance.</li>
                                    <li>Resolved production issues by diagnosing infrastructure, database and application-level bottlenecks.</li>
                                    <li>Enhanced frontend development workflow using Vite, hot module reload and streamlined integration with backend APIs.</li>
                                    <li>Collaborated on architectural decisions that strengthened maintainability, reliability and long-term system evolution.</li>
                                </ul>
                            </ul>
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>

            <div id="xp-1">
                <ProfessionalHeading name="Rethink Tecnologia" length="Mar 2023 - Current" logo="rethink-logo.jpg" />

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={valueRethink}>
                        <Box sx={{ borderBottom: 0.3, borderColor: 'divider' }}>
                            <TabList onChange={(_, v) => setValueRethink(v)} aria-label="lab API tabs example">
                                <Tab label="Responsibilities" value="1" />
                                <Tab label="Achievements" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <p><u>Allocated at Santander Bank Esfera Online Shopping</u></p>

                            <ul className="professional-experience-responsibilities-list">
                                <li>Acting in technical leadership for the backend and frontend teams.</li>
                                <li>Develop, evolve and maintain an ecosystem with more than 400 microservices using Node.js and Java.</li>
                                <li>Migrate Java microservices from JDK11 to JDK 17.</li>
                                <li>Fix vulnerabilities in microservices.</li>
                                <li>Perform code reviews in Java, Node.js and React commits.</li>
                                <li>Participate in architecture meetings to help define the next developments.</li>
                                <li>Responsible for deployments in production.</li>
                                <li>Ensure all developers on the team follow the best coding practices.</li>
                                <li>Responsible for overseeing the correct fulfillment of fields in the tickets on the board.</li>
                                <li>Support the Service Delivery team in building and interpreting project and support indicators. </li>
                                <li>Keep in touch with the client's leadership to ensure alignment about strategy and expectations.</li>
                                <li>Responsible for interviewing and hiring new developers for the company.</li>
                                <li>Mentor and coach team members to enhance their technical and soft skills.</li>
                            </ul>
                            <br />
                            <p>Java, Spring Boot, Node.js, React, Typescript, AWS, Gitlab, Rancher, Kibana, Confluence, Dynatrace, Jira, SCRUM, Kanban.</p>
                        </TabPanel>
                        <TabPanel value="2">
                            <ul className="professional-experience-responsibilities-list">
                                <li>Ipiranga:</li>
                                <ul>
                                    <li>New notifications API with improved performance, optimization and consumption of infrastructure and database resources.</li>
                                </ul>
                                <li>Esfera Shopping Santander</li>
                                <ul>
                                    <li>Fixed vulnerabilities in 250 microservices</li>
                                    <li>Microservices were created and/or evolved to transform the Esfera app into an SDK.</li>
                                    <li>Unification of the frontend and backend teams under the same management</li>
                                    <li>Hired a high-performance team that delivers great results</li>
                                </ul>
                            </ul>
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>

            <Divider />

            <div id="xp-2">
                <ProfessionalHeading name="Positivo Tecnologia" length="Mar 2020 - Dec 2022" logo="postec-logo.jpg" />

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={valuePosiTec}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={(_, v) => setValuePosiTec(v)} aria-label="lab API tabs example">
                                <Tab label="Responsibilities" value="1" />
                                <Tab label="Achievements" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <ul className="professional-experience-responsibilities-list">
                                <li>Led a highly skilled team of 12 members to achieve project goals, resulting in a 60% increase in productivity.</li>
                                <li>Developed APIs and bots using Java and Node.js.</li>
                                <li>Developed frontend applications using React.</li>
                                <li>Supported frontend applications developed in Angular.</li>
                                <li>Responsible for API integrations with overseas partners (Canada, Israel, India).</li>
                                <li>Successfully led the migration of legacy applications to a new cloud-based environment on AWS, migrating old APIs from .NET 4.6 or lower versions to .NET Core, Node.js, Spring Boot, and Python and migrating apps from Ionic to Flutter.</li>
                                <li>Collaborated with product owners and stakeholders to define project requirements and documentation, prioritize work, and ensure timely delivery.</li>
                                <li>Created and maintained performance dashboards using Power BI to monitor team progress and achievements.</li>
                                <li>Mentored and coached team members to enhance their technical and soft skills, resulting in higher productivity and job satisfaction.</li>
                                <li>Promoted a positive and collaborative team culture and continuously improved processes to enhance productivity and results.</li>
                            </ul>
                            <br />
                            <p>Java, .NET, Node.js, React, Angular, Typescript, AWS, Gitlab, Rancher, Dynatrace, ClickUp, SCRUM.</p>
                        </TabPanel>
                        <TabPanel value="2">
                            <ul className="professional-experience-responsibilities-list">
                                <li>Developed a 100% offline version of the Aprimora product that enabled sales contracts worth 7M BRL</li>
                                <li>Hired a high-performance team that delivered great results</li>
                                <li>Integrated educational assets between Pense Matemática and Plethora.</li>
                            </ul>
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>

            <Divider />

            <div id="xp-3">
                <ProfessionalHeading name="BRF" length="Sep 2019 - Mar 2020" logo="brf-logo.jpg" />

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={valueBrf}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={(_, v) => setValueBrf(v)} aria-label="lab API tabs example">
                                <Tab label="Responsibilities" value="1" />
                                <Tab label="Achievements" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <ul className="professional-experience-responsibilities-list">
                                <li>Initiated and managed global IT projects, ensuring accurate and up-to-date information throughout the project lifecycle using SAP, MS Office, and MS Project.</li>
                                <li>Guided project teams in preparing necessary documents based on guidelines and best practices to obtain executive committee approval.</li>
                                <li>Monitored total Capex consumption of the portfolio and prepared monthly reports for the board.</li>
                                <li>Elaborated on project portfolio planning.</li>
                                <li>Proposed and implemented improvements to project approval and management processes.</li>
                            </ul>

                            <br />
                            <p>SAP, MS Office, MS Project, Kanban, PMBok.</p>
                        </TabPanel>
                        <TabPanel value="2">
                            <ul className="professional-experience-responsibilities-list">
                                <li>Implemented of visual management processes that led to a 60% increase in the volume of projects approved by financial and accounting committees.</li>
                                <li>Created a roadmap with improvements in project management processes</li>
                            </ul>
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>

            <Divider />

            <div id="xp-4">
                <ProfessionalHeading name="Positivo Soluções Didáticas" length="Feb 2015 - Aug 2019" logo="edpos-logo.jpg" />

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={valueEdPos}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={(_, v) => setValueEdPos(v)} aria-label="lab API tabs example">
                                <Tab label="Responsibilities" value="1" />
                                <Tab label="Achievements" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <ul className="professional-experience-responsibilities-list">
                                <li>Led a team of 7 developers.</li>
                                <li>Developed APIs and websites using HTML, CSS, JS, PHP, Python 3, Node.js, MSSQL Server, PostgreSQL, and MySQL for education system products.</li>
                                <li>Modeled MSSQL, MySQL, and PostgreSQL databases for the APIs and BI applications.</li>
                                <li>Developed and maintained own-built business intelligence applications.</li>
                                <li>Created and maintained dashboards in Power BI.</li>
                                <li>Gathered business requirements for software and maintained the backlog up to date.</li>
                                <li>Implemented agile transformation using the SCRUM framework.</li>
                                <li>Monitored project progress and took action to keep deliveries on time.</li>
                                <li>Managed changes and deadlines with clients.</li>
                                <li>Prepared and sent project status reports.</li>
                            </ul>

                            <br />
                            <p>Javascript, PHP, Python 3, Node.js, HTML, CSS, MSSQL Server, PostgreSQL, MySQL, Power BI, SCRUM, Kanban, PMBoK.</p>
                        </TabPanel>
                        <TabPanel value="2">
                            <ul className="professional-experience-responsibilities-list">
                                <li>Recovery of the SLA of an IT core, taking performance indicators from 60% to 100% on-time service through the application of techniques of Lean Six Sigma..</li>
                                <li>Recovery of the development team's credibility with client areas through implementing Agile processes and frameworks.</li>
                                <li>Version update of the editorial production management tool for the entire company without downtime and loss of content. (Server and more than 700 computers)</li>
                                <li>I carried out Maturity Research in project management and managed the necessary actions to improve these processes to reach the next level</li>
                                <li>Participated in implementing a proprietary solution for generating digital books, resulting in annual savings of 500,000 BRL</li>
                                <li>Responsible for creating, implementing, and promoting a data analysis and dashboard culture to support business decision-making.</li>
                                <li>Over 20 product websites developed and more than 60 projects in which I participated, from developer to project manager.</li>
                            </ul>
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>

            <Divider />

            <div id="xp-5">
                <ProfessionalHeading name="Microcamp" length="Apr 2013 - Feb 2015" logo="microcamp-logo.jpg" />

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={valueMicro}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={(_, v) => setValueMicro(v)} aria-label="lab API tabs example">
                                <Tab label="Responsibilities" value="1" />
                                <Tab label="Achievements" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <ul className="professional-experience-responsibilities-list">
                                <li>Instructed VIP students in a wide range of technologies, including C, C++, C#, HTML, CSS, JavaScript, jQuery, Java, PHP, PostgreSQL, MySQL, Advanced Excel, and VBA.</li>
                            </ul>
                        </TabPanel>
                        <TabPanel value="2">
                            <ul className="professional-experience-responsibilities-list">
                                <li>More than 200 students were instructed during this period.</li>
                            </ul>
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
        </>
    );
}