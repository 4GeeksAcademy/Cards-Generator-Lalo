import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const generateRandomCard = () => {
 
  const palos = ['♥️', '♦️', '♠️','♣️'];
  const numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  
  
  const randomPalo = palos[Math.floor(Math.random() * palos.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
 
  document.querySelector('.top-palo').innerHTML = randomPalo;
  document.querySelector('.number').innerHTML = randomNumber;
  document.querySelector('.bottom-palo').innerHTML = randomPalo;

};

const cardBtn = document.getElementById('card-btn');
cardBtn.addEventListener('click', (e) => {
  e.preventDefault();
  generateRandomCard();
});


window.onload = function () {
generateRandomCard();
};


