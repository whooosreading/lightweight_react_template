require("file-loader?name=index.html!./index.html");

window.React = require("react");
window.ReactDOM = require("react-dom");
window.$ = require("jquery");
window._ = require("underscore");

require('bootstrap-loader');

var App = require('./js/App.js');

var main = document.getElementById("main");

var uiElement = React.createElement(App, { path: window.location.pathname });
ReactDOM.render(uiElement, main);