
var mh = require('../..');
var english = require('../../data/english.json');

var letters = process.argv.slice(2);

var tree = mh.tree(english);

console.log(tree.words().m.a.n.a);

console.dir(tree.solve(letters));

