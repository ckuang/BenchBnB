var React = require('react');
var ApiUtil = require('../util/api_util.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var BenchForm = React.createClass({
	mixins: [LinkedStateMixin],
	blankAttrs: {
		lat: '',
		lng: '',
		description: '',
		seating: ''
	},
	getInitialState: function () {
		return this.blankAttrs;
	},
	createBench: function (event) {
		event.preventDefault();
		var bench = {};
		Object.keys(this.state).forEach(function (key) {
			bench[key] = this.state[key];
		}.bind(this));
		ApiUtil.createBench(bench);
		this.setState(this.blankAttrs);
	},
	render: function () {
		return (

			<form onSubmit={this.createBench}>

				<label> Latitude
    			<input
						type="text"
						valueLink={this.linkState("lat")} />
  			</label>

			  <label> Longitude
			    <input
						type="text"
						valueLink={this.linkState("lng")} />
			  </label>

				<label> Description
			    <input
						type="text"
						valueLink={this.linkState("description")} />
			  </label>

				<label> Seating
			    <input
						type="text"
						valueLink={this.linkState("seating")} />
			  </label>

				<button> Create Bench </button>

			</form>

		);
	}
});

module.exports = BenchForm;
