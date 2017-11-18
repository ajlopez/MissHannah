
function Tree(data) {
	var words = data || {};
	
	this.words = function () { return words; };
}

function createTree(data) {
	return new Tree(data);
}

module.exports = {
	tree: createTree
}