var header = document.getElementsByTagName("header");
var galleryHead = document.getElementsByClassName("interiors-gallery");
var coordinates = [];
var minusMove = "";
var strCoord = "";
var positionX = 0;
var mouseX = 0;
var prev = 0;
var count = 0;
var sumPosition = 0;

var right = document.getElementById("right");
var left = document.getElementById("left");
var str = "";
var matrixClick = [];
var minusClick = "";
var positionCurrent = 0;
var number = 1321;
var movingXRight = 0;
var movingXLeft = 0;
var indexTop = 0;
var positionClick = 0;



/************Эффект скроллинга при движении мышью************/
function move(){
	coordinates = (window.getComputedStyle(galleryHead[0]).transform).match(/\d+/g);
	strCoord = window.getComputedStyle(galleryHead[0]).transform;
	for(var i=0; i<strCoord.length; i++){
		minusMove = "";
		if(strCoord[i]=="-"){
			minusMove = strCoord[i];
			break;
		}
	}

	positionX = parseInt(minusMove + coordinates[4]);
	mouseX = parseInt((event.clientX)/130);
	count = mouseX;
	
	if(count>prev){
		sumPosition = positionX + count;
		prev = count;
		movingXRight = number + count;
		movingXLeft = number - count;
	}
	else if(count<prev){
		sumPosition = positionX - count;
		prev = count;
		movingXRight = number - count;
		movingXLeft = number + count;
	}
	
	galleryHead[0].style.transform = "matrix(1, 0, 0, 1, " + sumPosition.toString() + ", 0)";
}	


/************Пролистывание галереи в header************/
var pagination = document.getElementsByClassName("numbers");
var strNum = "";
var matrixNum = [];
var numCoord = 0;
var numRes = 0;
var minusNum = "";

function moveRight(){
	left.setAttribute("onclick", "moveLeft()");
	if(indexTop==3){
		right.removeAttribute("onclick");
	}
	else{
		str = window.getComputedStyle(galleryHead[0]).transform;
		matrixClick = str.match(/\d+/g);

		strNum = window.getComputedStyle(pagination[0]).transform;
		matrixNum = strNum.match(/\d+/g);

		for(var i=0; i<str.length; i++){
			minusClick = "";
			if(str[i]=="-"){
				minusClick = str[i];
				break;
			}
		}

		for(var i=0; i<strNum.length; i++){
			minusNum = "";
			if(strNum[i]=="-"){
				minusNum = strNum[i];
				break;
			}
		}

		positionCurrent = parseInt(minusClick + matrixClick[4]);
		sumPosition = positionCurrent - movingXRight;

		numCoord = parseInt(minusNum + matrixNum[4]);
		numRes = numCoord - 31;
		
		console.log("sumPosition= " + sumPosition);	
		galleryHead[0].style.transform = "matrix(1, 0, 0, 1, " + sumPosition.toString() + ", 0)";
		pagination[0].style.transform = "matrix(1, 0, 0, 1, " + numRes.toString() + ", 0)";
		pagination[1].style.transform = "matrix(1, 0, 0, 1, " + numRes.toString() + ", 0)";

		right.removeAttribute("onclick");
		header[0].removeAttribute("onmousemove");
		galleryHead[0].addEventListener('transitionend', function(){	
			right.setAttribute("onclick", "moveRight()");
			header[0].setAttribute("onmousemove", "move()");
		})
		indexTop++;
	}
}

function moveLeft(){
	right.setAttribute("onclick", "moveRight()");
	if(indexTop==0){
		left.removeAttribute("onclick");
	}
	else{
		str = window.getComputedStyle(galleryHead[0]).transform;
		matrixClick = str.match(/\d+/g); /*массив строк, в которых содержатся значения свойства transform*/

		strNum = window.getComputedStyle(pagination[0]).transform; /*Значения для нумерации*/
		matrixNum = strNum.match(/\d+/g);

		for(var i=0; i<str.length; i++){
			minusClick = "";
			if(str[i]=="-"){
				minusClick = str[i];
				break;
			}
		}

		for(var i=0; i<strNum.length; i++){
			minusNum = "";
			if(strNum[i]=="-"){
				minusNum = strNum[i];
				break;
			}
		}

		positionCurrent = parseInt(minusClick + matrixClick[4]);
		sumPosition = positionCurrent + movingXLeft;

		numCoord = parseInt(minusNum + matrixNum[4]);
		numRes = numCoord + 31;
		
		console.log("sumPosition= " + sumPosition);	
		galleryHead[0].style.transform = "matrix(1, 0, 0, 1, " + sumPosition.toString() + ", 0)";
		pagination[0].style.transform = "matrix(1, 0, 0, 1, " + numRes.toString() + ", 0)";
		pagination[1].style.transform = "matrix(1, 0, 0, 1, " + numRes.toString() + ", 0)";

		left.removeAttribute("onclick");
		header[0].removeAttribute("onmousemove");
		galleryHead[0].addEventListener('transitionend', function(){	
			left.setAttribute("onclick", "moveLeft()");
			header[0].setAttribute("onmousemove", "move()");
		})
		indexTop--;
	}
}