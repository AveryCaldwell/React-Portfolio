import * as React from 'react';
// import * as IconsMaterial from '@mui/icons-material';
// import * as Material from '@mui/material';

function Resume({ currentPage }) {
    return (
        <React.Fragment>
            {currentPage === 'Resume' && (
                <div
                    style={{
                        backgroundColor: '#c9e4ca',
                        height: 'calc(100vh - 114px)',
                    }}
                >
                    {/* everything goes inside this div */}
                    <h1>Resume</h1>
                    {/* FIXME: link to pdf */}
                    <p>
                        Download my
                        <a href='./components/resume.pdf' download>
                            {' '}
                            resume
                        </a>
                    </p>
                </div>
            )}
        </React.Fragment>
    );
}

export default Resume;
