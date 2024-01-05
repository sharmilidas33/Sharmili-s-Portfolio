import React from 'react'
import './projects.css'
import project1 from '../../assets/project1.png'
import newsapp from '../../assets/newsapp.png'
import textanalyzer from '../../assets/textanalyzer.png'
import numbergame from '../../assets/numbergame.png'
import digitalclock from '../../assets/digitalclock.png'
import jokegenerator from '../../assets/jokegenerator.png'
import todo from '../../assets/Todo.png'
import portfolio from '../../assets/portfolio.png'
import ebook from '../../assets/ebook.png'

const Projects = () => {
    return (
        <section id="project">
            <div className="container" id="projects">
                <div className="projectSec">
                    <h2 className="sub-title">My Projects</h2>
                    <p className='sub-para'>I like to create various projects using the skills I have. <br /> This portfolio is itself a project of mine developed using ReactJS. <br /> Here's some more -</p>
                </div>
                <div className="work-list">
                    <div className="work">
                        <img src={ebook} alt="project1" />
                        <div className="layer">
                            <h3>EBook using MERN</h3>
                            <p>A MERN Stack Application with user authentication, dynamic data fetching, managing & more..</p>
                            <a href="https://e-book-using-mern.vercel.app/">See More!</a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={textanalyzer} alt="project2" />
                        <div className="layer">
                            <h3>Text Analyzer</h3>
                            <p>A React App for analyzing and discovering new things with texts!</p>
                            <a href="https://textanalyzer-by-sharmili.netlify.app/">See More!</a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={portfolio} alt="project3" />
                        <div className="layer">
                            <h3>My PortFolio.</h3>
                            <p>A portfolio website of mine, developed using React JS!</p>
                            <a href="#">See More!</a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={newsapp} alt="project4" />
                        <div className="layer">
                            <h3>SnapNews!</h3>
                            <p>A news application developed using React JS.</p>
                            <a href="https://github.com/sharmilidas33/SnapNews-News-App-with-React">See More!</a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={project1} alt="project5" />
                        <div className="layer">
                            <h3>Cosmetics Landing Page</h3>
                            <p>A product landing page developed using Tailwind CSS & JS.</p>
                            <a href="https://cosmeticsproduct-webpage.netlify.app/">See More!</a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={numbergame} alt="project6" />
                        <div className="layer">
                            <h3>Number Guessing Game</h3>
                            <p>This has been developed using JavaScript.</p>
                            <a href="https://sharmilidas33.github.io/Number-Guessing-Game/">See More!</a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={digitalclock} alt="project7" />
                        <div className="layer">
                            <h3>Real Time Digital Clock</h3>
                            <p>Developed using Javascript mostly, rest is HTML & CSS.</p>
                            <a href="https://sharmilidas33.github.io/Real-time-digital-clock/">See More!</a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={jokegenerator} alt="project8" />
                        <div className="layer">
                            <h3>Tell me a joke!</h3>
                            <p>A programming joke generator developed using Bootstrap & JS!</p>
                            <a href="https://sharmilidas33.github.io/Tell-me-a-joke-/">See More!</a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={todo} alt="project9" />
                        <div className="layer">
                            <h3>Todo List</h3>
                            <p>A frontend based todo list developed using JS.</p>
                            <a href="https://sharmilidas33.github.io/To-Do-List-/">See More!</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
