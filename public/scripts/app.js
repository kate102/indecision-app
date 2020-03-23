console.log('APP.JS IS RUNNING')

//JSX - JavaScript XML
// var template = <p>This is JSX from app.js</p>;
var template = React.createElement(
    "h2",
    { id: "someid" },
    "Something New"
);
var appRoute = document.getElementById("app")

ReactDOM.render(template, appRoute);