import * as React from 'react';
// import myGif from '../img/computer-bg.gif';
import * as Material from '@mui/material';
import aves2 from '../img/aves2.png';

function About({ currentPage }) {
    const mediaSize = Material.useMediaQuery('(min-width:900px)');
    return (
        <React.Fragment>
            {currentPage === 'About' && (
                <div
                    style={{
                        height: '100%',
                        backgroundColor: '#c9e4ca',
                        display: mediaSize ? 'flex' : 'block',
                        width: '100%',
                        paddingLeft: '5%',
                        paddingRight: '5%',
                        overflow: 'auto',
                    }}
                >
                    <Material.Box
                        sx={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'top -20px left 29px',
                            backgroundImage: `url(${aves2})`,
                            height: mediaSize ? 300 : 200,
                            width: mediaSize ? 300 : 200,
                            backgroundColor: '#c9e4ca',
                            borderRadius: 300,
                            margin: mediaSize ? '2rem' : '1rem',
                            border: '20px solid #e9f4e9',
                            boxShadow: 2,
                            display: 'inline-block',
                        }}
                    ></Material.Box>

                    <Material.Box
                        sx={{
                            margin: mediaSize ? '2rem' : '0 0 1rem 0',
                            padding: '2rem',
                            borderRadius: 16,
                            textAlign: 'center',
                            fontSize: '1.0rem',
                            fontWeight: 'lighter',
                            width: mediaSize ? 'calc(100% - 400px)' : '100%',
                            boxShadow: 2,
                            backgroundColor: '#e9f4e9',
                            height: mediaSize ? 'calc(100vh - 200px)' : 'auto',
                            overflow: 'scroll-y',
                        }}
                    >
                        <p style={{ overflow: 'auto', height: '100%' }}>
                            "Hey there! I'm Avery, a full stack developer with a
                            year of experience in developing web applications.
                            I'm passionate about building scalable, responsive,
                            and user-friendly web apps using a variety of
                            frameworks like Material, Foundation Framework,
                            Bootstrap, and Anime.js. Nothing gets me more
                            excited than tackling complex problems and
                            discovering new ways to enhance my skills and
                            knowledge.
                            <br />
                            <br />
                            I'm proficient in both front-end and back-end
                            development, using HTML, CSS, JavaScript, and jQuery
                            for the former and Node.js, mySQL, Express.js, and
                            MongoDB for the latter. But, what sets me apart is
                            my excellent communication and collaboration skills.
                            I'm a team player, and I thrive on working alongside
                            other developers, designers, and stakeholders to
                            deliver top-quality web applications that meet
                            business needs.
                            <br />
                            <br />
                            In my spare time, you'll usually find me tinkering
                            with some side projects, live streaming, or eating
                            too much pizza. I love experimenting with new
                            technologies and frameworks to see how I can use
                            them to create something innovative and exciting.
                            And if you're searching for a developer who can
                            bring a dash of creativity and humor to your team,
                            look no further - I'm your girl!"
                            <br />
                            <br />
                            Avery Caldwell
                            <br />
                            Full-Stack Developer
                        </p>
                    </Material.Box>
                </div>
            )}
        </React.Fragment>
    );
}

// <Box sx={{ maxWidth: 'md' }}>…

export default About;
