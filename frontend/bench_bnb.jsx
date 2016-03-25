var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('./util/api_util.js');
var BenchStore = require('./stores/benches.js');
var Search = require('./components/search.jsx');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Search />,
    document.getElementById('root')
  );
});
