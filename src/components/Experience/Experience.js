import React, { useState } from 'react'
import './exp.css'

const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      title: 'PHP Developer Intern,',
      company: 'at Onlighten Media, (Mumbai, Maharashtra, India)',
      description: 'My job is to build web applications, by learning from the seniors in the company and tackling new challenges!'
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

  return (
    <div className="container" id="experience">
      <section id='experience1'>
        <h1 className='title'>Experience</h1>
        <p className='titlePara'>I am an individual who believes that real time project experiences are a lot more valuable than daily lectures. I have done a few internships, and have learnt a lot from each one of them.</p>
        <div className="contents">
          {displayedExperiences.map((exp, index) => (
            <div className="box" key={index}>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
        <button className="see-more" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'See More'}
        </button>
      </section>
    </div>
  )
}

export default Experience;
