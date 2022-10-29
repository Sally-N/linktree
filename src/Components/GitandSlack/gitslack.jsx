import React from 'react';
import slackImage from '../Images/slack.png';
import githubImage from '../Images/GitHub-Mark.png';
import  '../../../src/index.css';

const Slackicon =()=> {
    return (
        <img src={slackImage}  alt='slackImage' id='slackIcon'/>
    )
}

const Giticon =()=>{

    return(
        <a href="https://github.com/Sally-N/" id='gitwrap'>
    <img src={githubImage} alt='Githublink' id='gitIcon'/>
     </a>)
    
}

class Gitandslack extends React.Component{
    render(){  
    return ( 
        <div class="smallicons">
        <Slackicon/>
        <Giticon/>
        </div>
     );
    }
}
 
export default Gitandslack;
