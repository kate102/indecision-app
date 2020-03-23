"use strict";

console.log('APP.JS IS RUNNING');

// To run this ...
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public


//JSX - JavaScript XML
var template = React.createElement(
  "h1",
  null,
  "Indecsion App"
);
var appRoute = document.getElementById("app");

ReactDOM.render(template, appRoute);
