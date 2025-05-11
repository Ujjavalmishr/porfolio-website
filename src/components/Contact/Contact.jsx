import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "7be6b0b2-ebd4-47ba-8b60-4a8f7dcefc28"); // ✅ Replace this

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "❌ Something went wrong");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail" /> <p>ujjavalmishra439@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call" /> <p>+91 7275001805</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" /> <p>Curr. Loc - Chipiyana Buzurg, Ghaziabad, 201009</p>
            </div>
          </div>
        </div>

        <div className="contact-right-wrapper">
          {/* ✅ Success message shown ABOVE the form */}
          {result && <p className="form-result">{result}</p>}

          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' required />

            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' required />

            <label htmlFor="message">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>

            <button type='submit' className="contact-submit">Submit now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
