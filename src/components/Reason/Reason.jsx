import React from 'react'
import './Reason.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import nike from '../../assets/nike.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'



const Reason = () => {
  return (
    <div className='Reason' id='Reason'>
        <div className='left'>
            <div id='one'><img src={image1} alt="" /></div>
            <div id='two'>
                <div><img src={image2} alt="" className='image2'/></div>
                <div className='three'>
                    <img src={image3} alt="" className='image3'/>
                    <img src={image4} alt="" className='image4'/>
                </div>
            </div>
        </div>
        <div className='right'>
            <div className='first'>SOME REASONS</div>
            <div className='second'>WHY CHOOSE US ?</div>
            <div className='third'>
                <div><img src={tick} alt="" /> OVER 140+ EXPERT COACHES</div>
                <div><img src={tick} alt="" /> TRAIN SMARTER AND FASTER THAN BEFORE</div>
                <div><img src={tick} alt="" /> 1 FREE PROGRAMME FOR NEW MEMBER</div>
                <div><img src={tick} alt="" />RELIABLE PARTNERS</div>
            </div>
            <div className='first'>OUR PARTNERS</div>
            <div className='fifth'>
                    <span><img src={adidas} alt="" />  </span>  
                    <span><img src={nb} alt="" /></span>
                    <span><img src={nike} alt="" /></span>
            </div>
        </div>

    </div>
  )
}

export default Reason