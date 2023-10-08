import React from 'react'
import { plansData } from '../../data/plansData.js'
import './PlansData.css'
import whiteTick from '../../assets/whiteTick.png'
import rightArrow from '../../assets/rightArrow.png'
import '../Join/Join.jsx'


const PlansData = () => {
  return (
    <div className='PlansData' id='PlansData'>
        <div className="blur plans-blur1"></div>
        <div className="blur plans-blur2"></div>

        <div className='one'>
            <div className='three'>READY TO START </div>
            <div>THE JOURNEY</div>
            <div className='three'>WITH US</div>
        </div>
        <div className="plans">
            {plansData.map((Plans) => (
                <div className='plan'>
                    <span>{Plans.icon}</span>
                    <span>{Plans.name}</span>
                    <span>{Plans.price}</span>
                    <span><img src={whiteTick} alt="" />{Plans.features}</span>
                    <span><p>SEE FULL DETAILS</p><img src={rightArrow} alt="" /></span>
                    <button className='btn2'><a href="#Join1" style={{color:"black"}}>JOIN NOW</a></button>
                </div>
            ))
            
            }
        </div>

    </div>
  )
}

export default PlansData