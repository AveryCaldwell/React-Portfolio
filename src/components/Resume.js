import * as React from 'react';
// import * as IconsMaterial from '@mui/icons-material';
import * as Material from '@mui/material';
import * as Router from 'react-router-dom';
function Resume({ currentPage }) {
    return (
        <React.Fragment>
            {currentPage === 'Resume' && (
                <div
                    style={{
                        height: '100%',
                        backgroundColor: '#c9e4ca',
                        display: 'flex',
                        width: '100%',
                        paddingLeft: '5%',
                        paddingRight: '5%',
                        overflow: 'auto',
                    }}
                >
                    <Material.Box
                        sx={{
                            margin: '2rem',
                            padding: '2rem',
                            borderRadius: 16,
                            textAlign: 'center',
                            fontSize: '1.3rem',
                            fontWeight: 'lighter',
                            width: '75%',
                            boxShadow: 2,
                            backgroundColor: '#e9f4e9',
                            height: 'calc(100vh - 200px)',
                            overflow: 'scroll-y',
                        }}
                    >
                        <h1>Resume</h1>
                        {/* FIXME: link to pdf */}
                        <h3>
                            Download my&nbsp;
                            <a
                                href='./pdf/resume.pdf'
                                download='AveryCaldwellResume.pdf'
                            >
                                resume
                            </a>
                        </h3>
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
