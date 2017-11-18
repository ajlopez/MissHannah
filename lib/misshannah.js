
function Tree() {
	this.words = function () { return {}; };
}

function createTree() {
	return new Tree();
}

module.exports = {
	tree: createTree
}