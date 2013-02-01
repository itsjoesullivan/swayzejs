var suites = [];
var describe = function(noun, fn) {
	var obj = {
		noun: noun,
		tests: []
	};
	casper.then(function() {
	it = function(adj, fn) {
		casper.then(function() {
		var res = {
			adj: adj,
			specs: []
		};
		
		expect = function(test, message) {
			res.specs.push({
				status: test,
				message: message || ''
			});
		};
		casper.then(function() {
			try {
				fn();
			} catch (e) {
			//	res = false;
			}
			obj.tests.push(res);
		});
		});
	};
	});
	casper.then(fn);
	casper.then(function() {
		suites.push(obj);
	});
};
var report = function() {
	casper.then(function() {

		for (var i in suites) {
			var noun = suites[i].noun;
			console.log("Testing: " + noun);
			var suite = suites[i];
			for (var i in suite.tests) {
				var test = suite.tests[i];
				var status = true;
				for (var i in test.specs) {
					var spec = test.specs[i]
					if (!spec.status) {
						status = false;
					}
				}
				var mark = "\u2713";
				if (!test.specs.length) {
					mark = "?";
				}
				if (!status) {
					mark = "\u2717";
				}
				console.log('\t' + mark + ' ' + test.adj);
			}

		};
	})
}
describe.report = report;
module.exports = describe;
