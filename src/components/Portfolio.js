import * as React from 'react';
import * as Material from '@mui/material';

function Portfolio({ currentPage }) {
    return (
        <React.Fragment>
            {currentPage === 'Portfolio' && (
                <div
                    style={{
                        height: 'calc(100vh - 114px)',
                        backgroundPosition: 'center',
                        backgroundColor: '#c9e4ca',
                    }}
                >
                    {/* everything goes inside this div */}
                    <Material.Box
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
                    </Material.Box>
                    <Material.ImageList sx={{ width: 500, height: 450 }}>
                        <Material.ImageListItem key='Subheader' cols={2}>
                            <Material.ListSubheader component='div'>
                                Projects
                            </Material.ListSubheader>
                        </Material.ImageListItem>
                        {itemData.map((item) => (
                            <Material.ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading='lazy'
                                />
                                <Material.ImageListItemBar
                                    title={item.title}
                                    subtitle={item.author}
                                    actionIcon={
                                        <Material.IconButton
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.54)',
                                            }}
                                            aria-label={`info about ${item.title}`}
                                        ></Material.IconButton>
                                    }
                                />
                            </Material.ImageListItem>
                        ))}
                    </Material.ImageList>
                </div>
            )}
        </React.Fragment>
    );
}
// portfolio images
const itemData = [
    {
        img: 'WYW.png',
        link: 'https://averycaldwell.github.io/WearYouWander/',
        repo: 'https://github.com/AveryCaldwell/Team-Profile-Generator',
        title: 'Wear You Wander',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'CC.png',
        title: 'Cheers Check',
        link: 'https://dry-gorge-23555.herokuapp.com/',
        repo: 'https://github.com/AveryCaldwell/CheersCheck',
        featured: true,
    },
    {
        img: 'techblog.png',
        link: ' https://averycaldwell-tech-blog.herokuapp.com/',
        repo: 'https://github.com/AveryCaldwell/Tech-Blog-MVC',
        title: 'Tech Blog MVC',
    },
    {
        img: 'employee.png',
        title: 'Employee Tracker',
        link: 'https://watch.screencastify.com/v/VsSvyhIgvLkT3GcRarLN',
        repo: 'https://github.com/AveryCaldwell/Employee-Tracker',
        cols: 2,
    },
    {
        img: 'team.png',
        title: 'Team Profile Generator',
        link: 'https://drive.google.com/file/d/1Y1BxdDhGIa6eY4UsD9mmbSgIKfIHJIZq/view',
        repo: 'https://github.com/AveryCaldwell/Team-Profile-Generator',
        cols: 2,
    },
    {
        img: 'weather.png',
        title: ' Weather Dashboard API',
        link: 'https://averycaldwell.github.io/weather-dashboard-API/',
        repo: 'https://github.com/AveryCaldwell/weather-dashboard-API',
        rows: 2,
        cols: 2,
    },
];
export default Portfolio;
