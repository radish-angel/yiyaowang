$(function() {
	
	(function() {
		var index = 1;
		$(".l_move").click(function() {
			index--;
			if (index < 1) {
				index = 5;
			}
			change(index);
		});
		$(".product_ban_main_Lm  li").click(function() {
			index = $(this).index() + 1;
			$(".product_ban_main_Lm  li").css("border-color", "#e6e6e6");
			$(this).css("border-color", "red");
			change(index);
		});
		$(".r_move").click(function() {
			index++;
			if (index > 5) {
				index = 1;
			}
			change(index);
		});
		$("#show").simpleZoom({
			zoomBox: "#zoom",
			markSize: [60, 60],
			zoomSize: [385, 385],
			zoomImg: [800, 800]
		});

		function change(index) {
			$(".product_ban_main_Lm  li").css("border-color", "#e6e6e6");
			$(".product_ban_main_Lm  li").eq(index - 1).css("border-color", "red");
			$(".product_ban_main_Lt img").attr("src", "img/big" + index + ".jpg");
		}
	})();
	//购物车数量的加减
	(function() {

		count({
			"pre": $(".num_pre"),
			"next": $(".num_next"),
			"inpt": $(".num1")
		});
	})();
	//加入购物车
	(function() {
		var $clone_img = $(".show img").clone();
		var img_flag = false;
		$(".btn_shopping_cart").click(function() {
			var sum = 0;
			$('#addCartWin').fadeIn();
			var $item_number = $(".item_number span").html();

			var img_src = $clone_img.attr("src");
			var $img = $("<img src=" + img_src + "/>");
			var $name = $(".name1").text();
			var $num = $(".num1").val();
			var $price = $(".price").html();
			var lst = localStorage["Cart"];
			var tal = parseFloat($price * $num).toFixed(2);
			$img.css("width", "115px");
			if (!img_flag) {
				img_flag = true;
				$(".spopimg").append($img);
			}
			$(".add_num").html("加入数量:" + $num);
			$(".tal").html(tal);
			if (!lst) {
				lst = [];
				lst.push({
					"item": $item_number,
					"name": $name,
					"img": img_src,
					"price": $price,
					"num": $num
				});
				
				localStorage['Cart'] = JSON.stringify(lst);
				$(".cart_num").html(Number($num));
				
			} else {
				lst = JSON.parse(lst);
				var add_flag = false;
				for (var i = 0; i < lst.length; i++) {
					var t = lst[i]
					if (t.name != $name) {
						lst.push({
							"item": $item_number,
							"name": $name,
							"img": img_src,
							"price": $price,
							"num": $num
						});
					} else {
						t.num = parseInt($num) + parseInt(t.num);
					}
				}
				for (var i = 0; i < lst.length; i++) {
					sum = sum + Number(lst[i].num);
				}
				localStorage['Cart'] = JSON.stringify(lst);
				$(".cart_num").html(sum);
			}

		});
	})();



















})