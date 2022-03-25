/************Пролистывание галереи в блоке Projects************/
var gallery = document.getElementsByClassName("gallery");
var leftBlack = document.getElementById("leftBtn");
var rightBlack = document.getElementById("rightBtn");
var transform = [];
var galX = 0;
var strMatrix = "";
var minus = "";
var string = "";
var index = 2;

function clickLeft(){
	rightBlack.setAttribute("onclick", "clickRight()"); 
	if(index==0){
		leftBlack.removeAttribute("onclick");
	}
	else if(index>0){
		console.log("index= " + index);
		transform = (window.getComputedStyle(gallery[0]).transform).match(/\d+/g);
		strMatrix = window.getComputedStyle(gallery[0]).transform; 
		for(var i=0; i<strMatrix.length; i++){ 
			minus = "";
			if(strMatrix[i]=="-"){
				minus = strMatrix[i];
				break;
			}
		}
		string = minus + transform[4];
		galX = parseInt(minus + transform[4]) + 397;
		gallery[0].style.transform = "matrix(1, 0, 0, 1, " + galX.toString() + ", 0)";
		leftBlack.removeAttribute("onclick");
		gallery[0].addEventListener('transitionend', function(){
			leftBlack.setAttribute("onclick", "clickLeft()");
		})
		index--;
		//console.log(strMatrix);
		//console.log("string= " + typeof(string) + " " + string);
		console.log("galX= " + typeof(galX) + " " + galX);
	}
}

function clickRight(){ 
	leftBlack.setAttribute("onclick", "clickLeft()"); 
	if(index==4){
		rightBlack.removeAttribute("onclick");
	}
	else if(index<4){
		console.log("index= " + index);
		transform = (window.getComputedStyle(gallery[0]).transform).match(/\d+/g);	
		strMatrix = window.getComputedStyle(gallery[0]).transform; 
		for(var i=0; i<strMatrix.length; i++){ 
			minus = "";
			if(strMatrix[i]=="-"){
				minus = strMatrix[i];
				break;
			}
		}
		string = minus + transform[4];
		galX = parseInt(minus + transform[4]) - 397; 
		gallery[0].style.transform = "matrix(1, 0, 0, 1, " + galX.toString() + ", 0)";
		rightBlack.removeAttribute("onclick");
		gallery[0].addEventListener('transitionend', function(){
			rightBlack.setAttribute("onclick", "clickRight()");
		})
		index++;
		console.log("galX= " + typeof(galX) + " " + galX);
		console.log(window.getComputedStyle(gallery[0]).transform);
	}
}