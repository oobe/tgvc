var main = function() {
	// Define api endpoint
	var voteAPIEndpoint = "http://api.vote2014.g0v.ronny.tw/api/data/TC100000000";

	// Get vote value from API then display
	$.getJSON(voteAPIEndpoint).done(function (data) {
		console.log("Done");
		$.each(data.rows, function(i,row) {
			$(".count-list .container").append((i+1) + ":" + row.\u5019\u9078\u4eba\u5f97\u7968\u6578 + "<br />");
		});
	});
};

$(document).ready(main);