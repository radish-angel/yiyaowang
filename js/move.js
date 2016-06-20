function Carousel(json){
	var nav =json.nav;
	var obj =json.obj;
	var time=json.time;
	var leg=json.leg;
	var imgNum =json.imgNum;
	var currentIndex = 1;
	obj.onmouseover = function(){
			clearInterval(timer);
	}
	obj.onmouseout = function(){
			timer = setInterval(move,time);
	}
	for(var i=0;i<nav.length;i++){
			nav[i].index=i;
			nav[i].onclick = function(){
				for(var i=0;i<nav.length;i++){
					nav[i].className ="";
				}
				this.className="active";
			    currentIndex = this.index ;
			    startMove();
			}
	}
	timer= setInterval(move,time);
	function move(){
		//console.log(1);
		setStyle();
		startMove(function(){
			currentIndex++;
			if(currentIndex > imgNum) {
				currentIndex = 1;
				obj.style.left = 0;
			}
		})
    }
		function startMove(cbk){
			animate(obj,{left:-currentIndex*leg},cbk);
		}
		function setIndex(dir){
			if(dir){
				switch(dir){
					case "left" :
					currentIndex>=imgNum-1? currentIndex=0 : currentIndex++ ; break;
					case "right" :
					currentIndex==0 ?  currentIndex =imgNum-1: currentIndex--; break;
				}
			}else{
				currentIndex++;
				if(currentIndex > imgNum) {
					currentIndex = 0;
				}
			}
		}
		function setStyle(){
			for(var i=0;i<nav.length;i++){
				nav[i].className ="";
			}
			if(currentIndex==imgNum){
				nav[0].className="active";
			}else{
				nav[currentIndex].className ="active";
			}
		}		
		
}
