var React = require('react');
var BenchStore = require('../stores/benches.js');
var ApiUtil = require('../util/api_util.js');
var Map = require('./map');

var Index = React.createClass ({
	getInitialState: function () {
		return { benches: [] };

  },

  _onChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function () {
    this.benchListener = BenchStore.addListener(this._onChange);
  },

  compomentWillUnmount: function () {
    this.benchListener.remove();
  },

  render: function () {
		var benches = [];
		for (var i = 0; i < this.state.benches.length; i++) {
			var bench = this.state.benches[i];
			benches.push(bench);
		}

		return(
				<ul>
				{benches.map(function (bench, idx) {
					return <li key={idx}>{bench.lat} {bench.lng}</li>;
        })}
				</ul>

    );
  }
});

module.exports = Index;
