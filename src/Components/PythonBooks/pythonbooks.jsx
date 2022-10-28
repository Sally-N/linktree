/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import  '../../../src/index.css';
// eslint-disable-next-line no-unused-vars
const PbooksUrl =()=>
{
    return (
       <a href="https://books.zuri.team/python-for-beginners?ref_id=khal" class="linktext" id="book__python">Python Books</a>
    )
}
class PythonBooks extends React.Component {    
    render(){
            return (
            <PbooksUrl/>
        );
            }
    }

export default PythonBooks;