
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
		
		letters = normalize(letters);
		var haspoints = hasPoints(letters);
		
		if (haspoints)
			solveWithPoints(letters, words, '', 0, found);
		else
			solve(letters, words, '', found);
		
		if (haspoints)
			found.sort(byPoints);
		else
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
	
	function solveWithPoints(letters, tree, word, points, found) {
		var keys = Object.keys(letters);
		var l = keys.length;

		if (typeof tree.$ === 'object')
			found.push([word, points]);
		
		var lastletter = '';
		
		for (var k = 0; k < l; k++) {
			var key = keys[k];
			var letter = letters[key].letter;
			var value = letters[key].points;
			
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

				solveWithPoints(newletters, tree[letter], word + letter, points + value, found);
			}
		}
	}

	function isVowel(letter) {
		return vowels.indexOf(letter) >= 0;
	}
	
	function hasPoints(letters) {
		return typeof letters[0] === 'object';
	}
	
	function normalize(letters) {
		var haspoints = false;
		
		for (var k = 0; k < letters.length; k++)
			if (letters[k].length > 1)
				haspoints = true;
			
		if (!haspoints)
			return letters;
		
		var result = [];
		
		for (var k = 0; k < letters.length; k++) {
			var letter = letters[k];
			
			if (letter.length > 1)
				result.push({ letter: letter[0], points: parseInt(letter.substring(1)) })
			else
				result.push({ letter: letter, points: 0 })
		}	
		
		return result;
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

	function byPoints(a, b) {
		var pa = a[1];
		var pb = b[1];
		
		if (pa < pb)
			return 1;
		if (pa > pb)
			return -1;
		
		var la = a[0].length;
		var lb = b[0].length;

		if (la > lb)
			return -1;
		if (la < lb)
			return 1;
		
		if (a[0] < b[0])
			return -1;
		if (a[0] > b[0])
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