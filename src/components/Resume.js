import * as React from 'react';
import * as Material from '@mui/material';

// Function to render Resume component
function Resume({ currentPage }) {
    return (
        <React.Fragment>
            {currentPage === 'Resume' && (
                <div
                    style={{
                        height: '100%',
                        backgroundColor: '#c9e4ca',
                        display: 'flex',
                        overflow: 'auto',
                        paddingTop: '10%',
                    }}
                >
                    {/* Resume section */}
                    <Material.Box
                        sx={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            padding: '1.5rem',
                            borderRadius: 16,
                            textAlign: 'left',
                            fontSize: '1rem',
                            fontWeight: 'lighter',
                            width: '75%',
                            boxShadow: 2,
                            backgroundColor: '#e9f4e9',
                            height: 'fit-content',
                            overflow: 'scroll-y',
                        }}
                    >
                        <div
                            style={{
                                textAlign: 'center',
                                padding: 5,
                                color: '#13292a',
                            }}
                        >
                            <h1>Resume</h1>
                            <p>
                                Download my&nbsp;
                                <a
                                    href='./pdf/resume.pdf'
                                    download='AveryCaldwellResume.pdf'
                                >
                                    resume
                                </a>
                            </p>
                        </div>
                        <h2>Front-end Proficiencies</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Responsive Design</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Material UI</li>
                            <li>PWA, NoSQL</li>
                        </ul>
                        <h2>Back-end Proficiencies</h2>
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>OOP, ORM, MVC</li>
                        </ul>
                    </Material.Box>
                </div>
            )}
        </React.Fragment>
    );
}

export default Resume;
