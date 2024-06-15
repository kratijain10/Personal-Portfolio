// import React, { useState } from 'react'
import './navbar.css'

import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
// import menu from '../../assets/menu.png'


const Navbar = () => {
  // const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='Navbar'>
        {/* <img src = "" alt = "logo" className='logo' /> */}
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListsItems'>Home</Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListsItems'>Education</Link>
            <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListsItems'>Projects & Skills</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListsItems'>Contact</Link>
           
        

        </div>
        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
           <img src = {contactImg} alt=''className='desktopMenuImg'/>Contact Me </button>
              
              {/* //burgermenu */}
           {/* <img src = {menu} alt='Menu'className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>

           <div className='navMenu' style={{display : showMenu?'flex':none}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='ListsItems' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className='ListsItems' onClick={()=>setShowMenu(!showMenu)}>Education</Link>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='ListsItems' onClick={()=>setShowMenu(!showMenu)}>Projects & Skills</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ListsItems' onClick={()=>setShowMenu(!showMenu)}>Contact</Link>
          
        

        </div> */}
</nav>
  )
}

export default Navbar