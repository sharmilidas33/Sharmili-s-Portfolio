import React from 'react'
import './intro.css'
import intro from '../../../assets/intro.png'
import github from '../../../assets/github.png'
import linkedin from '../../../assets/linkedin.png'
import gmail from '../../../assets/gmail.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="hey">Hey,</span>
          <span className="introtxt">I am <span className="introname">Sharmili,</span> <br /> Software Engineer/Developer.</span>
          <p className="intropara">I'm a Computer Science Engineering student with a strong enthusiasm for coding, <br /> and I also possess effective communication and problem-solving abilities.</p>
          <div className="links1">
            <a href="https://github.com/sharmilidas33" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" className="link1" />
            </a>
            {/* <a href="https://www.facebook.com/sharmili.das.399" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="fb" className="link1" />
            </a> */}
            <a href="https://www.linkedin.com/in/sharmili-das-980984220/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className="link1" />
            </a>
            <a href="mailto:sharmilidas06@gmail.com">
              <img src={gmail} alt="gmail" className="link1" />
            </a>
          </div>
          <Link to="contact" spy={true} smooth={true} duration={500}><button className='btn' >Get In Touch</button></Link>
        </div>
        <img src={intro} alt="profile" className="intro" />
      </section>
    </div>
  )
}

export default Intro

