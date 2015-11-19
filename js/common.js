$(function(){
	$(window).trigger('resize');
	
	$('.linkBack').click(function(e){
		e.preventDefault();
		window.history.go(-1);
	});
	
});

$(window).load(function(){
	$(window).trigger('resize');
}).resize(function(){


})