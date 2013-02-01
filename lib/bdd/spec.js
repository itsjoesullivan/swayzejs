var describe = require('./describe');
var casper = require('casper').create();
casper.start();
describe('Google.com', function() { 
	it('has a title', function() {
		casper.open("http://www.google.com").then(function() {
			var title = casper.evaluate(function() { return document.title; });
			expect(title === "Google", "title is google");
		});
	});
	it('has property hello', function() {
		expect(typeof x.hello !== 'undefined');
	});
});
casper.then(function() {
	describe.report();
})
casper.run();
