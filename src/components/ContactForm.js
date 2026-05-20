import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    
    emailjs.sendForm(
      'service_yuq2flb',   
      'template_f0t9vwp',  
      e.target,
      '7RsFRXEjMDRw9e1OS'   
    )
    .then((result) => {
      console.log('SUCCESS!', result.text);
      setStatus('success');
      
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      console.log('FAILED...', error.text);
      setStatus('error');
    });
   // Envío 2: Mensaje a tu correo con los datos del usuario
   emailjs.sendForm(
    'service_yuq2flb',
    'template_yra4xs8',  
    e.target,
    '7RsFRXEjMDRw9e1OS'
  ).then(() => {
    console.log('Correo al admin enviado correctamente');
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  }).catch((error) => {
    console.log('Error al enviar al admin:', error);
    setStatus('error');
  });
};


  return (
    <form onSubmit={sendEmail} className="contact-form">
      <h2>Contáctanos</h2>
      {status === 'success' && (
        <p className="success-message">
          ¡Tu mensaje ha sido enviado! Te contactaremos pronto.
        </p>
      )}
      {status === 'error' && (
        <p className="error-message">
          Hubo un error al enviar el mensaje. Intenta nuevamente.
        </p>
      )}

      <input
        type="text"
        name="name"
        placeholder="Tu Nombre"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Tu Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="message"
        placeholder="Tu Mensaje"
        value={formData.message}
        onChange={handleInputChange}
        required
      ></textarea>
      
      <button type="submit" className="view-course-btn1">Enviar Mensaje</button>
    </form>
  );
};

export default ContactForm;
