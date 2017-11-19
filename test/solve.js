
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

exports['solve word repeating vowel a'] = function (test) {
	var tree = mh.tree().add(['maps', 'papa']);
	
	var result = tree.solve(['a', 'p', 'p']);
	
	test.ok(result);
	test.equal(result.length, 1);
	test.equal(result[0], 'papa');
}

exports['solve word repeating vowel e'] = function (test) {
	var tree = mh.tree().add(['maps', 'fee']);
	
	var result = tree.solve(['e', 'f']);
	
	test.ok(result);
	test.equal(result.length, 1);
	test.equal(result[0], 'fee');
}

exports['solve word repeating vowel i'] = function (test) {
	var tree = mh.tree().add(['maps', 'bikini']);
	
	var result = tree.solve(['i', 'b', 'k', 'n']);
	
	test.ok(result);
	test.equal(result.length, 1);
	test.equal(result[0], 'bikini');
}

exports['solve word repeating vowel o'] = function (test) {
	var tree = mh.tree().add(['maps', 'foo']);
	
	var result = tree.solve(['o', 'f']);
	
	test.ok(result);
	test.equal(result.length, 1);
	test.equal(result[0], 'foo');
}

exports['solve word repeating vowel u'] = function (test) {
	var tree = mh.tree().add(['maps', 'bululu']);
	
	var result = tree.solve(['u', 'b', 'l', 'l']);
	
	test.ok(result);
	test.equal(result.length, 1);
	test.equal(result[0], 'bululu');
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

exports['solve word using less letters'] = function (test) {
	var tree = mh.tree().add(['bar', 'barrister']);
	
	var result = tree.solve(['b', 'a', 'r', 'i']);
	
	test.ok(result);
	test.equal(result.length, 1);
	test.equal(result[0], 'bar');
}

exports['solve two words returning two words'] = function (test) {
	var tree = mh.tree().add(['maps', 'spam']);
	
	var result = tree.solve(['p', 'a', 'm', 's']);
	
	test.ok(result);
	test.equal(result.length, 2);
	test.equal(result[0], 'maps');
	test.equal(result[1], 'spam');
}



