//公用module

function addClass(obj,classStr){ //添加类名
   var array = obj.className.split(/\s+/);
	//console.log(array)
   if(array.indexOf(classStr) == -1){
   	 array.push(classStr)
   }
 	obj.className = array.join(' ');
  	return obj;
}

function removeClass(obj,classStr){//removeclass
  if(obj.className){
   var array = obj.className.split(/\s+/);
   var index = array.indexOf(classStr);
   //console.log(array.length)
   if(index != -1){
      array.splice(index,1);
      obj.className = array.join(' ');
   }
   return obj;
  }
  return;
}

function unique(arr){ //unique
  var result = [];
  var obj = {};
  for( var i = 0; i < arr.length; i++){
    if(!obj[arr[i]]){
      result.push(arr[i]);
      obj[arr[i]] = 1;
    }
  }
  return result;
}

function bindEvent(ary,events,fn){  //bind event
	var arr = [].slice.call(ary);
	//console.log(arr.length)
	for(var i=0; i<arr.length; i++){
		ary[i][events] = fn;
	}
}


/*****************header module*********************/
var hParents = document.querySelector(".h-btns");

var hLis = hParents.querySelectorAll(".h-btns>li>a");


function hDropDown(ev){
	var ev = ev || window.event;
	for(var i=0; i<hLis.length; i++){
		removeClass(hLis[i],"active")
	}
	addClass(this,"active");
	//alert(this.innerText)
	//this.nextElementSibling.style.height = "auto";
	ev.stopPropagation();
};

bindEvent(hLis,"onclick",hDropDown)
document.onclick = function(){
	for(var i=0; i<hLis.length; i++){
		removeClass(hLis[i],"active")
	}	
}
/*****************header module*********************/

/*****************aside nav module*********************/

var oUl = document.querySelector(".aside");
var productsMenu = document.querySelector(".products-menu");
var curEle = null;

oUl.addEventListener("click",function(ev){
	
	var ev = ev || window.event;
	
	var targ = ev.target || ev.srcElement;
	
	if(targ.tagName == "SPAN"){
		curEle = targ.parentElement.parentElement;
	}else if(targ.tagName == "A"){
		curEle = targ.parentElement;
	}

	var siblingEles = curEle.parentElement.children;
	var arrow = curEle.querySelector(".fa-angle-down")
	
	console.log(arrow)
		
	//console.log(siblingEles)
	

	
	if(!curEle.className){
		for(var i=0; i<siblingEles.length; i++){
			removeClass(siblingEles[i],"active")
		}
		addClass(curEle,"active");
	}else{	
		removeClass(curEle,"active")
	}

//	productsMenu.style.height = "auto";

})

/*****************aside nav module*********************/
