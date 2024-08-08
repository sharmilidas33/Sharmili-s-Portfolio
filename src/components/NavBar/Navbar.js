import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contact_us from '../../assets/contact_us.jpg'
import menubar from '../../assets/menubar.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />
      <div className="deskMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="deskMenuListItem">HOME</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="deskMenuListItem">ABOUT</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-0} duration={500} className="deskMenuListItem">PROJECTS</Link>
        <Link activeClass='active' to='experience' spy={true} smooth={true} duration={500} className="deskMenuListItem">EXPERIENCE</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} duration={500} className="deskMenuListItem">CONTACT</Link>
      </div>
      <a href="https://drive.google.com/file/d/1sGflsLFZMnpr6wGmomzbsM422M50TxjH/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button className="deskMenuBtn">
          <img src={contact_us} alt="" className="deskMenuImg" /> My Resume
        </button>
      </a>

      <img src={menubar} alt="menu" className='mobileMenu' onClick={()=>setShowMenu(!showMenu)}/>
    <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>HOME</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>ABOUT</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-0} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>PROJECTS</Link>
        <Link activeClass='active' to='experience' spy={true} smooth={true} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>EXPERIENCE</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>CONTACT</Link>
        {/* <a href="https://drive.google.com/file/d/110OPyilqq0nStO3kAXn4ZlnTi9MSLhLr/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
          <button className="deskMenuBtn" onClick={()=>setShowMenu(false)}>
            <img src={contact_us} alt="" className="deskMenuImg" /> My Resume
          </button>
        </a> */}
      </div>
    </nav>
  )
}

export default Navbar

