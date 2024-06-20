import React from 'react';
import '../Css/Project.css';
import Amazon from '../assets/amazon.png';
import TicTac from '../assets/tictactoe.png';
import virtual from '../assets/Virtual.png';

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
        Link : "Link",
        image: TicTac
    },
    {
        Name : "Skill Harbor",
        Detail : "Skill Harbor using Reactjs",
        Link : "Link",
        image: virtual
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
              <p><a href={item.Link}>{item.Link}</a></p>
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
