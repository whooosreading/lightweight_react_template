require("file-loader?name=index.html!./index.html");

window.$ = require("jquery");
window._ = require("underscore");

require("bootstrap-loader");
require("react-spinner/react-spinner.css")

window.React = require("react");
window.ReactDOM = require("react-dom");

var App = require('App');

var main = document.getElementById("main");

var uiElement = React.createElement(App, { path: window.location.pathname });
ReactDOM.render(uiElement, main);