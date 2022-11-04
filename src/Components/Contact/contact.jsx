
import '../../../src/index.css';


function ContactForm(params) {

    return (
        <div class="formPage">
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
                        <form action="">
                            <div id="formfields">
                                <div className='namerow'>
                                    <div className='nameArea'>
                                        <label htmlFor="First Name">First Name</label>
                                        <input type="text" id="first_name" placeholder='Enter your first name' />
                                    </div>
                                    <div className='nameArea'>
                                        <label htmlFor="First Name">Last Name</label>
                                        <input type="text" id="last_name" placeholder='Enter your last name' />
                                    </div>
                                </div>
                                <div className='emailArea'>
                                    <label htmlFor="">Email</label>
                                    <input type="text" id='email' placeholder='yourname@email.com' />
                                </div>
                                <div className='MessageArea'>
                                    <label htmlFor="">Message</label>
                                    <textarea name="" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible...">
                                    </textarea>
                                </div>
                                <div className='checkbox'>
                                    <input type="checkbox" />
                                   {/* <p>You agree to providing your data to {name} who may contact you.</p> */}
                                </div>

                            </div>
                        </form>
                    </div>

                </div>


            </header>
            <footer>

            </footer>

        </div>
    )
}

ContactForm();
