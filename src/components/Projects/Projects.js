import React, { useState, useEffect, useRef } from 'react';
import './projects.css';
import project1 from '../../assets/project1.png';
import newsapp from '../../assets/newsapp.png';
import textanalyzer from '../../assets/textanalyzer.png';
import numbergame from '../../assets/numbergame.png';
import digitalclock from '../../assets/digitalclock.png';
import jokegenerator from '../../assets/jokegenerator.png';
import todo from '../../assets/Todo.png';
import portfolio from '../../assets/portfolio.png';
import ebook from '../../assets/ebook.png';
import pepperSpray from '../../assets/pepperSpray.png';
import discordBot from '../../assets/discordBot.png';

const Projects = () => {
    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            img: pepperSpray,
            alt: 'project0',
            title: 'Pepper Spray',
            description: 'A women safety application developed using React Native for recognising red zones and formulating a safe community forum.',
            link: 'https://github.com/SohamB21/PepperSpray-App'
        },
        {
            img: ebook,
            alt: 'project1',
            title: 'EBook using MERN',
            description: 'A MERN Stack Application with user authentication, dynamic data fetching, managing & more..',
            link: 'https://e-book-using-mern.vercel.app/'
        },
        {
            img: discordBot,
            alt: 'project1a',
            title: "Sharmili's Discord Bot",
            description: "Sharmili's Discord Bot brings Google's AI power to your server! Use @ commands to interact with the AI and enhance your server experience.",
            link: 'https://github.com/sharmilidas33/Sharmili-s-Discord-Bot'
        },
        {
            img: textanalyzer,
            alt: 'project2',
            title: 'Text Analyzer',
            description: 'A React App for analyzing and discovering new things with texts!',
            link: 'https://textanalyzer-by-sharmili.netlify.app/'
        },
        {
            img: portfolio,
            alt: 'project3',
            title: 'My PortFolio.',
            description: 'A portfolio website of mine, developed using React JS!',
            link: 'https://sharmili-s-portfolio.vercel.app/'
        },
        {
            img: newsapp,
            alt: 'project4',
            title: 'SnapNews!',
            description: 'A news application developed using React JS.',
            link: 'https://github.com/sharmilidas33/SnapNews-News-App-with-React'
        },
        {
            img: project1,
            alt: 'project5',
            title: 'Cosmetics Landing Page',
            description: 'A product landing page developed using Tailwind CSS & JS.',
            link: 'https://cosmeticsproduct-webpage.netlify.app/'
        },
        {
            img: numbergame,
            alt: 'project6',
            title: 'Number Guessing Game',
            description: 'This has been developed using JavaScript.',
            link: 'https://sharmilidas33.github.io/Number-Guessing-Game/'
        },
        {
            img: digitalclock,
            alt: 'project7',
            title: 'Real Time Digital Clock',
            description: 'Developed using Javascript mostly, rest is HTML & CSS.',
            link: 'https://sharmilidas33.github.io/Real-time-digital-clock/'
        },
        {
            img: jokegenerator,
            alt: 'project8',
            title: 'Tell me a joke!',
            description: 'A programming joke generator developed using Bootstrap & JS!',
            link: 'https://sharmilidas33.github.io/Tell-me-a-joke-/'
        },
        {
            img: todo,
            alt: 'project9',
            title: 'Todo List',
            description: 'A frontend based todo list developed using JS.',
            link: 'https://sharmilidas33.github.io/To-Do-List-/'
        },
    ];

    const visibleProjects = showAll ? projects : projects.slice(0, 4);

    const [displayText, setDisplayText] = useState('');
  const [startTyping, setStartTyping] = useState(false);
  const skillsRef = useRef(null);

  const fullText = "I like to create various projects using the skills I have. This portfolio is itself a project of mine developed using ReactJS. Here's some more -";
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
            currentText += '\n'; // Add new line
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
        <section id="project">
            <div className="container" id="projects">
                <div className="projectSec">
                    <h2 className="sub-title">My Projects</h2>
                    <p className='sub-para' ref={skillsRef}>{displayText}</p>
                </div>
                <div className="work-list">
                    {visibleProjects.map((project, index) => (
                        <div className="work" key={index}>
                            <img src={project.img} alt={project.alt} />
                            <div className="layer">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link}>See More!</a>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="see-more" onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'Show Less' : 'See More'}
                </button>
            </div>
        </section>
    );
};

export default Projects;
