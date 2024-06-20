import '../Css/Contact.css'
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import contact from '../assets/contact.png';

import Form from './form';




function Contact(){
   
    return(
        <>
        <div>
        <h1 id='Contact' className="contact">Contact Me</h1>
        <div className='icon-container'>
            <div className='container'>
               <span> < CiLocationOn className='icon'/></span>
                <p>Location:</p>
                <span>Lahore,Pakistan</span>

            </div>
            <div className='container '>
               <span> < HiOutlineMail className='icon email'/></span>
                <p className='email'>Email:</p>
                <span >akashamir537@gmail.com</span>

            </div>
            <div className='container'>
               <span> < FaWhatsapp className='icon'/></span>
                <p>Call/WhatsApp</p>
                <span>03224728201</span>

            </div>
            
            </div>
            <div className='contact-container'>
                <div className='contact-img'>
                    <img src={contact}></img>
                </div>
                <div className='form-container'>
            <Form></Form>
            </div>
            </div>
            
        </div>
        </>
    )
}
export default Contact