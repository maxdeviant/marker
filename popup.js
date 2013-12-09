var marker = {
	add: function(title, url) {
		chrome.bookmarks.create({
			// 'parentId': bookmarkBar.id,
			'title': title,
			'url': url
		});
	},
	list: function() {

	}
};

$(document).ready(function() {
	$('#add').click(function() {
		marker.add($('#title').val(), $('#url').val());
	});
});