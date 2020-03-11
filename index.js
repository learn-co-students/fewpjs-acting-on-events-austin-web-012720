var dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#00d11d"

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 10}px`
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left < 360) {
    dodger.style.left = `${left + 10}px`
  }
}

function moveDodgerUp() {
    var bottomNumbers = dodger.style.bottom.replace('px', '');
    var up = parseInt(bottomNumbers, 10)
    
    if (up < 380){
      dodger.style.bottom = `${up + 10}px`
    }
  }

  function moveDodgerDown() {
    var bottomNumbers = dodger.style.bottom.replace('px', '');
    var up = parseInt(bottomNumbers, 10)
    
    if (up > 0){
      dodger.style.bottom = `${up - 10}px`
    }
  }


document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
})


document.addEventListener('keydown', function(e) {
    console.log(e.key)
    if (e.key === "ArrowUp") {
      moveDodgerUp()
    }
  })

  document.addEventListener('keydown', function(e) {
    console.log(e.key)
    if (e.key === "ArrowDown") {
      moveDodgerDown()
    }
  })