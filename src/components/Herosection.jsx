import Akash from '../assets/Akash.png';
import '../Css/HeroSection.css'
import {useTypewriter } from 'react-simple-typewriter'
import {FaFacebookSquare,FaInstagram,FaInstagramSquare,FaLinkedin, FaLinkedinIn} from 'react-icons/fa'
function Herosection(){
    const [text] = useTypewriter({
        words :["Front-End Developer "],
        loop:{}
    })
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = 'Akash\'s CV.pdf';
        link.download = 'Akash.pdf';
        link.click();
    };
    const visitGitHub = () => {
        window.open('https://github.com/akash-amir', '_blank', 'noopener,noreferrer');
    };
   
    return(
        <>
        <section>
            <div className='firstsection'>
                <div className='Second'>
                <p>Hi,My name is <span className='title'>Akash</span><br></br>and I am passionate<br></br><span className='title'>{text}</span></p>
                <button onClick={downloadResume}>Download Resume</button>
                <button onClick={visitGitHub}>Visit GitHub</button>
                <div className= "social-media-links " >
                <ul>
                <li><a href="https://www.facebook.com/akash.amir.524?mibextid=ZbWKwL" target='blank'><FaFacebookSquare></FaFacebookSquare></a></li>
                <li><a href="https://www.instagram.com/akash_amir.01?igsh=a2V1eW4zcTQxbmkx" target='blank'><FaInstagram></FaInstagram></a></li>
                <li><a href="https://www.linkedin.com/in/akash-amir" target='blank'><FaLinkedinIn></FaLinkedinIn></a></li>
            </ul>
                </div>

                </div>
                
                <div className='third'>
                <img src={Akash}></img>
                    
                </div>
              
                

            </div>
           <div className='divider'></div>
        </section>
        </>
    )
}
export default Herosection
