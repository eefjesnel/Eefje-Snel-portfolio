


var buttonElement = document.querySelector("header div button");
var menuElement = document.querySelector("header div:nth-of-type(2)");

var telefoonElement = document.querySelector(".contact main section article:first-of-type");


buttonElement.addEventListener("click", buttonClick);

function buttonClick(){
    menuElement.classList.toggle("toonMenu");
    if(menuIcoonElement.src.match("./images/menuIcoon.png")) {
        menuIcoonElement.src = './images/menuIcoonOranje.png';
    }
    else {
        menuIcoonElement.src = './images/menuIcoon.png';
    }
}

var menuIcoonElement = document.querySelector("header div button img")

telefoonElement.addEventListener("click", hoverContact);

function hoverContact(){
    telefoonElement.classList.toggle("bewegenContact");
    console.log("hoverContact")
}

function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }



function myFunctionemail() {
    var copyTextemail = document.getElementById("myInputemail");
    copyTextemail.select();
    copyTextemail.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyTextemail.value);
    
    var tooltipemail = document.getElementById("myTooltipemail");
    tooltipemail.innerHTML = "Copied: " + copyTextemail.value;
    console.log("email in")
  }
  
  function outFuncemail() {
    var tooltipemail = document.getElementById("myTooltipemail");
    tooltipemail.innerHTML = "Copy to clipboard";
    console.log("email uit")
  }


console.log("buttonClick");