function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  let total;
    if(eventId == 1){
        total =91.25*ticknum;
    }else if(eventId == 2){
        total = 79.88*ticknum;
    }else if(eventId == 3){
        total = 83.12*ticknum;
    }else if(eventId == 4){
        total = 100*ticknum;
    }
  return total;
}


