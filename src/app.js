console.log('APP.JS IS RUNNING')

// To run this ...
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public


//JSX - JavaScript XML
var template = <h1>Indecsion App</h1>;
var appRoute = document.getElementById("app")

ReactDOM.render(template, appRoute);