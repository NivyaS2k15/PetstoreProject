import React, { useState } from 'react';
import './contactus.css';
import {useNavigate} from "react-router-dom"
const ContactUs = () => {
    const navigate = useNavigate();
  // Define a state variable to manage the flipCard animation
  const [flipCard, setFlipCard] = useState(false);

  // Define a function to toggle the flipCard state
  const toggleFlipCard = () => {
    setFlipCard(!flipCard);
  };

  return (
    <section>
      <div id="container" >
        <div className={`flip-card ${flipCard ? 'active' : ''}`} 
        
        
        
        
        onClick={toggleFlipCard}>
          {flipCard ? 'Reset' : 'Animate'}

        </div>
        <div className="contact-wrapper"  style={{backgroundColor:"rgb(245, 104, 214)"}} > 
          <div className={`envelope ${flipCard ? 'active' : ''}`}>
            <div className="back paper"></div>
            <div className="content">
              <div className="form-wrapper">
                <form>
                  <div className="top-wrapper">
                    <div className="input">
                      <label>Name</label>
                      <input type="text" name="name" />
                    </div>
                    <div className="input">
                      <label>Phone</label>
                      <input type="text" name="phone" />
                    </div>
                    <div className="input">
                      <label>Email</label>
                      <input type="text" name="_replyto" />
                    </div>
                  </div>
                  <div className="bottom-wrapper">
                    <div className="input">
                      <label>Subject</label>
                      <input type="text" name="_subject" />
                    </div>
                    <div className="input">
                      <label>Message</label>
                      <textarea  name="message"></textarea>
                    </div>
                    <div className="submit">
                      <div className="submit-card" onClick={toggleFlipCard}>
                        Send Mail
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="front paper"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
