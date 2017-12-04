require("file-loader?name=index.html!./index.html");

var React = require("react");
var ReactDOM = require("react-dom");

var App = require('./js/App.js');

var main = document.getElementById("main");

var uiElement = React.createElement(App, {});
ReactDOM.render(uiElement, main);