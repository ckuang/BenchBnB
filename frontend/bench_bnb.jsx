var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var ApiUtil = require('./util/api_util.js');
var Search = require('./components/search.jsx');
var BenchForm = require('./components/benchform.jsx');
var IndexRoute = ReactRouter.IndexRoute;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var App = React.createClass({
	render: function(){
		return (
				<div>
					<header><h1>Bench BnB</h1></header>
					{this.props.children}
				</div>
		);
	}
});

var routes = (
		<Route path="/" component={App}>
			<IndexRoute component={BenchForm}/>
		</Route>
);

$(function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
