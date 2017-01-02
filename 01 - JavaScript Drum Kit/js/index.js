function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio) return // stop event if audio doesn't exist for key
  audio.currentTime = 0 // rewind audio so key event always plays audio
  audio.play()
  key.classList.add('playing')
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return // skip if it's not a transform
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)
