var marker = {
	bookmark: function(title, url) {
		console.log(title, url);
		// chrome.bookmarks.create({
		// 	'parentId': extensionsFolderId,
		// 	'title': title,
		// 	'url': url
		// });
	}
};

$(document).ready(function() {
	$('#add').click(function() {
		marker.bookmark($('#title').val(), $('#url').val());
	});
});