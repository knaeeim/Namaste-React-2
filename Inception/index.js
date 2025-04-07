const heading = React.createElement("h1", { }, "Hello World From React!!");

// Here How you can create a React Element nested inside another React Element
const content = [
  // this is first element and inside this we are creating another 2 elements
  React.createElement("div", { id: "Parent-1" }, [
    React.createElement("h1", {}, "Hello World From React!!"),
    React.createElement("h2", {}, "Hello World From React indside the H2 Tag!!"),
  ]), // Here we are creating another element with id Parent-1
  // this is second element and inside this we are creating another 2 elements
  React.createElement("div", { id: "Parent-1" }, [
    React.createElement("h1", {}, "Hello World From React!!"),
    React.createElement("h2", {}, "Hello World From React indside the H2 Tag!!"),
  ]),
];

// Now we are creating a root element using ReactDOM
// ReactDOM is a library that allows us to render React elements to the DOM
// ReactDOM.createRoot is a method that creates a root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Now we are rendering the content to the root element
root.render(content);
