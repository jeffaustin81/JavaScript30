const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
  const now = new Date()
 
  const seconds = now.getSeconds()
  const secondsDegree = ((seconds / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secondsDegree}deg)`
 
  const mins = now.getMinutes()
  const minsDegree = ((mins / 60) * 360) + 90
  minuteHand.style.transform = `rotate(${minsDegree}deg)`

  const hours = now.getHours();
  const hoursDegree = ((hours / 12) * 360) + 90
  hourHand.style.transform = `rotate(${hoursDegree}deg)`

  console.log(`${hours}:${mins}:${seconds}`)
}

setInterval(setDate, 1000);

function surprise(callback) {
    (function loop() {
        var now = new Date();
        if (now.getHours() === 23 && now.getMinutes() === 35) {
            callback();
        }
        now = new Date();                  // allow for time passing
        var delay = 60000 - (now % 60000); // exact ms to next minute interval
        setTimeout(loop, delay);
    })();
}

const audio = document.querySelector('.german-shephard');

audio.play();

surprise(audio.play.bind(audio));