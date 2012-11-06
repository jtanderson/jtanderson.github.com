$(function(){
	$.ajax({
		type: 'get',
		url: "https://www.ratiocaeli.com/quote",
		success: function(json){
				var quoteBox = $('header blockquote');
				var quote = json.Snippet;
				quoteBox.find('p').html(quote.Body);
				quoteBox.find('small').html(quote.Name);
				quoteBox.parent().show();
			},
		data: {
			'api_request': true
		},
		dataType: 'json'
	});
})