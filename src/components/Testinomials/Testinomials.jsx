import React, {useState} from 'react'
import './Testinomials.css'
import {testimonialsData} from '../../data/testimonialsData.js'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'


const Testinomials = () => {

  const [selected, setSelected]=useState(0);
  const tLength= testimonialsData.length;
  return (
    <div className='Testinomials' id='Testinomials'>
      <div className='leftside'>
        <span className='first' >Testinomials</span>
        <span className='three'>WHAT THEY</span>
        <span className='herotext'>SAY ABOUT US</span>
        <span style={{color:"white"}}>
            {testimonialsData[selected].review}
        </span>
        <span style={{color:"white"}}>
          <span style={{color:'var(--orange)'}}>
            {testimonialsData[selected].name}
          </span>{" "}
          -{" "} {testimonialsData[selected].status}
        </span>

        <div>
          <span><img onClick={()=>{
            selected ===0
            ? setSelected(tLength-1)
            : setSelected((prev)=> prev-1);
          }}src={leftArrow} alt="" /></span>
          <span><img onClick={()=>{
            selected===tLength-1
            ? setSelected(0)
            : setSelected((prev)=>prev+1);
          }}
          src={rightArrow} alt="" /></span>
        </div>
      </div>
      <div className='rightside'>
        <div ><img src={testimonialsData[selected].image} alt="" className='timage'/></div>
        {/* <div className='timage2'></div> */}
      </div>
    </div>
  )
}

export default Testinomials