import React, { useState, useEffect, useRef } from 'react';
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

    const [displayText, setDisplayText] = useState('');
    const [startTyping, setStartTyping] = useState(false);
    const contactDescRef = useRef(null);

    const fullText = "Fill out the form below to discuss any work related opportunities or queries.";
    const typingSpeed = 200; // Speed of typing effect
    const backspacingSpeed = 100; // Speed of backspacing effect
    const [wordsPerLine, setWordsPerLine] = useState(10);

    const updateWordsPerLine = () => {
        if (window.innerWidth <= 480) {
            setWordsPerLine(6); // Adjust to 6 words per line for small screens
        } else {
            setWordsPerLine(20); // Default value for larger screens
        }
    };

    useEffect(() => {
        updateWordsPerLine(); // Set initial value
        window.addEventListener('resize', updateWordsPerLine); // Update on resize

        return () => {
            window.removeEventListener('resize', updateWordsPerLine); // Clean up listener
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartTyping(true);
                    observer.unobserve(contactDescRef.current); // Stop observing after starting typing
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is visible
            }
        );

        if (contactDescRef.current) {
            observer.observe(contactDescRef.current);
        }

        return () => {
            if (contactDescRef.current) {
                observer.unobserve(contactDescRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (startTyping) {
            let index = 0;
            const words = fullText.split(' ');
            let currentText = '';

            const typeText = () => {
                if (index < words.length) {
                    currentText += words[index] + ' ';
                    setDisplayText(currentText);

                    // Check if we need to wrap the text
                    const lines = currentText.split('\n');
                    const lastLine = lines[lines.length - 1].split(' ');
                    if (lastLine.length >= wordsPerLine) {
                        currentText += '\n'; // Add new line
                    }

                    index++;
                    setTimeout(typeText, typingSpeed);
                } else {
                    // Once typing is complete, start backspacing
                    setTimeout(() => {
                        let backIndex = currentText.length;
                        const backspaceText = () => {
                            if (backIndex > 0) {
                                currentText = currentText.slice(0, -1);
                                setDisplayText(currentText);
                                backIndex--;
                                setTimeout(backspaceText, backspacingSpeed);
                            } else {
                                // After backspacing, restart typing
                                setTimeout(() => {
                                    currentText = '';
                                    setDisplayText(currentText);
                                    index = 0;
                                    typeText();
                                }, typingSpeed);
                            }
                        };
                        backspaceText();
                    }, typingSpeed);
                }
            };

            typeText(); // Start typing effect
        }
    }, [startTyping, wordsPerLine]);
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactpagetitle">
                    Contact Me
                </h1>
                <span className="contactDesc" ref={contactDescRef}>
                    {displayText}
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
