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
	
	if($('.conceptScroll').size() > 0){
		$('ul', '.conceptScroll').each(function(index, element) {
			var $li = $(this).children(),
				width = $li.size() * 356 - 38;
			$(this).width(width);
		});
	};
	
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
		
	},
	showPopup : function(obj, auto, btn){
		$(".popupbox").hide();
		auto = auto || 0;
		if(auto == -1){
			var top = btn.offset().top + btn.height(),
				left = btn.offset().left;
			$(obj).show().css({"top" : top>0?top:0, "left" : left})
			
		}else if(auto == 'auto'){
			var top = btn.offset().top+btn.height(),
				left = $("#main").offset().left + $("#main").width() - $(obj).width()-1;
				
			$(obj).show().css({"top": top>0?top:0,"left":left});
		}else{
			var top = ($(window).height() - $(obj).height())/2 + $(window).scrollTop();
			$(obj).show().css("top", top>0?top:0);
		}
		
		if($(obj).find(".popupClose").size() > 0){
			$(obj).find(".popupClose").click(function(){
				$(this).unbind("click");
				$.closePopup(obj);
			});
		};
		
		if(auto == 0 || auto == 'auto' || auto == 1){
			$(".popupbg").show();
			if(auto != 1){
				$(".popupBg").click(function(){
					$(this).unbind("click");
					$.closePopup(obj);
				});
			};
		}
		
	},
	closePopup : function(obj){
		$(obj).hide();
		$(".popupbg").hide();
	}
});



