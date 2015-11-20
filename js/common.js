$(function(){
	$(window).trigger('resize');
	
	$('.linkBack').click(function(e){
		e.preventDefault();
		window.history.go(-1);
	});
	
	$('.regTags').on('click', 'label', function(){
		if($(this).children('input')[0].checked){
			$(this).addClass('act');
		}else{
			$(this).removeClass('act');
		}
	});
	
	$('.btnConform', '.regForm').click(function(){
		return $.getPoints(100, function(){
			window.location.href = 'login_2.html';
		})
	});
	
	
});

$(window).load(function(){
	$(window).trigger('resize');
}).resize(function(){


});

$.extend({
	//获取积分弹层
	getPoints : function(point, fun){
		var point = point || 10,
			fun = fun || function(){
				$('.popPoints').remove();
				$('.popupbg').hide();
			},
			popupBg = '<section class="popupbg"></section>',
			popupBox = '<section class="popupbox spriteCard popPoints">\
				<h2>恭喜您获得<br><span>20</span>积分！</h2>\
				<p><img src="imgs/popPoints.png" alt=""></p>\
				<button class="button" type="button">确 定</button>\
			</section>';
			
		if($('.popupbg').size() <= 0){
			$('body').append(popupBg);
		};
		$('body').append(popupBox);
		$('.popupbg, .popPoints').show();
		$('.button', '.popPoints').click(fun);
		
	}

});



