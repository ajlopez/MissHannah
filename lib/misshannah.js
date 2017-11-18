
function Tree(data) {
	var words = data || {};
	
	this.words = function () { return words; };
	
	this.add = function (word) {
		var l = word.length;

		if (Array.isArray(word)) {
			for (var k = 0; k < l; k++)
				this.add(word[k]);
			
			return this;
		}
		
		var tree = words;
		
		for (var k = 0; k < l; k++) {
			var letter = word[k];
			
			if (!tree[letter])
				tree[letter] = {};
			
			tree = tree[letter];
		}
		
		if (!tree.$)
			tree.$ = {};
		
		return this;
	}
	
	this.solve = function (letters) {
		var found = [];
		solve(letters, words, '', found);
		return found;
	}
	
	function solve(letters, tree, word, found) {
		var keys = Object.keys(letters);
		var l = keys.length;

		if (typeof tree.$ === 'object')
			found.push(word);
		
		for (var k = 0; k < l; k++) {
			var key = keys[k];
			var letter = letters[key];
			if (tree[letter]) {
				var newletters = letters.slice();
				delete newletters[key];
				solve(newletters, tree[letter], word + letter, found);
			}
		}
	}
}

function createTree(data) {
	return new Tree(data);
}

module.exports = {
	tree: createTree
}