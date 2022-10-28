/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import  '../../../src/index.css';
// eslint-disable-next-line no-unused-vars
const ZbooksUrl =()=>
{
    return (
        <div class="similar">
       <a href="https://books.zuri.team/" class="linktext">Zuri Team</a>
       </div>
    )
}
class ZuriBooks extends React.Component {    
    render(){
            return (
            <ZbooksUrl/>
        );
            }
    }

export default ZuriBooks;