import React from 'react'
import './Footer.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <hr className='line'/>
        <div className="items">
        <span><img src={github} alt="" className='logo3'/></span>
        <span><img src={linkedin} alt="" className='logo3'/></span>
        <span><img src={instagram} alt="" className='logo3'/></span>
        </div>
        <span className='last'><img src={logo} alt="" className='logo' style={{width:'110px'}}/></span>
        <div className="blurfooter"></div>
        <div className="blurfooter1"></div>
        <div className="blurfooter2"></div>
        <div className="blurfooter3"></div>
        <div className="blurfooter4"></div>

    </div>

  )
}

export default Footer