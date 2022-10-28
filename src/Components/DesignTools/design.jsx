/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import  '../../../src/index.css';
// eslint-disable-next-line no-unused-vars
const DbooksUrl =()=>
{
    return (
        <div class="similar">
       <a href="https://books.zuri.team/design-rules /" class="linktext">Zuri Team</a>
       </div>
    )
}
class DesignBooks extends React.Component {    
    render(){
            return (
            <DbooksUrl/>
        );
            }
    }

export default DesignBooks;