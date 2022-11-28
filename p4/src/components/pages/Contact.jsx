import React,{useRef} from 'react'
import Iframe from 'react-iframe'
import emailjs from '@emailjs/browser';
import * as MdIcons from 'react-icons/md'
import './Contact.css'
import 'animate.css'
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_yrqt3v9', 'template_o4zgfwe', form.current, 'ljWGCvqVBFgClHLHo')
        .then(() => {
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='contact'>
        <div className="part1">
          <h5><MdIcons.MdArrowBackIosNew className='tag'/> h2 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
          <div className="heading">
            <h1 >Contact me</h1>
          </div>
          <h5><MdIcons.MdArrowBackIosNew className='tag'/> /h2 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
          <div className="paragraf">
          <h5><MdIcons.MdArrowBackIosNew className='tag'/> p <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
            <p >I'am interested in freelence opportunities-especialy ambitious or <br />
              large projects.However,if you have other request or question,<br />
              don't hesitate to use the form.
            </p>
          <h5><MdIcons.MdArrowBackIosNew className='tag'/> /p <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
          </div>
          <h4><MdIcons.MdArrowBackIosNew className='tag'/> form <MdIcons.MdOutlineArrowForwardIos className='tag'/></h4>
            <div  className="box">
                <div className="form">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="input-box">
                            <input type="text" name="user_name" required="required"/>
                            <span>Full Name</span>
                            </div>
                            <div className="input-box">
                            <input type="email" name="user_email" required="required" />
                            <span>Email</span>
                            </div>
                            <div className="input-box">
                            <textarea name="message" placeholder='Message' />
                            </div>
                            <div className="input-box2">
                              <input type="submit" value="Send message!" />
                            </div>
                        </form>
                </div>
            </div>
          <h5 style={{marginTop:"20px"}}><MdIcons.MdArrowBackIosNew className='tag'/> /form <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
          <h4><MdIcons.MdArrowBackIosNew className='tag'/> /body <MdIcons.MdOutlineArrowForwardIos className='tag'/></h4>
          <h3><MdIcons.MdArrowBackIosNew className='tag'/> /html <MdIcons.MdOutlineArrowForwardIos className='tag'/></h3>
        </div>
        <div className="part2" >
          <div className="informations">
              <p>Amin Salkovic</p>
              <p>Novi Pazar,Serbia</p>
              <p id='mail'>@ aminsalkovic2019@gmail.com</p>
          </div>
       <Iframe width="100%" height="100%" id="gmap_canvas" url="https://maps.google.com/maps?q=Novi%20Pazar%20&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></Iframe>
        </div>
    </div>
  )
}

export default Contact