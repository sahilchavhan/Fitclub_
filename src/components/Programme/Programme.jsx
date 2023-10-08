import React from 'react'
import { programsData } from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'
import './Programme.css'

const Programme = () => {
  return (
    <div id="Programme">
        <div className='one'>
            <div className='three'>EXPLORE OUR</div>
            <div>PROGRAMMES</div>
            <div className='three'>TO SHAPE YOU</div>
        </div>
        <div className='two'>
            {/* <div className='four'></div>
            <div className='four'></div>
            <div className='four'></div>
            <div className='four'></div> */}
            {programsData.map((program) => (
                <div className='four'>
                    <span className=''>{program.image}</span>
                    <span>
                        {program.heading}
                    </span>
                    <span>
                        {program.details}
                    </span>
                    <div><span>join now <img src={rightArrow} alt="" /></span></div>
                </div>
            )

            )}
        </div>
    </div>
  )
}

export default Programme