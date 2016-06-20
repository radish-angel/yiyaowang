/* 
 * @name: jQuery simple zoom plus v1.0
 * @time: 2013/1/24
 * @author: sole
 * @Mail:macore@163.com
 * @url: http://www.imsole.net/
 * @Copyright 2012 - http://www.imsole.net/
 * @html5+css3+jQuery+��Ӧʽ��Ʋ���: http://www.imsole.net/html5/
*/
(function($){
	$.fn.simpleZoom = function(options){
		var defs = {
			zoomBox : "#zoomBox",			
			markSize : [200, 100],			
			zoomSize : [400, 400],			
			zoomImg : [800, 800]
		};
		var opt = $.fn.extend({}, defs, options);
		console.log(opt);
		console.log(this);
		return this.each(function(){
			var markBox = $(this);//得到当前对象
			var zoomBox = $(opt.zoomBox);//得到放大的图片所在的div
			var zoom_img = $(opt.zoomBox).find("img"); //得到放大的图片
			//得到小图片所在div的样式
			var markBoxSize = [markBox.width(), markBox.height(), markBox.offset().left, markBox.offset().top];
			var markSize = opt.markSize;
			var zoomSize = opt.zoomSize;//放大区域的宽和高
			var zoomImg = opt.zoomImg;  //大图片的宽和高
			var mark_ele = "<i id='mark'></i>";//添加放大镜
			//放大镜的样式
			var mark_css = {position:"absolute", top:0, left:0, width:markSize[0]+"px", height:markSize[1]+"px", backgroundColor:"#000", opacity:.5, filter:"alpha(opacity=50)",  display:"none", cursor:"crosshair"};
			
			var show_w = markBoxSize[0]-markSize[0];
			var show_h = markBoxSize[1]-markSize[1];

			//created mark element and add cascading style sheets
			zoomBox.css({width:zoomSize[0]+"px", height:zoomSize[1]+"px"});
			
			markBox.append(mark_ele);//将放大镜添加到show中
			
			$("#mark").css(mark_css);//添加放大镜的样式

			markBox.mouseover(function(){
				$("#mark").show();
				zoomBox.show();
			}).mouseout(function(){
				$("#mark").hide();
				zoomBox.hide();
			}).mousemove(function(e){
				var l = e.pageX-markBoxSize[2]-(markSize[0]/2);
				var t = e.pageY-markBoxSize[3]-(markSize[1]/2);
				if(l < 0){
					l = 0;
				}else if(l >show_w){
					l = show_w;
				}
				if(t < 0){
					t = 0;
				}else if(t > show_h){
					t = show_h;
				}

				$("#mark").css({left:l+"px", top:t+"px"});
				
				var z_x = -(l/show_w)*(zoomImg[0]-zoomSize[0]);
				var z_y = -(t/show_h)*(zoomImg[1]-zoomSize[1]);
				zoom_img.css({left:z_x+"px", top:z_y+"px"});
			});
		});
	}
})(jQuery);