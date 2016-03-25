var React = require('react');
var BenchStore = require('../stores/benches.js');
var ApiUtil = require('../util/api_util.js');

var Index = React.createClass ({
	getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  _onChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function () {
    this.benchListener = BenchStore.addListener(this._onChange);
    ApiUtil.fetchBenches();
  },

  compomentWillUnmount: function () {
    this.benchListener.remove();
  },

  render: function () {
		var output = [];
		for (var i = 0; i < this.state.benches.length; i++) {
			output.push(this.state.benches[i]);
		}
		return(
				<ul>
				{this.state.benches.map(function (bench) {
          return <li> {bench.lat} {bench.lng}</li> ;
        })}
				</ul>

    );
  }
});

module.exports = Index;
