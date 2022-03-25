var burger_icon = document.getElementsByClassName("burger-icon");
var list = document.getElementsByClassName("drop-list");
var matrix = [];
var translateX = 0;

/************Иконка и выпадающий список************/
burger_icon[0].addEventListener('click', function(){
	matrix = (window.getComputedStyle(list[0]).transform).match(/\d+/g); 
	translateX = matrix[4];
	if(translateX==206){
		list[0].style.transform = "translateX(0px)";
		burger_icon[0].style.transform = "translateX(-58px)";
		burger_icon[0].children[1].style.transform = "translateX(-16px)";
	}
	else if(translateX==0){
		list[0].style.transform = "translateX(206px)";
		burger_icon[0].style.transform = "translateX(0px)";
		burger_icon[0].children[1].style.transform = "translateX(0px)";
	}
})