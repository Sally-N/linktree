import React from 'react';
import userImage from '../Images/userImage.jpg';
// import arrow from '../Images/arrow.png';

import  '../../../src/index.css';

// eslint-disable-next-line no-unused-vars
const Profileimage = () => {
    return (
    <img src={userImage} alt='profileImage' id='profile__img'/>
    )
}

// const Arrow = ()=> {
//     return (
//         <img src={arrow} alt='arrow' id='arrow'/>
//     )
// }


// eslint-disable-next-line no-unused-vars
const Myname =()=>
{
    return (<h3 id='twitter'>talia_kin</h3>);
}

const Slack =()=>
{
    return (<h3 id='slack'>snzungula</h3>);
}

class Header extends React.Component{
  render(){  
    return ( 
        <div class="headerpart">
            <Profileimage/>        
            <Myname/>
            <Slack/>           
        </div>
     );
    }
}
 
export default Header;