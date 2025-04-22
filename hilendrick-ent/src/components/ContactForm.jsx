import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Handle submission (send to API or email)

    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 3000,
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </div>
      <button type="submit" className="submit-btn">Send Message</button>
      <ToastContainer />
    </form>
  );
}

export default ContactForm;
