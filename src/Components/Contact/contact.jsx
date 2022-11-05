import React from 'react';
import 'contact.css';
import Footer from '../Footer/footer';
import '../../../src/index.css'

class ContactFormPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            checkbox: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({
            firstName: event.target.value,
            lastName: event.target.value,
            email: event.target.value,
            message: event.target.value,
            checkbox: event.target.value
        });
    }


    handleSubmit(event) {
        event.preventDefault()
    }



    render() {

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
                                                name='firstName' value={this.state.firstName} required />
                                        </div>
                                        <div className='nameArea'>
                                            <label htmlFor="last_name">Last Name</label>
                                            {/* eslint-disable-next-line no-undef */}
                                            <input type="text" id="last_name" placeholder='Enter your last name' onChange={handleChange}
                                                name='lastName' value={this.state.lastName} required />
                                        </div>
                                    </div>
                                    <div className='emailArea'>
                                        <label htmlFor="email">Email</label>                                        
                                        {/* eslint-disable-next-line no-undef */}
                                        <input type="text" id='email' placeholder='yourname@email.com' onChange={handleChange}
                                            name='email' value={this.state.email} required />
                                    </div>
                                    <div className='MessageArea'>
                                        <label htmlFor="">Message</label>
                                       {/* eslint-disable-next-line no-undef */}
                                        <textarea name="messages" onChange={handleChange} value={formData.comments}
                                        id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible...">                                           
                                        </textarea>
                                    </div>
                                    <div className='checkBox'>
                                        <input type="checkbox" id='checkbbox'/>
                                        <p>You agree to providing your data to Sally who may contact you.</p>
                                    </div>
                                    <button id='btn__submit'>Send Message</button>
                                </div>
                            </form>
                        </div>

                    </div>


                </header>
                <Footer></Footer>
            </div>
        )
    }

}


export default ContactFormPage;

