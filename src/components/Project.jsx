import React from 'react';
import '../Css/Project.css';
import Amazon from '../assets/amazon.png';
import TicTac from '../assets/tictactoe.png';
import virtual from '../assets/Virtual.png';
import gym from '../assets/gym.png';
import Home from '../assets/homyz.png';


function Project() {
    const projectData =[{
        Name : "Amazon",
        Detail : "Amazon Clone using Reactjs",
        Link : "https://amazon-clone.example.com",
        image:Amazon
    },
    {
        Name : "Tic Tac Toe",
        Detail : "Tic Tac Toe using JavaScrpt",
        Link : "https://tic-tac-toe-zeta-nine-45.vercel.app/",
        image: TicTac
    },
    {
        Name : "Skill Harbor",
        Detail : "Skill Harbor using Reactjs",
        Link : "Link",
        image: virtual
    },
    {
      Name : "The Fit Club",
      Detail : "The Fit Club using Reactjs",
      Link : "https://gym-frontend.pages.dev/ ",
      image: gym
  },
  {
    Name : "Homyz",
    Detail : "Homyz using Reactjs",
    Link : "https://real-estate-frontend-cfm.pages.dev/",
    image: Home
},
]
  return (
    <>
      <div className='projectcontainer'>
        <h1 id="Project">Projects</h1>
        <div className='displaycontainer'>
          {
            projectData.map((item)=>
            <div className='imgcontainer'>
            <img src={item.image} alt="Amazon Project" />
            <div className='overlay'>
              <p>{item.Name}</p>
              <p>{item.Detail}</p>
              <p><a href={item.Link}>Link</a></p>
            </div>
            </div>
        )
          }
          </div>
          </div>
         
         
        
    </>
  );
}

export default Project;
