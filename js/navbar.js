var list=document.getElementsByClassName('nav')[0].getElementsByTagName("li");
list[0].className="nav_active";
function change(e){
	for(var i=0;i<list.length;i++){
		list[i].className="";
	}
	e.className="nav_active";
}
function changecolor(e){
	for(var i=0;i<list.length;i++){
		list[i].style.backgroundColor="white";
	}
	e.style.backgroundColor="#0080FF";
}