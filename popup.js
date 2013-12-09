var marker = {
	list: function(query) {
		$('#bookmarks').html('');
		var bookmarkTreeNodes = chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
			console.log(bookmarkTreeNodes);
		});
	}
};

$(document).ready(function() {
	marker.list($('#search').val());

	$('#search').change(function() {
		marker.list($('#search').val());
	});
});