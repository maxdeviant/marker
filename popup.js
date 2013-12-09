var M = {
	list: function(query) {
		$('#bookmarks').html('');
		var bookmarkTreeNodes = chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
			// console.log(bookmarkTreeNodes);
			$('#bookmarks').append(M.processTree(bookmarkTreeNodes));
		});
	},
	processTree: function(tree) {
		console.log(tree);
		for (var i = 0; i < tree.length; i++) {
			if (tree[i].children) {
				M.processTree(tree[i].children);
			} else {
				M.processNode(tree[i]);
			}
		}
	},
	processNode: function(node) {
		console.log(node.url);
	}
};

$(document).ready(function() {
	M.list($('#search').val());

	$('#search').change(function() {
		M.list($('#search').val());
	});
});