document.getElementById("learnMore").onclick = function () {
  location.href = "service.html";
}

const init = function(){
  document.getElementById('button-send').addEventListener('click', send);
}

const send = function(ev){
    ev.preventDefault();
    ev.stopPropagation();

    let ret = validate();

    if(ret){
          document.getElementById('form-user').submit();
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