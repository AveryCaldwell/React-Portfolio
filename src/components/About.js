import * as React from 'react';
// import myGif from '../img/computer-bg.gif';
import * as Material from '@mui/material';
import * as Image from 'mui-image';

function About({ currentPage }) {
    return (
        <React.Fragment>
            {currentPage === 'About' && (
                <div>
                    {/* everything goes inside this div */}
                    <div
                        style={{
                            // backgroundSize: 'cover',
                            // backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            // backgroundImage: `url(${myGif})`,
                            height: 'calc(100vh - 114px)',
                            backgroundColor: '#c9e4ca',
                        }}
                    >
                        {/* <img src={myGif} alt='my-gif' /> */}
                        {/* FIX ME : correct the lin */}
                        <Material.Box
                            sx={{
                                display: 'block',
                                alignItems: 'center',
                                '& > *': {
                                    mx: 'auto',
                                    // width: '75%',
                                    p: 1,
                                    m: 1,
                                    bgcolor: (theme) =>
                                        theme.palette.mode === 'dark'
                                            ? '#101010'
                                            : 'grey.50',
                                    color: (theme) =>
                                        theme.palette.mode === 'dark'
                                            ? 'grey.300'
                                            : 'grey.800',
                                    border: '1px solid',
                                    borderColor: (theme) =>
                                        theme.palette.mode === 'dark'
                                            ? 'grey.800'
                                            : 'grey.300',
                                    borderRadius: 2,
                                    textAlign: 'center',
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                },
                            }}
                        >
                            <br />
                            <Material.Box>
                                <Image.Image
                                    src='aves2.png'
                                    style={{
                                        borderRadius: 16,
                                        margin: '2rem',
                                        padding: '2rem',
                                    }}
                                />
                            </Material.Box>
                            <Material.Box
                                sx={{
                                    margin: '2rem',
                                    padding: '2rem',
                                    borderRadius: 16,
                                    textAlign: 'center',
                                    fontSize: '1.30rem',
                                    fontWeight: 'lighter',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    paddingLeft: 'auto',
                                    paddingRight: 'auto',
                                    width: '75%',
                                    boxShadow: 2,
                                    backgroundColor: '#e9f4e9',
                                }}
                            >
                                Hey there! I'm Avery, a full stack developer
                                with a year of experience in developing web
                                applications. I'm passionate about building
                                scalable, responsive, and user-friendly web apps
                                using a variety of frameworks like Material,
                                Foundation Framework, Bootstrap, and Anime.js.
                                Nothing gets me more excited than tackling
                                complex problems and discovering new ways to
                                enhance my skills and knowledge.
                                <br />
                                <br />
                                I'm proficient in both front-end and back-end
                                development, using HTML, CSS, JavaScript, and
                                jQuery for the former and Node.js, mySQL,
                                Express.js, and MongoDB for the latter. But,
                                what sets me apart is my excellent communication
                                and collaboration skills. I'm a team player, and
                                I thrive on working alongside other developers,
                                designers, and stakeholders to deliver
                                top-quality web applications that meet business
                                needs.
                                <br />
                                <br />
                                In my spare time, you'll usually find me
                                tinkering with some side projects, live
                                streaming, or eating too much pizza. I love
                                experimenting with new technologies and
                                frameworks to see how I can use them to create
                                something innovative and exciting. And if you're
                                searching for a developer who can bring a dash
                                of creativity and humor to your team, look no
                                further - I'm your girl!
                            </Material.Box>
                            {/* <Material.Button variant='contained'>
                                Contained
                            </Material.Button> */}
                        </Material.Box>
                        {/* background div */}
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

// <Box sx={{ maxWidth: 'md' }}>…

export default About;
