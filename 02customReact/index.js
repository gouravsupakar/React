// Create a function to create new elemwnts

function customReactRender(reactElement, container){

    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;

    // to set attributes
    
    for (const prop in reactElement.props) {
        if(prop === "children")continue;
        domElement.setAttribute(prop , reactElement.props[prop]);
    }

    container.appendChild(domElement);
}






const reactElement = {
    type : "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },

    children: "Click here to visit Google."
}

const reactElement2 = {
    type: "p",
    props: {
        id: "myP",
        style: "background-color: red;"
    },

    children: "My name is slim shady"
}

const container = document.getElementById('root');

customReactRender(reactElement , container);

customReactRender(reactElement2, container);