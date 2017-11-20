
var mh = require('..');

exports['solve one word'] = function (test) {
	var tree = mh.tree().add('maps');
	
	var result = tree.solve(['p1', 'a', 'm2', 's3']);
	
	test.ok(result);
	test.equal(result.length, 1);
	test.deepEqual(result[0], ['maps', 6]);
}

exports['solve one word no result'] = function (test) {
	var tree = mh.tree().add('maps');
	
	var result = tree.solve(['p1', 'a', 'm2']);
	
	test.ok(result);
	test.deepEqual(result.length, 0);
}

exports['solve two words returning one word'] = function (test) {
	var tree = mh.tree().add(['maps', 'foo']);
	
	var result = tree.solve(['p3', 'a', 'm2', 's1']);
	
	test.ok(result);
	test.equal(result.length, 1);
	test.deepEqual(result[0], ['maps', 6]);
}

exports['solve word repeating vowel a'] = function (test) {
	var tree = mh.tree().add(['maps', 'papa']);
	
	var result = tree.solve(['a', 'p1', 'p1']);
	
	test.ok(result);
	test.equal(result.length, 1);
	test.deepEqual(result[0], ['papa', 2]);
}

exports['solve word repeating vowel e'] = function (test) {
	var tree = mh.tree().add(['maps', 'fee']);
	
	var result = tree.solve(['e', 'f3']);
	
	test.ok(result);
	test.equal(result.length, 1);
	test.deepEqual(result[0], ['fee', 3]);
}

exports['solve word repeating vowel i'] = function (test) {
	var tree = mh.tree().add(['maps', 'bikini']);
	
	var result = tree.solve(['i', 'b1', 'k1', 'n2']);
	
	test.ok(result);
	test.equal(result.length, 1);
	test.deepEqual(result[0], ['bikini', 4]);
}

exports['solve word repeating vowel o'] = function (test) {
	var tree = mh.tree().add(['maps', 'foo']);
	
	var result = tree.solve(['o', 'f3']);
	
	test.ok(result);
	test.equal(result.length, 1);
	test.deepEqual(result[0], ['foo', 3]);
}

exports['solve word repeating vowel u'] = function (test) {
	var tree = mh.tree().add(['maps', 'bululu']);
	
	var result = tree.solve(['u', 'b1', 'l2', 'l2']);
	
	test.ok(result);
	test.equal(result.length, 1);
	test.deepEqual(result[0], ['bululu',5]);
}

exports['solve two words no result'] = function (test) {
	var tree = mh.tree().add(['maps', 'foo']);
	
	var result = tree.solve(['p1', 'a', 'm2']);
	
	test.ok(result);
	test.equal(result.length, 0);
}

exports['solve two similar words no result'] = function (test) {
	var tree = mh.tree().add(['four', 'foo']);
	
	var result = tree.solve(['f1']);
	
	test.ok(result);
	test.equal(result.length, 0);
}

exports['solve word using less letters'] = function (test) {
	var tree = mh.tree().add(['bar', 'barrister']);
	
	var result = tree.solve(['b2', 'a', 'r1', 'i']);
	
	test.ok(result);
	test.equal(result.length, 1);
	test.deepEqual(result[0], ['bar', 3]);
}

exports['solve two words returning two words'] = function (test) {
	var tree = mh.tree().add(['maps', 'spam']);
	
	var result = tree.solve(['p1', 'a', 'm2', 's1']);
	
	test.ok(result);
	test.equal(result.length, 2);
	test.deepEqual(result[0], ['maps', 4]);
	test.deepEqual(result[1], ['spam', 4]);
}

