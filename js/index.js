$(function() {
	$.post("/api/users/check_login_state", function(result) {

		if (result.err == 0) {
			//console.log(result.data.name);

			var name = result.data.name;
			var $a = $("<a id='name'></a>");
			var $a2 = $("<a id='out'></a>");
			$(".mr5").hide();
			$(".mr6").hide();
			$a.html(name + "用户欢迎您！")
			$("#logininfo").append($a);
			$a2.html("退出").css("color", "blue");
			$("#logininfo").append($a2);
			$("#out").hover(function() {
				$(this).css("cursor", "pointer");
			})
			$("#out").click(function() {
				$.post("/api/users/logout", function(result1) {
					if (result1.err == 0) {
						$.get('/a.txt', function(result2) {
							var homehref = JSON.parse(result2);
							window.location.href = homehref.href;
						});
					}
				});

			})
		}

	});
	//banner的轮播

	(function() {
		var banOul = document.getElementById("banner-imglist");
		var banNavlist = document.getElementById("banner-nav").children;
		Carousel({
			"obj": banOul,
			"nav": banNavlist,
			"time": 1000,
			"leg": 750,
			"imgNum": 8
		});
	})();
	//竖排nav的鼠标滑上效果
	(function() {
		var $nav = $(".ban_nav li");
		var target = parseInt($nav.find("a").css("marginLeft"));
		var tar_width = parseInt($nav.css("width"));
		$nav.hover(function() {
			var $index = $(this).index();
			console.log($index);
			$(this).css("background", "white");
			$(this).find("a").css("color", "#314349");
			$(this).animate({
				width: tar_width - 5
			}, 300);
			$(this).find("a").stop().animate({
				marginLeft: target + 10,
			}, 300);
			//console.log($(".ban_nav1").eq($index));
			$(".ban_nav1").eq($index).show();
		}, function() {
			var $index = $(this).index();
			$(this).find("a").css("color", "white");
			$(this).css("background", "#314349");
			$(this).animate({
				width: tar_width
			}, 300);
			$(this).find("a").stop().animate({
				marginLeft: target
			}, 300);
			$(".ban_nav1").eq($index).hide();
			$(".ban_nav1").eq($index).hover(function() {
				$(this).show();
			}, function() {
				$(this).hide();
			});
		});
	})();

	//main的轮播
	(function() {
		var $obj = $(".main2_Carousel");
		var nav = document.getElementsByClassName("main2_Carousel_nav");
		$obj.each(function(i, ele) {
			Carousel({
				"obj": ele,
				"nav": nav[i].children,
				"time": 2000,
				"leg": 605,
				"imgNum": 3
			});
		});
	})();
	//介绍
	(function() {
		var $a = $("#main2_R_bottom dd a");
		$a.introduce();
	})();
	//楼层
	(function() {
		var $elevat = $(".elevator_n li");
		var $main = $(".main");
		$elevat.hover(function() {
				$(this).addClass("hover");
			},
			function() {
				//鼠标移开
				$(this).removeClass("hover");
			}
		);
		var mark = 1;
		$elevat.click(function() {
			mark = 2;
			var $this = $(this);
			var $index = $this.index();
			var $top = $main.eq($index).offset().top - 30;
			$elevat.find("span").removeClass("active");
			$elevat.removeClass("hover");
			$this.find("span").addClass("active");
			$("body,html").animate({
				scrollTop: $top
			}, 500, function() {
				mark = 1;
			})
		});
		$(".xsg").click(function() {
			$(".elevator_n").hide();
			var $specialTop = $(".specialAds").offset().top;
			$("body, html").animate({
				scrollTop: $specialTop
			}, 0, function() {
				mark = 1;
			})
		});
		$(window).scroll(function() {
			var $obj = $(".main");
			var end = parseInt($(".main:last").offset().top) + 380;
			if (mark == 1) {
				var $t = $(this).scrollTop();
				if ($t > 680 && $t < end) {
					$(".elevator_n").show();
				} else {
					$(".elevator_n").hide();
				}

				$obj.each(function(i) {
					var $this = $(this);
					var $index = i;
					$height = $this.offset().top + $(this).height() / 2;

					if ($t < $height) {
						$elevat.find("span").removeClass("active");
						$elevat.removeClass("hover");
						$elevat.eq($index).find("span").addClass("active");
						return false;
					}
				});
			}
		});
	})();

	//选项卡
	(function() {
		$(".ft_friendlylink").myTab({
			operate: 'mouseover',
			time: 3000,
			auto: false,
			delayTime: 0
		});
	})();
	//banner公告选项；
	(function() {
		$(".server_tab  li").click(function() {

			var $index = $(this).index();
			//console.log($(".server_tab").find("span"));
			$(".server_tab li").removeClass("on1");
			$(this).addClass("on1");
			$(".tab_show ").children().hide();
			$(".tab_show ").children().eq($index).show();
		})
	})();
	//公告的动态
	(function() {
		var target = parseInt($(".service_ico").css("marginTop"));
		$(".service_div").find("a").find("i").hover(function() {
			var $that = $(this);
			$(this).siblings().stop();
			$(this).stop().animate({
				marginTop: target + 5
			}, 100, function() {
				$that.animate({
					marginTop: target
				}, 100)
			})
		})
	})();

	(function() {
		var $bottom = $(".returnTop li");
		var $returnTop = $(".returnTop_last").find("span");
		$bottom.hover(function() {
			var $this = $(this);
			var $index = $this.index();
			$bottom.removeClass("over");
			$this.addClass("over");
			if ($index < 2) {
				$(".pup_box ").children().eq($index).show();
			}
		}, function() {
			var $this = $(this);
			var $index = $this.index();
			if ($index < 2) {
				$(".pup_box ").children().eq($index).hide();
				$(".pup_box ").children().eq($index).hover(function() {
					$(this).show();
				}, function() {
					$(this).hide();
				});
			}
		});

		$returnTop.click(function() {
			$("body,html").animate({
				scrollTop: 0
			}, 500);
		});
	})();
	// bottom的运动
	(function() {
		var target = parseInt($(".ic-pinpai").css("marginTop"));
		$(".ft_commit_div").find("a").hover(function() {
			var $that = $(this);
			$(this).siblings().stop();
			$(this).stop().animate({
				marginTop: target + 10
			}, 100, function() {
				$that.animate({
					marginTop: target
				}, 100)
			})
		})
	})();
	//mini-cart
	(function() {
		var lst = localStorage["Cart"];
		if (lst) {
			var $tab = $("<tbody></tbody>");
			lst = JSON.parse(lst);
			console.log(lst.length);
			for (var i = 0; i < lst.length; i++) {
			$tab.append("<tr class='goodsList'><td class = 'goodsImg'><img alt = '' src = '"+lst[i].src+"'/></td><td>"+lst[i].name+"</td><td class = 'time'>"+lst[i].price+"</td><td class = 'action'>"+lst[i].num+"</td></tr>");
				
			}
			$(".mini-cart1").append($tab);
		}

		$(".mini_cart_btn").hover(function() {
		    lst = localStorage["Cart"];
			if (!lst) {
				$(".mini-cart").show();
			} else {

				$(".mini-cart1").show();
			}
		}, function() {
			$(".mini-cart").hide();
			$(".mini-cart1").hide();
		});
	})();


});