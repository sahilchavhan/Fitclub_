import React, {useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
const handle = (e)=>{
    alert("thank you!!");
}

    const form =useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_djp224r', 'template_srtyvxs', form.current, 'r1knuUSBeJI9hEk7I')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='Join' id='Join1'>
        <div className="herotext">
            <div><span className='hollowtext'>READY TO</span><span style={{color:'white'}}> LEVEL UP</span></div>
            <div><span>YOUR BODY</span><span className='hollowtext'>  WITH US ?</span></div>
          </div>
        <div className='rightpart'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_email" placeholder='Enter your e-mail address ' className='input'/>
                <button id='join' onClick={handle}>JOIN NOW</button>
            </form>
        </div>
    </div>
  )
}

export default Join