import React from 'react'
import './skills.css'
import react from '../../assets/react.gif'
import js from '../../assets/js.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import node from '../../assets/node.png'
import express from '../../assets/express.png'
import mongodb from '../../assets/mongodb.jpg'
import C from '../../assets/C++.png'
import bootstrap from '../../assets/bootsrap.png'
import tailwind from '../../assets/tailwind.png'
import java from '../../assets/java.jpg'
import python from '../../assets/python.png'
import github from '../../assets/github.png'
import php from '../../assets/php.png'

const Skills = () => {
  return (
    <section id="skills">
      <span className='skilltitle'>About Me</span>
      <span className="skillDesc">Welcome to my portfolio! I'm a tech enthusiast with a strong passion for crafting new websites and collaborating on real-time industry projects. My expertise lies in web development, particularly with the MERN Stack. Additionally, I possess excellent communication skills and problem-solving abilities, which I leverage to create innovative projects. Explore my work and let's connect for exciting tech ventures together. </span>
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
  )
}

export default Skills
