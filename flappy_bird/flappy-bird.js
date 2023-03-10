// Hier staan de variabelen.
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

// Hier staat de function voor de light/dark mode
function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Hier staan de functions voor de dropdown toggle
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
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

// Hier staat de function voor het openen van de SideNav
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// Hier staat de code voor het 'hole' waar je doorheen kan springen.
hole.addEventListener('animationiteration', () => {
  var random = -((Math.random() * 300) + 150);
  hole.style.top = random + "px";
  counter++;
});

// Hier staat de code voor het Game Over scherm en de Laatste Score.
setInterval(function () {
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  if (jumping == 0) {
    character.style.top = (characterTop + 3) + "px";
  }
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
  var cTop = -(500 - characterTop);

  // Game over + Laatste Score 
  if ((characterTop > 480) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
    var ball = (1 + counter - 1)
    document.getElementById("data").innerHTML = "Laatste score = " + ball;
    character.style.top = 100 + "px";
    counter = 0;
    clearInterval(character, block, hole);
  }
}, 10);

// Hier staat de code voor wanneer je springt.
function jump() {
  jumping = 1;
  let jumpCount = 0;
  var jumpInterval = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if ((characterTop > 6) && (jumpCount < 15)) {
      character.style.top = (characterTop - 5) + "px";
    }
    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
    }
    jumpCount++;
  }, 10);
}
