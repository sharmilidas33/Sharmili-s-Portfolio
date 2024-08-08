import React, { useEffect, useState } from 'react';
import './intro.css';
import intro from '../../../assets/intro2.png';
import github from '../../../assets/github.png';
import linkedin from '../../../assets/linkedin.png';
import gmail from '../../../assets/gmail.png';
import { Link } from 'react-scroll';

const Intro = () => {
  const [currentRole, setCurrentRole] = useState('');

  const typingSpeed = 200;
  const backspacingSpeed = 100;

  const roles = [
    'Software Engineer.',
    'Fullstack Developer.',
    'Team Worker.',
    'Technical Content Writer.'
  ];

  useEffect(() => {
    let roleIndex = 0;
    let typingText = '';
    let typingStatus = true;

    const typeRole = () => {
      const role = roles[roleIndex];

      if (typingStatus) {
        if (typingText.length < role.length) {
          typingText += role[typingText.length];
          setCurrentRole(typingText); // Update role being typed
          setTimeout(typeRole, typingSpeed); // Continue typing
        } else {
          typingStatus = false; // Switch to backspacing
          setTimeout(() => {
            let backIndex = typingText.length;
            const backspaceRole = () => {
              if (backIndex > 0) {
                typingText = typingText.slice(0, -1);
                setCurrentRole(typingText); // Update role being backspaced
                backIndex--;
                setTimeout(backspaceRole, backspacingSpeed); // Continue backspacing
              } else {
                typingStatus = true; // Switch back to typing
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeRole, typingSpeed); // Restart typing effect
              }
            };
            backspaceRole(); // Start backspacing effect
          }, typingSpeed); // Delay before starting backspacing
        }
      }
    };

    typeRole(); // Start typing effect

  }, []);

  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="hey">Hey,</span>
          <span className="introtxt">I am <span className="introname">Sharmili,</span> <br /> {currentRole}</span>
          <p className="intropara">
            I'm a Computer Science Engineering student with a strong enthusiasm for coding, and I also possess effective communication and problem-solving abilities.
          </p>
          <div className="links1">
            <a href="https://github.com/sharmilidas33" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" className="link1" />
            </a>
            <a href="https://www.linkedin.com/in/sharmili-das-980984220/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className="link1" />
            </a>
            <a href="mailto:sharmilidas06@gmail.com">
              <img src={gmail} alt="gmail" className="link1" />
            </a>
          </div>
          <Link to="contact" spy={true} smooth={true} duration={500}><button className='btn'>Get In Touch</button></Link>
        </div>
        <img src={intro} alt="profile" className="intro" />
      </section>
    </div>
  );
}

export default Intro;
