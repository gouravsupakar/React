
function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type);
      
    // domElement.innerHTML = reactElement.children;

    // domElement.setAttribute('href', reactElement.props.herf);
    // domElement.setAttribute('target', reactElement.props.traget);

    // container.appendChild(domElement);



    // modular code:-

    const domElement = document.createElement(reactElement.type);
      
    domElement.innerHTML = reactElement.children;

    // setting attributes with loops

    for (const prop in reactElement.props) {
       if(prop === 'children') continue;
       domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
    
}


 // At the end of the day this how react sees our HTML element that we pass it through our  function after it compiles it
// React is expecting a function and then it converst it into a object as per their syntax we cannot pass a object as React is expecting a function not a object
// In the above function we have shown how we are passing this object data through our function
// React tries to make a tree out of whatever Html element is passed
//this is all the work of react under the hood
 const reactElement = {
    type: 'a',
    props: {               // these are the properties of HTML element that we are going to create
        href: 'https://google.com',
        traget: '_blank'
    },
    children: "Click me to visit google"
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);