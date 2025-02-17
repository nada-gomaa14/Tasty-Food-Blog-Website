var count = 1;

function next(){
	if(count == 5){
		count = 1;
	}
	else {
		count++;
	}
	document.getElementById("slide-img").src="Images/Menu/"+count+".png";
}

function prev(){
	if(count == 1){
		count = 5;
	}
	else {
		count--;
	}
	document.getElementById("slide-img").src="Images/Menu/"+count+".png";
}

setInterval(next, 3000);