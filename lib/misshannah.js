
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
}

function createTree(data) {
	return new Tree(data);
}

module.exports = {
	tree: createTree
}