var test = require('tape');

var shimAllTheThings = require('../');
shimAllTheThings();

test('has ES6 methods', function (t) {
	var target = {};
	var source = { a: 1, b: 2 };
	Object.assign(target, source);
	t.deepEqual(target, { a: 1, b: 2 });
	t.ok(Number.isNaN(NaN), 'NaN is NaN');
	t.end();
});

test('has String#normalize', function (t) {
	t.throws(function () { 'foo'.normalize('NFF'); }, RangeError);
	t.equal('äiti'.normalize('NFC'), '\u00e4\u0069\u0074\u0069');
	t.end();
});

