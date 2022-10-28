/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import  '../../../src/index.css';
// eslint-disable-next-line no-unused-vars
const TwitterUrl =()=>
{
    return (
       <a href="https://twitter.com/talia_kin" class="linktext" id='first'>Twitter Link</a>
    )
}
class Twitter extends React.Component {    
    render(){
            return (
            <TwitterUrl />
        );
            }
    }

export default Twitter;