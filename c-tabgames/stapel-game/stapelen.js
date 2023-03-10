function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

if(window.innerWidth < 500){
    var boardWidth = window.innerWidth-2;
    var gameWidth = window.innerWidth-102;
    document.documentElement.style.setProperty('--boardWidth', boardWidth + "px");
    document.documentElement.style.setProperty('--width', gameWidth + "px");
}else{
    var boardWidth = 500;
    var gameWidth = 400;
}
var counter = 2;
var btn = document.getElementById("btn");

function stopSliding(sliderMoving, sliderAbove, sliderB4){
    var sliderMoving = document.getElementById(sliderMoving);
    var sliderAbove = document.getElementById(sliderAbove);
    var sliderB4 = document.getElementById(sliderB4);
    var left = window.getComputedStyle(sliderMoving).getPropertyValue("left");
    sliderMoving.classList.remove("animate");
    sliderMoving.style.left = left;
    var width = parseFloat(window.getComputedStyle(sliderMoving).getPropertyValue("width"));
    left = parseFloat(left);
    var leftB4 = parseFloat(window.getComputedStyle(sliderB4).getPropertyValue("left"));
    var difference = left - leftB4;
    var absDifference = Math.abs(difference);
    if(difference>width||difference<-width){
        document.getElementById("restart").style.display = "block";
        var score = "Score: ".concat(counter-2);
        btn.setAttribute("onclick", "");
        alert(score);
        Location.reload();
    }
    if(difference>0){
        left = left + absDifference;
    }else{
        left = left - difference;
        sliderMoving.style.left = left.toString().concat("px");
    }
    var offset = (width - absDifference).toString().concat("px");
    sliderMoving.style.width = offset; 
    sliderAbove.style.width = offset;
    sliderAbove.style.visibility = "visible";
    gameWidth = gameWidth + absDifference;
    document.documentElement.style.setProperty('--width', gameWidth + "px");
    var onclick = "stopSliding('slider".concat(counter, "','slider", counter+1, "','slider", counter-1, "')");
    btn.setAttribute("onclick",onclick);
    counter++;
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}