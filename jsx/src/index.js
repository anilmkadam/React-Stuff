// import the react and react-dom liabraries
import React from 'react';
import ReactDom from 'react-dom';

// Create a react component
const App = () => {
    const style = { backgroundColor : 'blue', color : 'white'} ;
    const lableText = "Enter Name : " ;
    return (
    <div> 
        Hello Geeks!!, This is my first react project.
        <br />
        <label htmlFor = "name" >{ lableText } </label>
        <input id = "name" type = "text"></input>
        <button style = {style} >Submit</button>
    </div>
    );
}

// Take a react component and show it on the screen 
ReactDom.render(
    <App />,
    document.querySelector('#root')
);