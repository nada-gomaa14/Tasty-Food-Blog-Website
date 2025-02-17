var formLabels = document.getElementsByTagName("label");

function validation(){
	var valid = true; 
	
	var first = document.form.first.value;
	if(first == ""){
		formLabels[0].innerHTML = "First Name: * [Required]";
		valid = false;
	}
	else if(!isNaN(first)){
		formLabels[0].innerHTML = "First Name: * [Text Only]";
		valid = false;
	}
	else {
		formLabels[0].innerHTML = "First Name: *";
		valid = true;
	}

	var last = document.form.last.value;
	if(last == ""){
		formLabels[1].innerHTML = "Last Name: * [Required]";
		valid = false;
	}
	else if(!isNaN(last)){
		formLabels[1].innerHTML = "Last Name: * [Text Only]";
		valid = false;
	}
	else {
		formLabels[1].innerHTML = "Last Name: *";
		valid = (valid) ? true : false;
	}

	var email = document.form.email.value;
	var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(email == ""){
		formLabels[2].innerHTML = "Email: * [Required]";
		valid = false;
	}
	else if(!regex.test(email)){
		formLabels[2].innerHTML = "Email: * [Invalid Email]";
		valid = false;
	}
	else {
		formLabels[2].innerHTML = "Email: *";
		valid = (valid) ? true : false;
	}

	return valid;
}

function clearThis(){
	var myLabels = new Array();
	myLabels[0] = "First Name: *";
	myLabels[1] = "Last Name: *";
	myLabels[2] = "Email: *";

	for(var i=0; i<myLabels.length; i++){
		formLabels[i].innerHTML=myLabels[i];
	}
}