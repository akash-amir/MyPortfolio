import '../Css/Skills.css';

function Skill() {
    return (
        <>
        <div id="Skill" className="Skillcontainer">
            <h1 className='title-text'>Skills</h1>

            <div className="skill-box">
                <span className="Skill-name">HTML5</span>
                <div className="skill-bar">
                    <span className='skill-per html'>
                        <span className='tooltip'>100%</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="Skill-name">CSS</span>
                <div className="skill-bar">
                    <span className='skill-per css'>
                        <span className='tooltip'>90%</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="Skill-name ">Bootstrap</span>
                <div className="skill-bar">
                    <span className='skill-per bootstrap'>
                        <span className='tooltip'>90%</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="Skill-name ">JavaScript</span>
                <div className="skill-bar">
                    <span className='skill-per javascript'>
                        <span className='tooltip'>80%</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="Skill-name ">ReactJS</span>
                <div className="skill-bar">
                    <span className='skill-per react'>
                        <span className='tooltip'>60%</span>
                    </span>
                </div>
            </div>
        </div>
        </>
    );
}

export default Skill;
