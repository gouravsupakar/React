import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Bhai from './Bhai.jsx'                //default import
import { ChotaBhai }  from './Bhai.jsx'       // Named import

// we know that App.jsx is just a function and this function is passed in the render method and then React using a bundler converts into a tree format
// function Chai(){
//   return(
//     <div>
//       <h1>masala chai nahi bani hai kya</h1>
//     </div>
//   );
// }

// but we cant use our custom reactElement

// this code will not work since we have made it our self it is not written accordin to the react syntax

// const reactElement = {
//   type: 'a',
//   props: {               // these are the properties of HTML element that we are going to create
//       href: 'https://google.com',
//       traget: '_blank'
//   },
//   children: "Click me to visit google"
// }

const anotherElement = "chai aur react";

// React syntax to create element

const ReactElement = React.createElement(
  'a',                                                // 1st parameter name of the html element should be here
  {href:"https://google.com", target: "_blank"},       // 2nd parameter should be a object here we define properties in key value pair
  "Click here to visit google",                        // 3rd parameter should be the children lis a message
  anotherElement                                       // 4th and final should be a variable injection as a evaulated expression
);


ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
)


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//    <App/>
//    <ChotaBhai/>
//    <Bhai/>
//   </React.StrictMode>
  
// )
