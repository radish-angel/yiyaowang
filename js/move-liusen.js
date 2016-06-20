function animate(obj,json,callback){
	//console.log(obj.isMoving );
    if(obj.isMoving == true){
		return;
	} else {
		stop();
	}
	//clearTimer();
      
	 obj.timerlist ={};
	 for ( var arr in json){
	 	(function(arr){
	 		obj.timerlist[arr] = setInterval(function(){
	 			//
	 		    if(arr=="opacity"){
	 		    	iNow =parseInt(parseFloat(getStyle(obj,arr))*100 );
	 		    }else{
	 		    	iNow =parseInt(getStyle(obj, arr));
	 		    }
	 			speed =(json[arr]-iNow)/8;
	 			speed >0  ? speed = Math.ceil(speed) : speed = Math.floor(speed);
	 			if(iNow==json[arr]){
	 				clearInterval(obj.timerlist[arr]);
	 				delete  obj.timerlist[arr];
	 				if(getObjLength(obj.timerlist)==0){
	 					obj.isMoving = false;
	 					//clearTimer();
	 					callback ? callback() : "" ;
	 				}
	 			}else{
	 				if(arr=="opacity"){
	 					obj.style[arr] = (iNow+speed)/100 ;
	 					obj.style.filter = 'alpha(opacity=' + parseInt(iNow+speed) + ')';
	 				}else{
	 					obj.style[arr]=iNow+speed+"px";
	 				}
	 			}	
	 		},30)
	 	})(arr)
	 }


	function getStyle(obj, attr){
		if(obj.currentStyle){
			return isNaN(parseFloat(obj.currentStyle[attr])) ? obj.style[attr]=0 : obj.currentStyle[attr];
		} else {
			return isNaN(parseFloat(getComputedStyle(obj, null)[attr])) ? obj.style[attr]=0 : getComputedStyle(obj, null)[attr];
		}
	}
	function getObjLength(obj){
		var n=0;
		for(var i in obj){
			n++;
		}
		return n ;
	}
	function clearTimer(){
		for(var i in obj.timerlist){
			clearInterval(obj.timerlist[i]);
		}
	}
	function stop(){
		clearTimer();//清除所有定时器
		obj.isMoving = false;
	}
}


















