var ApiActions = require('../actions/api_actions.js');

ApiUtil = {
  fetchBenches: function(bounds){
		$.ajax({
			url: "api/benches",
			data: {bounds: bounds},
			success: function (benches) {
				ApiActions.receiveAll(benches);
			}
		});
  },

	createBench: function (bench) {
   $.ajax({
     url: "api/benches",
     method: "POST",
     data: {bench: bench}
		});
	}
};
module.exports = ApiUtil;
