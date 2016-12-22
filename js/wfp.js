$("<style type='text/css' id='cTempStyles'> .mfp-bg, .mfp-wrap { display: none !important; } html { overflow: visible !important; margin-right: 0 !important; } </style>").appendTo("head");

$(window).load(function() {
	$('html').css({overflow: 'visible', marginRight: 0});
	$('.mfp-bg, .mfp-wrap, #cTempStyles').remove();
});

$(function() {
	if ($('.text-wrapper').length > 0) {
		var article = $('.text-wrapper').first().html();
		
		$(window).load(function() {
			$('.text-wrapper').first().html(article);
		});
	}
});