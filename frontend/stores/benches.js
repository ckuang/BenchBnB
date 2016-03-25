var Store = require('flux/utils').Store;
var BenchDispatcher = require('../dispatcher/dispatcher.js');
var BenchStore = new Store(BenchDispatcher);
var BenchConstants = require('../constants/bench_constants');

var _benches = [];

var resetBenches = function(benches){
	_benches = benches;
};

BenchStore.all = function () {
  return _benches.slice(0);
};

BenchStore.__onDispatch = function (payload) {
	switch(payload.actionType) {
		case BenchConstants.BENCHES_RECEIVED:
			resetBenches(payload.benches);
			BenchStore.__emitChange();
			break;
	}
};


module.exports = BenchStore;
