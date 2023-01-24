
function nameValidation(data) {
  let input = document.getElementById(data);
  if (! (/^([A-za-z]{3,})$/).test((input).value) ){
    input.style.boxShadow = " 0px 2px 10px red";
    //input.innerHTML = "valid"
  } else {

    input.style.boxShadow = " 0px 2px 10px green";
  }
}


function numberValidation(data) {
    let input = document.getElementById(data);
    if (! (/^([6-9][0-9]{2,})$/).test((input).value) ){
        input.style.boxShadow = " 0px 2px 10px red";
      //input.innerHTML = "valid"
    } else {
      
    input.style.boxShadow = " 0px 2px 10px green";
    }
  }
  
  function pinCodeValidation(data) {
    let input = document.getElementById(data);
    if (! (/^([6-9][0-9]{9,})$/).test((input).value) ){
      input.style.background = "red"
     // input.innerHTML = "valid"
    } else {
      input.style.border.color = "green"
    }
  }

  function PGDetails (x) {
     if(x.checked = true) {
        document.getElementById("pg").style.display = "block"; 
     }
  }