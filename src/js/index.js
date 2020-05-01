
var menu_btn = document.querySelector('.menu_button');
var pop = document.querySelector('.pop_menu');
var body = document.querySelector('body');
var pop_x = document.querySelector('.pop_x');

menu_btn.addEventListener("click",function(){
	pop.classList.add("open");
	body.classList.add("scroll");
	setTimeout(function(){ 
		pop_x.classList.add("down");
	}, 500);
});

pop_x.addEventListener("click",function(){
	pop.classList.remove("open");
	body.classList.remove("scroll");
	pop_x.classList.remove("down");
});