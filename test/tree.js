
var mh = require('..');

exports['create tree as object'] = function (test) {
	var tree = mh.tree();
	
	test.ok(tree);
	test.equal(typeof tree, 'object');
}

