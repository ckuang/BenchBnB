var React = require('react');
var BenchStore = require('../stores/benches.js');
var ApiUtil = require('../util/api_util.js');

var benches = [];

var Map = React.createClass({
	getInitialState: function () {
		return { benches: [] };
  },

	_onChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

	componentDidMount: function(){
		this.benchListener = BenchStore.addListener(this._onChange);

		var mapDOMNode = this.refs.map;
		var mapOptions = {
			center: {lat: 40.72493, lng: -73.996704},
			zoom: 5
		};
		this.map = new google.maps.Map(mapDOMNode, mapOptions);
		var that = this.map;
		this.map.addListener('idle', function() {
			var latlngbounds = that.getBounds();
			n = latlngbounds.getNorthEast().lat();
			s = latlngbounds.getSouthWest().lat();
			e = latlngbounds.getNorthEast().lng();
			w = latlngbounds.getSouthWest().lng();
			var bounds = {};
			bounds.northEast = {lat: n, lng: e};
			bounds.southWest = {lat: s, lng: w};
			ApiUtil.fetchBenches(bounds);
		});

		},

	render: function () {
		for (var b = 0; b < benches.length; b++) {
			benches[b].setMap(null);
		}
		benches = [];
		for (var i = 0; i < this.state.benches.length; i++) {
			var bench = this.state.benches[i];
			var benchlatlng = new google.maps.LatLng(bench.lat, bench.lng);
			var marker = new google.maps.Marker({
				position: benchlatlng,
				title: "bench" + i
			});
			benches.push(marker);
		}

		for (var a = 0; a < benches.length; a++) {
			benches[a].setMap(this.map);
		}

		return (
			<div className="map" ref="map">

			</div>
		);
	}
});


module.exports = Map;
