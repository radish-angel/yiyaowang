function Carousel(json) {
	var nav = json.nav;
	var obj = json.obj;
	var time = json.time;
	var leg = json.leg;
	var imgNum = json.imgNum;
	var currentIndex = 1;
	var timer = setInterval(move, time);
	obj.onmouseover = function() {
		clearInterval(timer);
	}
	obj.onmouseout = function() {
		timer = setInterval(move, time);
	}
	for (var i = 0; i < nav.length; i++) {
		nav[i].index = i;
		nav[i].onclick = function() {
			for (var i = 0; i < nav.length; i++) {
				nav[i].className = "";
			}
			this.className = "active";
			currentIndex = this.index;
			startMove();
		}
	}

	function move() {
		//console.log(1);
		setStyle();
		startMove(function() {
			currentIndex++;
			if (currentIndex > imgNum) {
				currentIndex = 1;
				obj.style.left = 0;
			}
		})
	}

	function startMove(cbk) {
		animate(obj, {
			left: -currentIndex * leg
		}, cbk);
	}

	function setStyle() {
		for (var i = 0; i < nav.length; i++) {
			nav[i].className = "";
		}
		if (currentIndex == imgNum) {
			nav[0].className = "active";
		} else {
			nav[currentIndex].className = "active";
		}
	}

}
//添加介绍
$.fn.introduce = function() {
		this.hover(function(e) {
			var $this = $(this);
			var $content = $(this).html();
			var $div = $("<div id='create'></div>");
			var $left = e.pageX;
			var $top = e.pageY;
			$this.addClass("a_style");
			$div.html($content);
			$div.addClass("create");
			$div.css("left", $left + "px").css("top", $top + 20 + "px");
			$(document.body).append($div);
		}, function() {
			$("#create").remove();
			$(this).removeClass("a_style");
		});
	}
	//加减
function count(json) {
	var $pre = json.pre; //减
	var $next = json.next; //加
	var $inp_count = json.inpt; //显
	var num = $inp_count.val();
	$next.click(function() {
		num--;

		if (num < 1) {
			num = 1;
		}
		$inp_count.val(num);
	});
	$pre.click(function() {
		num++;
		$inp_count.val(num);
	});
}
//
(function() {
		var sum = 0;

		var lst = localStorage["Cart"];
		if (lst) {
			lst = JSON.parse(lst);
			for (var i = 0; i < lst.length; i++) {
				sum = sum + Number(lst[i].num);
			}
		}
		$(".cart_num").html(sum);
	})();