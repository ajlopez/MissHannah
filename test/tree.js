
var mh = require('..');

exports['create tree as object'] = function (test) {
	var tree = mh.tree();
	
	test.ok(tree);
	test.equal(typeof tree, 'object');
}

exports['no words'] = function (test) {
	var tree = mh.tree();
	var words = tree.words();
	
	test.ok(words);
	test.equal(typeof words, 'object');
	test.equal(Object.keys(words).length, 0);
}

