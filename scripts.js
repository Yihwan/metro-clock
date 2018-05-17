const hands = document.querySelectorAll('.hand');

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const hourOffset = document.querySelector('.hour-offset');
const minuteOffset = document.querySelector('.min-offset');
const secondOffset = document.querySelector('.second-offset');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hourDegrees = ((hour / 12) * 360) + 90;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  hourOffset.style.transform = `rotate(${hourDegrees - 180}deg)`;
  minuteOffset.style.transform = `rotate(${minutesDegrees - 180}deg)`;
  secondOffset.style.transform = `rotate(${secondsDegrees - 180}deg)`;

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
