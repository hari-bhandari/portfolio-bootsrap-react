import React from 'react';
import Project from "./Project";

const Projects = () => {
    const projects=[
        {   title:'Fully functional Bootcamp API',
            description:'Fully functional API made using mongoose and Nodejs.',
            picture:'https://i.imgur.com/ln6L5Il.png',
            demo:''

        },
        {   title:'CONTACT KEEPER',
            description:'Contact keeper with React and Node. (with authentication) Not yet deployed to web',
            picture:'https://i.imgur.com/QPRNWCd.png',
            mode:'mobile',
            demo:''

        },
        {   title:'EXPENSE TRACKER',
            description:'Expense tracker using vanilla js,css and HTML',
            picture:'https://i.imgur.com/1eXodFs.png',
            demo:''

        },
        {   title:'SORTING ALGORITHM VISUALISER',
            description:'To create this project, I used react.js,HTML,CSS and JS',
            picture:'https://i.imgur.com/16N0dxy.png',
            mode:'mobile',
            demo:''

        },
        {   title:'GITHUB FINDER',
            description:'Made with the use of renown Github API.',
            picture:'https://i.imgur.com/9VNq6Nc.png',
            demo:''

        },

        {   title:'MCDONALD\'S SCHEDULE VIEWER',
            description:'This is an amazing web scraping app that scrapes mcdonald\'s schedule. I made this app as Mcdonald\'s schedule is extremely unresponsive and hard to work with.NodeJs and Reactjs were used while making this project. This app scrapes mcdonald\'s schedule every 24 hours at 0:00 am.\n' +
                'By the way, I work at Mcdonald\'s.',
            picture:'https://i.imgur.com/Gtup8L3.png',
            mode:'mobile',
            demo:''

        },


        ]
    return (
        <div>
            {projects.map((value,index) =>(
                <Project title={value.title} description={value.description} picture={value.picture} mode={value.mode} key={index}/>
            ))}
        </div>
    );
};

export default Projects;