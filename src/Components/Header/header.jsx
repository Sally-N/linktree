import React from 'react';
import './header.css';
import userImage from '../Images/userImage.jpg';

// eslint-disable-next-line no-unused-vars
const Profileimage = () => {
    return (
        <div>
    <img src={userImage} alt='profileImage' id='profilepic'/>
    </div>
    )
}


// eslint-disable-next-line no-unused-vars
const Myname =()=>
{
    return <h3 id='Name'>Sally Nzungula</h3>
}

class Header extends React.Component{
  render(){  
    return ( 
        <div class="headerpart">
            <Profileimage/>
            <Myname/>
        </div>
     );
    }
}
 
export default Header;