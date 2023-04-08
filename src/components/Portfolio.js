import * as React from 'react';

function Portfolio({ currentPage }) {
    return (
        <React.Fragment>
            {currentPage === 'Portfolio' && (
                <div
                    style={{
                        height: 'calc(100vh - 114px)',
                    }}
                >
                    {/* everything goes inside this div */}
                    <p>Portfolio TestTest</p>
                </div>
            )}
        </React.Fragment>
    );
}

export default Portfolio;
