import React, { useState, useEffect, useRef } from 'react';
import './skills.css';
import react from '../../assets/react.gif';
import js from '../../assets/js.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import node from '../../assets/node.png';
import express from '../../assets/express.png';
import mongodb from '../../assets/mongodb.jpg';
import C from '../../assets/C++.png';
import bootstrap from '../../assets/bootsrap.png';
import tailwind from '../../assets/tailwind.png';
import java from '../../assets/java.jpg';
import python from '../../assets/python.png';
import github from '../../assets/github.png';
import php from '../../assets/php.png';
import figma from '../../assets/figma.png';

const Skills = () => {
  const [displayText, setDisplayText] = useState('');
  const [startTyping, setStartTyping] = useState(false);
  const skillsRef = useRef(null);

  const fullText = "Welcome to my portfolio! I'm a tech enthusiast with a strong passion for crafting new websites and collaborating on real-time industry projects. My expertise lies in web development, particularly with the MERN Stack. Additionally, I possess excellent communication skills and problem-solving abilities, which I leverage to create innovative projects. Explore my work and let's connect for exciting tech ventures together.";
  const typingSpeed = 200; // Speed of typing effect
  const backspacingSpeed = 100; // Speed of backspacing effect
  const [wordsPerLine, setWordsPerLine] = useState(10); // Default value

  const updateWordsPerLine = () => {
    if (window.innerWidth <= 480) {
      setWordsPerLine(6); // Adjust to 6 words per line for small screens
    } else {
      setWordsPerLine(10); // Default value for larger screens
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
          observer.unobserve(skillsRef.current); // Stop observing after starting typing
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
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
            currentText += '\n'; // Add new line if needed
          }

          index++;
          setTimeout(typeText, typingSpeed);
        } else {
          // Start backspacing after typing is complete
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
                  typeText(); // Restart typing effect
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
    <section id="skills" ref={skillsRef}>
      <span className='skilltitle'>About Me</span>
      <pre className="skillDesc">{displayText}</pre>
      <span className='skillDesc2'>My Skills include : </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={react} alt="react" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React JS</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={js} alt="js" className="skillBarImg" />
          <div className="skillBarText">
            <h2>JavaScript</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={html} alt="html" className="skillBarImg" />
          <div className="skillBarText">
            <h2>HTML</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={css} alt="css" className="skillBarImg" />
          <div className="skillBarText">
            <h2>CSS</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={node} alt="node" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Node JS</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={express} alt="express" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Express JS</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={mongodb} alt="mongodb" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Mongo DB</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={php} alt="php" className="skillBarImg" />
          <div className="skillBarText">
            <h2>PHP</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={C} alt="c" className="skillBarImg" />
          <div className="skillBarText">
            <h2>C/C++</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={bootstrap} alt="bootstrap" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Bootstrap</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={tailwind} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Tailwind CSS</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={github} alt="github" className="skillBarImg" />
          <div className="skillBarText">
            <h2>GitHub</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={figma} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Figma</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={java} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Java</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={python} alt="python" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Python</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
