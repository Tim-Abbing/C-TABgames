const gameContainer = document.getElementById("game-container");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let cards = [];
let flippedCards = [];
let attempts = 0;

// Kaarten genereren
for (let i = 0; i < numbers.length * 2; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.number = numbers[i % numbers.length];
    card.innerText = "?";
    gameContainer.appendChild(card);
    cards.push(card);

    card.addEventListener("click", function () {
        if (flippedCards.length === 2) return;
        if (flippedCards.includes(card)) return;
        card.innerText = card.dataset.number;
        card.classList.add("flipped");
        flippedCards.push(card);
        if (flippedCards.length === 2) {
            attempts++;
            if (flippedCards[0].dataset.number === flippedCards[1].dataset.number) {
                flippedCards = [];
                if (cards.every(c => c.classList.contains("flipped"))) {
                    alert(`Gefeliciteerd! Je hebt na ${attempts} keer proberen gewonnen.`);
                }
            } else {
                setTimeout(() => {
                    flippedCards.forEach(c => {
                        c.innerText = "?";
                        c.classList.remove("flipped");
                    });
                    flippedCards = [];
                }, 1000);
            }
        }
    });
}

// Kaarten op random volgorde
for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
}

// Kaarten tonen op scherm
cards.forEach(card => gameContainer.appendChild(card));

function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
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
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px"; //dit maakt de mysidenav 250px
    document.getElementById("main").style.marginLeft = "250px"; // dit verplaatst de main met 250px
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }