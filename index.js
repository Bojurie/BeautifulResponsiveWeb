document.getElementById("myButton").onclick = function () {
  location.href = "contact.html";
}
document.getElementById("learnMore").onclick = function () {
  location.href = "service.html";
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}