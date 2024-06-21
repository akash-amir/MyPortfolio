import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const notify = () => {
    toast('Message is Delivered', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = {};
    
    if (!formData.from_name.trim()) {
      validationErrors.from_name = 'Name is required';
    }
    if (!formData.from_email.trim()) {
      validationErrors.from_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      validationErrors.from_email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      validationErrors.message = 'Message is required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .sendForm('service_6chxnqb', 'template_jf2odnu', form.current, '096UpA53ZrVB9HCTw')
        .then(
          () => {
            notify();
            setFormData({ from_name: '', from_email: '', message: '' }); 
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name:</label>
        <input
          type="text"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
        />
        {errors.from_name && <span className="error">{errors.from_name}</span>}

        <label>Your Email:</label>
        <input
          type="email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
        />
        {errors.from_email && <span className="error">{errors.from_email}</span>}

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <input type='submit'></input>
        <ToastContainer />
      </form>
    </>
  );
}

export default Form;
