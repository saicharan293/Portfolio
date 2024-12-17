import React from 'react'
import logo from '../assets/image.png'
import { FaLinkedin,FaGithub,FaInstagram } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = ({ onLogoClick }) => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center" onClick={onLogoClick}>
          
            <img className='mx-2 w-10' src={logo} alt="logo" />
          
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href="https://www.linkedin.com/in/amudala-sai-charan-14860a17b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/saicharan293" target="_blank" rel="noopener noreferrer">
              <FaGithub />
          </a>
          <a href="https://www.instagram.com/saicharan_amudala/" target="_blank" rel="noopener noreferrer">
              <FaInstagram/>
          </a>
        </div>
    </nav>
  )
}

export default Navbar