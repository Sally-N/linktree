/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import  '../../../src/index.css';
// eslint-disable-next-line no-unused-vars
const ContactLink =()=>
{
    return (
       < a href="/contact" class="linktext" id='contact'>Contact Me</a>
    )
}
class Clink extends React.Component {    
    render(){
            return (
            <ContactLink/>
        );
            }
    }

export default Clink;