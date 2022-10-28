/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import  '../../../src/index.css';
// eslint-disable-next-line no-unused-vars
const DbooksUrl =()=>
{
    return (
       <a href="https://books.zuri.team/design-rules /" class="linktext" id='book__design'>Design Books</a>
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