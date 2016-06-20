$(document).ready(function() {
	$(".province_name").mouseover(function() {
		$(this).css("background-image","url(images/top_02.jpg)");
		$(".hd_provinceList").show();
		
		//alert(1);
	});


	$(".province_name").mouseout(function() {
		$(this).css("background-image","url(images/top_01.jpg)");
		$(".hd_provinceList").hide();
	});
});