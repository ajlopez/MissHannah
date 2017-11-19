
var vowels = 'aeiou';

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
		
		letters.sort();
		
		solve(letters, words, '', found);
		
		found.sort(byLength);
		
		return found;
	}
	
	function solve(letters, tree, word, found) {
		var keys = Object.keys(letters);
		var l = keys.length;

		if (typeof tree.$ === 'object')
			found.push(word);
		
		var lastletter = '';
		
		for (var k = 0; k < l; k++) {
			var key = keys[k];
			var letter = letters[key];
			
			if (letter === lastletter)
				continue;
			
			lastletter = letter;
			
			if (tree[letter]) {
				if (isVowel(letter))
					var newletters = letters;
				else {
					var newletters = letters.slice();
					delete newletters[key];
				}

				solve(newletters, tree[letter], word + letter, found);
			}
		}
	}
	
	function isVowel(letter) {
		return vowels.indexOf(letter) >= 0;
	}
	
	function byLength(a, b) {
		var la = a.length;
		var lb = b.length;
		
		if (la < lb)
			return 1;
		if (la > lb)
			return -1;
		
		if (a < b)
			return -1;
		if (a > b)
			return 1;
		
		return 0;
	}
}

function createTree(data) {
	return new Tree(data);
}

module.exports = {
	tree: createTree
}