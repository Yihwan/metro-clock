const hands = document.querySelectorAll('.hand');

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hourDegrees = ((hour / 12) * 360) + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  if(secondsDegrees === 90) {
    hands.forEach(function(hand) {
      hand.style.transition = 'none';
    });
  } else {
    hands.forEach(function(hand) {
      hand.style.transition = '';
    });
  }
}

setInterval(setDate, 1000);
