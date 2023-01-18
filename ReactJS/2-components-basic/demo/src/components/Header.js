import React from "react";

export const Header = (props) => {
    //const reactElement = React.createElement('h1', {}, 'Hello React');

    //const reactElement = <h1>Hello from JSX</h1>;
    //const reactElement = <h1>{props.title}</h1>;
    const reactElement = <h1>{props.children}</h1>;

    return reactElement;
};

//export default Header;