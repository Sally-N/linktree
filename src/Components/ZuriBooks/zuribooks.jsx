/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import  '../../../src/index.css';
// eslint-disable-next-line no-unused-vars
const ZbooksUrl =()=>
{
    return (
       <a href="https://books.zuri.team/" class="linktext" id='books'>Zuri Books</a>
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