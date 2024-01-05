import React from 'react'
import './exp.css'

const Experience = () => {
  return (
    <div className="container" id="experience">
    <section id='experience1'>
            <h1 className='title'>Experience</h1>
            <p className='titlePara'>I am an individual who believes that real time project experiences are a lot more valuable than daily lectures. I have done a few internships, and have learnt a lot from each one of them.</p>
        
        <div className="contents">
            <div className="box">
                <h3>Junior Software Developer Intern,</h3>
                <h4>at Hellbent Software & Educational Services LLP, <br />(Vidisha, Madhya Pradesh, India)</h4>
                <p>I worked as a junior software developer in this company, where I had to implement codes according to the IDE & meet client's requirements on time. I also had to revamp and reuse codes, that had been used before in other significant projects. My work was based at Web Development and also included writing well-defined reports of the codes I implemented.</p>
            </div>
        </div>
        <div className="contents">
            <div className="box">
                <h3>Formatting and Presentation Intern,</h3>
                <h4>at IIT Bombay,  <br />(Mumbai, Maharashtra, India)</h4>
                <p>IIT Bombay has served as a great workspace where I learnt how team work is done and also how well communication skills matter, here I had to code in LaTex, present my work to seniors and report on time.</p>
            </div>
        </div>
        <div className="contents">
            <div className="box">
                <h3>Technical Content Writing Intern,</h3>
                <h4>at Nettv4u, <br />(Chennai, Tamil Nadu, India)</h4>
                <p>In this Internship, I had to write Articles on the new emerging programming languages, Artifical Intelligence, Blockchains, Deep Learning and more..</p>
            </div>
        </div>
        <div className="contents">
            <div className="box">
                <h3>Data Analytics Intern,</h3>
                <h4>at IBM, collaboration with AICTE.</h4>
                <p>This was a project based internship where I acquired great knowledge on Python and also worked on a project which was about Analysing a Superstore Dataset, productively.</p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Experience
