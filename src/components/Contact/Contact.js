import React, { useRef } from 'react'
import './contact.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import gmail from '../../assets/gmail.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yzn7irg', 'template_nhb723e', form.current, 'HD_q8M2s11Qy1WHhM')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert("Email Sent!");
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactpagetitle">
                    Contact Me
                </h1>
                <span className="contactDesc">
                    Fill out the form below to discuss any work related oppurtunities or queries.
                </span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='Your Name' name="your_name" />
                    <input type="email" className="email" placeholder='Your Email' name="your_email" />
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button className="submitBtn" type='submit' value='Send'>Submit</button>
                    <div className="links">
                        <a href="https://github.com/sharmilidas33" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="github" className="link" />
                        </a>
                        {/* <a href="https://www.facebook.com/sharmili.das.399" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="fb" className="link" />
                        </a> */}
                        <a href="https://www.linkedin.com/in/sharmili-das-980984220/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" className="link" />
                        </a>
                        <a href="mailto:sharmilidas06@gmail.com">
                            <img src={gmail} alt="gmail" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
