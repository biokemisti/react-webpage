import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/components/Contact.css';

function Contact() {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        emailjs
            .sendForm(
                import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setStatus('Message sent successfully!');
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    setStatus('Failed to send message. Please try again.');
                }
            );
    };

    return (
        <section id="contact" className="contact">
            <h2>Pyydä hinta-arvio projektistasi</h2>
            <p>Muuta kysyttävää? Ota rohkeasti yhteyttä!</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nimi</label>
                    <input type="text" id="name" name="name" placeholder="Etunimi Sukunimi" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Sähköposti</label>
                    <input type="email" id="email" name="email" placeholder="Sähköposti" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Lisätietoja</label>
                    <textarea id="message" name="message" placeholder="..." rows="5" required></textarea>
                </div>
                <button type="submit">Send Message</button>
                {status && <p className="status-message">{status}</p>}
            </form>
        </section>
    );
}

export default Contact;