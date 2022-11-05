import React from 'react';
import '../../../src/index.css';
import '../Contact/contactfile.css'
import { useState } from 'react';
import zuriImage from'../Images/zuri.png';
import ingressive from '../Images/81fb9cf09e10f1e8bb7ac85e615baa89.png';

const ContactFormPage = ()  => {
    const [open, setOpen] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            checkbox: ''
        }
    );

   const handleChange = (event) => {
    setOpen({
            firstName: event.target.value,
            lastName: event.target.value,
            email: event.target.value,
            message: event.target.value,
            checkbox: event.target.value
        });
    }


   const handleSubmit = (event) => {
        event.preventDefault()
    }



    // eslint-disable-next-line no-undef
         return (
            <div className='formPage'>
                <header className='containerContactPage'>
                    <div className='contentCP'>
                        <div id="FormWrapper">
                            <div id="formHeading">
                                <h3 id="contactMe">
                                    Contact Me
                                </h3>
                                <h6 id="sub-head">
                                    Hi there, contact me to ask me about anything you have in mind.
                                </h6>
                            </div>
                            {/* eslint-disable-next-line no-undef */}
                            <form action="" onSubmit={handleSubmit}>
                                <div id="formfields">
                                    <div className='namerow'>
                                        <div className='nameArea'>
                                            <label htmlFor="first_name">First Name</label>
                                            {/* eslint-disable-next-line no-undef */}
                                            <input type="text" id="first_name" placeholder='Enter your first name' onChange={handleChange}
                                                name='firstName' value={open.firstName} required />
                                        </div>
                                        <div className='nameArea'>
                                            <label htmlFor="last_name">Last Name</label>
                                            {/* eslint-disable-next-line no-undef */}
                                            <input type="text" id="last_name" placeholder='Enter your last name' onChange={handleChange}
                                                name='lastName' value={open.lastName} required />
                                        </div>
                                    </div>
                                    <div className='emailArea'>
                                        <label htmlFor="email">Email</label>                                        
                                        {/* eslint-disable-next-line no-undef */}
                                        <input type="text" id='email' placeholder='yourname@email.com' onChange={handleChange}
                                            name='email' value={open.email} required />
                                    </div>
                                    <div className='messageArea'>
                                        <label htmlFor="">Message</label>
                                       {/* eslint-disable-next-line no-undef */}
                                        <textarea name="messages" onChange={handleChange} value={open.message}
                                        id="message"  placeholder="Send me a message and I'll reply you as soon as possible...">                                           
                                        </textarea>
                                    </div>
                                    <div className='checkBox'>
                                        <input type="checkbox" id='checkbbox'/>
                                        <p>You agree to providing your data to Sally who may contact you.</p>
                                    </div>
                                    <div className='buttonArea'>
                                    <button id='btn__submit'>Send Message</button>
    
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>


                </header>
               <section className='Footer'>
               <img src={zuriImage} alt="internship" id='zuriinternship' />
               <h5 id="lasttext">HNG Internship 9 Frontend Task</h5>
               <img src={ingressive} alt="" id='ingressive'/>

               </section>
            </div>
        )
    }





export default ContactFormPage;

