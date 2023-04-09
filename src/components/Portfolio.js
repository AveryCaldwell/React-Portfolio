import * as React from 'react';
import * as Material from '@mui/material';
import * as IconsMaterial from '@mui/icons-material';
import imageWYW from '../img/WYW.png';
import imageCC from '../img/CC.png';
import imageTechBlog from '../img/techblog.png';
import imageEmployee from '../img/employee.png';
import imageTeam from '../img/team.png';
import imageWeather from '../img/weather.png';

// portfolio images
const itemData = [
    {
        img: imageWYW,
        link: 'https://averycaldwell.github.io/WearYouWander/',
        repo: 'https://github.com/AveryCaldwell/Team-Profile-Generator',
        title: 'Wear You Wander',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: imageCC,
        title: 'Cheers Check',
        link: 'https://dry-gorge-23555.herokuapp.com/',
        repo: 'https://github.com/AveryCaldwell/CheersCheck',
        featured: true,
    },
    {
        img: imageTechBlog,
        link: ' https://averycaldwell-tech-blog.herokuapp.com/',
        repo: 'https://github.com/AveryCaldwell/Tech-Blog-MVC',
        title: 'Tech Blog MVC',
    },
    {
        img: imageEmployee,
        title: 'Employee Tracker',
        link: 'https://watch.screencastify.com/v/VsSvyhIgvLkT3GcRarLN',
        repo: 'https://github.com/AveryCaldwell/Employee-Tracker',
        cols: 2,
    },
    {
        img: imageTeam,
        title: 'Team Profile Generator',
        link: 'https://drive.google.com/file/d/1Y1BxdDhGIa6eY4UsD9mmbSgIKfIHJIZq/view',
        repo: 'https://github.com/AveryCaldwell/Team-Profile-Generator',
        cols: 2,
    },
    {
        img: imageWeather,
        title: ' Weather Dashboard API',
        link: 'https://averycaldwell.github.io/weather-dashboard-API/',
        repo: 'https://github.com/AveryCaldwell/weather-dashboard-API',
        rows: 2,
        cols: 2,
    },
];
function Portfolio({ currentPage }) {
    return (
        <React.Fragment>
            {currentPage === 'Portfolio' && (
                <div
                    style={{
                        height: '100%',
                        backgroundColor: '#c9e4ca',
                        display: 'flex',
                        width: '100%',
                        paddingLeft: '5%',
                        paddingRight: '5%',
                    }}
                >
                    {/* everything goes inside this div */}
                    {/* <Material.Box
                        sx={{
                            color: '#364958',
                            fontSize: '3rem',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            mx: 'auto',
                            p: 5,
                            overflowY: 'none',
                        }}
                    >
                        My Portfolio
                    </Material.Box> */}
                    <Material.ImageList cols={3} sx={{ width: '100%' }}>
                        <Material.ImageListItem key='Subheader' cols={3}>
                            <Material.ListSubheader component='div'>
                                Projects
                            </Material.ListSubheader>
                        </Material.ImageListItem>
                        {itemData.map((item) => (
                            <Material.ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}`}
                                    srcSet={`${item.img}`}
                                    alt={item.title}
                                    loading='lazy'
                                />
                                <a
                                    href={item.link}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Material.ImageListItemBar
                                        title={item.title}
                                        subtitle={item.author}
                                        actionIcon={[
                                            // <Material.Button
                                            //     href={item.link}
                                            //     target='_blank'
                                            //     rel='noreferrer'
                                            //     startIcon={
                                            //         <IconsMaterial.OpenInNew />
                                            //     }
                                            //     sx={{ color: 'white' }}
                                            // ></Material.Button>,
                                            <Material.Button
                                                href={item.repo}
                                                target='_blank'
                                                rel='noreferrer'
                                                startIcon={
                                                    <IconsMaterial.GitHub />
                                                }
                                                sx={{ color: 'white' }}
                                            ></Material.Button>,
                                        ]}
                                    />
                                </a>
                            </Material.ImageListItem>
                        ))}
                    </Material.ImageList>
                </div>
            )}
        </React.Fragment>
    );
}

export default Portfolio;
