
var mh = require('..');

exports['solve one word'] = function (test) {
	var tree = mh.tree().add('maps');
	
	var result = tree.solve(['p', 'a', 'm', 's']);
	
	test.ok(result);
	test.equal(result.length, 1);
	test.equal(result[0], 'maps');
}

exports['solve one word no result'] = function (test) {
	var tree = mh.tree().add('maps');
	
	var result = tree.solve(['p', 'a', 'm']);
	
	test.ok(result);
	test.equal(result.length, 0);
}

exports['solve two words returning one word'] = function (test) {
	var tree = mh.tree().add(['maps', 'foo']);
	
	var result = tree.solve(['p', 'a', 'm', 's']);
	
	test.ok(result);
	test.equal(result.length, 1);
	test.equal(result[0], 'maps');
}

exports['solve two words no result'] = function (test) {
	var tree = mh.tree().add(['maps', 'foo']);
	
	var result = tree.solve(['p', 'a', 'm']);
	
	test.ok(result);
	test.equal(result.length, 0);
}

exports['solve two similar words no result'] = function (test) {
	var tree = mh.tree().add(['four', 'foo']);
	
	var result = tree.solve(['f']);
	
	test.ok(result);
	test.equal(result.length, 0);
}

exports['solve two words returning two words'] = function (test) {
	var tree = mh.tree().add(['maps', 'spam']);
	
	var result = tree.solve(['p', 'a', 'm', 's']);
	
	test.ok(result);
	test.equal(result.length, 2);
	test.equal(result[0], 'maps');
	test.equal(result[1], 'spam');
}



