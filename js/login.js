$(function() {
	(function() {
		var num =0;
		$("#btnSubmit").click(function() {
			var name = $("#userName").val();
			var pass = $("#userPass").val();
			if (name =="") {
				
				$("#no-bare").show();
				$(".row_reg").eq(0).css("border-color","#1E90FF");
			}else{
				if(pass == ""){
					console.log($(".input_pass"));
					$(".input_pass").show();
				}else{
					$.post("/api/users/login",{name:name,pass:pass},function(result){
						console.log(result);
						if(result.err==0){
							console.log(0);
							$.get('/a.txt', function (result) {
								  console.log(result);
                                  var homehref =JSON.parse(result);
                                  console.log(homehref);
								  window.location.href=homehref.href;
							});
						}else{
							$(".no-user").show();
							num++;
							if(num>5){
								num=0;
								$(".verification_box").show();
								$(".login_wrap").css("min-height","380px")
							}
						}
					})
				}
			}
		
		});	
		$("input").focus(function(){
			$(".no-user").hide();
			$("#no-bare").hide();
			$(".row_reg").eq(0).css("border-color","#E6E6E6");
			$(".input_pass").hide();
			$(".row_reg").eq(1).css("border-color","#E6E6E6");
			$(".test_node").hide();
		});
		$(".test_input").blur(function(){
			console.log(1);
			if($(this).val()==""){
				$(".test_node").show();
			}
		})
		var i=0;
		$(".change").hover(function(){
			$(this).css("cursor","pointer").css("border-bottom","solid 1px blue");
		},function(){
			$(this).css("border","none");
		});
		$(".change").click(function(){
			console.log(2);
			i++;
			if(i==4){
				i=1;
			}
			
			console.log($(".test_img"));
			$(".test_img").attr("src","img/veri"+i+".jpeg");
		});	
	})()
});