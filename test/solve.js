
var mh = require('..');

exports['solve one word'] = function (test) {
	var tree = mh.tree().add('maps');
	
	var result = tree.solve(['p', 'a', 'm', 's']);
	
	test.ok(result);
	test.equal(result.length, 1);
	test.equal(result[0], 'maps');
}


