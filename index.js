// document.getElementById("learnMore").onclick = function () {
//   location.href = "service.html";
// }

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

const init = function(){
  document.getElementById('button-send').addEventListener('click', send);
}

document.getElementById("form").submit();
const send = function(ev){
    ev.preventDefault();
    ev.stopPropagation();

    let ret = validate();

    if(ret){
          document.getElementById("form").submit();
        }else{
          let err = document.querySelector('error');
          let input = err.querySelector('input');
          err.setAttribute('data-errormsg', `...Missing ${input.placeholder}`);
    }
}

const validate = function(){
    let valid = false;
    let fullName = document.getElementById('fullName');
    let email = document.getElementById('email');
    if(fullName.value ===""){
      failures.push({input:'fullName', msg:'Required Field'})
    }
    if(email.value ===""){
      failures.push({input:'email', msg:'Required Field'})
    }

    return valid;
}


document.addEventListener('DOMcontentLoaded', init);