import React from 'react';
import  '../../../src/index.css';
import zuriImage from'../Images/zuri.png';
import ingressive from '../Images/81fb9cf09e10f1e8bb7ac85e615baa89.png';

const Firstimage =()=> {
    return(
        <img src={zuriImage} alt="internship" id='zuriinternship' />
    )
}

const Second =()=> {
    return (
        <h5 id="lasttext">HNG Internship 9 Frontend Task</h5>
    )
}

const Third =()=> {
    return (
        <img src={ingressive} alt="" id='ingressive'/>
    )
}



class Footer extends React.Component{
    render(){  
    return ( 
        <div class="bottom">
        <Firstimage/>
        <Second/>
        <Third/>
        </div>
     );
    }
}
 
export default Footer;