
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

exports['initial word'] = function (test) {
	var tree = mh.tree({ 'm': { 'a': { 'n': { '$': {} } } } });
	var words = tree.words();
	
	test.ok(words);
	test.ok(words.m);
	test.ok(words.m.a);
	test.ok(words.m.a.n);
	test.ok(words.m.a.n.$);
}

exports['add word'] = function (test) {
	var tree = mh.tree();
	tree.add('foo');
	
	var words = tree.words();
	
	test.ok(words);
	test.ok(words.f);
	test.ok(words.f.o);
	test.ok(words.f.o.o);
	test.ok(words.f.o.o.$);
}

