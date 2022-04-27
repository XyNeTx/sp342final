function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if (isNaN(nid)){
	  return false;
  }
  else{
	  if (nid.length != 13) {
		return false;
	} else {
	return true;
	}
  }
}

function checkTicketNo() {
  let num = (document.getElementById("ticknum").value).trim();
  if (isNaN(num)) {
    return false;
  } 
  else {
	  if (num > 5){
		  return false;
	  }
	  else if (num < 1){
		  return false;
	  }
	  else{
	return true;
  }
}
}

function checkfname(){
	let fname = (document.getElementById("fname").value).trim();
	if (fname.length != 0){
		return true;
	}
	else {
		return false;
	}
}

function checklname(){
	let lname = (document.getElementById("lname").value).trim();
	if (lname.length != 0){
		return true;
	}
	else {
		return false;
	}
}

function validateForm(){
	if(!checkNID()){
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	}else{
		if(!checkfname()){
		  alert("Invalid value for First Name!!");
		  document.getElementById("fname").focus();
		  return false;
		}
		else if(!checklname()){
		  alert("Invalid value for Last Name!!");
		  document.getElementById("lname").focus();
		  return false;
		}
		else if(!checkTicketNo()){
		  alert("Invalid value for No.of tickets!!");
		  document.getElementById("ticknum").focus();
		  return false;
		}else{
			total = priceCalculate();
			alert("Total price for this booking is "+total+" USD");
			return false;
		}
	}
}