import React, { useState, useEffect, useRef } from 'react';
import './exp.css'

const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      title: 'PHP Developer Intern,',
      company: 'at Onlighten Media, (Mumbai, Maharashtra, India)',
      description: 'As a Developer here, I am specializing in CodeIgniter and other web development frameworks, I am engaged in full-time development work for 9 hours each day. My role involves learning and implementing CodeIgniter to develop robust and efficient real-time web applications. I am fortunate to be part of a supportive and knowledgeable team that fosters a collaborative environment. Working closely with senior developers has greatly enhanced my skills and understanding of best practices in web development.'
    },
    {
      title: 'Junior Software Developer Intern,',
      company: 'at Hellbent Software & Educational Services LLP, (Vidisha, Madhya Pradesh, India)',
      description: "I worked as a junior software developer in this company, where I had to implement codes according to the IDE & meet client's requirements on time. I also had to revamp and reuse codes, that had been used before in other significant projects. My work was based at Web Development and also included writing well-defined reports of the codes I implemented."
    },
    {
      title: 'Formatting and Presentation Intern,',
      company: 'at IIT Bombay, (Mumbai, Maharashtra, India)',
      description: 'IIT Bombay has served as a great workspace where I learnt how team work is done and also how well communication skills matter, here I had to code in LaTex, present my work to seniors and report on time.'
    },
    {
      title: 'Technical Content Writing Intern,',
      company: 'at Nettv4u, (Chennai, Tamil Nadu, India)',
      description: 'In this Internship, I had to write Articles on the new emerging programming languages, Artificial Intelligence, Blockchains, Deep Learning and more..'
    },
    {
      title: 'Data Analytics Intern,',
      company: 'at IBM, collaboration with AICTE.',
      description: 'This was a project based internship where I acquired great knowledge on Python and also worked on a project which was about Analysing a Superstore Dataset, productively.'
    }
  ];

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  const [displayText, setDisplayText] = useState('');
  const [startTyping, setStartTyping] = useState(false);
  const skillsRef = useRef(null);

  const fullText = "I am an individual who believes that real time project experiences are a lot more valuable than daily lectures. I have done a few internships, and have learnt a lot from each one of them.";
  const typingSpeed = 200; // Speed of typing effect
  const backspacingSpeed = 100; // Speed of backspacing effect
  const [wordsPerLine, setWordsPerLine] = useState(10); // Default value

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
      let typing = true; // Control typing or backspacing

      const typeText = () => {
        if (typing) {
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
            typing = false;
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
                  typing = true;
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
        }
      };

      typeText(); // Start typing effect
    }
  }, [startTyping, wordsPerLine]);

  return (
    <div className="container" id="experience">
      <section id='experience1'>
        <h1 className='title'>Experience</h1>
        <div ref={skillsRef}>
          <p className='titlePara'>{displayText}</p>
        </div>

        <div className="content-exp">
        <div className="contents">
          {displayedExperiences.map((exp, index) => (
            <div className="box" key={index}>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
        </div>
        <button className="see-more" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'See More'}
        </button>
      </section>
    </div>
  )
}

export default Experience;
