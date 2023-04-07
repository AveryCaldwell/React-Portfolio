import * as React from 'react';

function Home({ currentPage }) {
    return (
        <React.Fragment>
            {currentPage === 'Home' && (
                <div>
                    {/* everything goes inside this div */}
                    Welcome!
                </div>
            )}
        </React.Fragment>
    );
}

export default Home;
