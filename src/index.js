const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");


function enableStartbutton() {
  startButton.addEventListener("click", startCountdown) 
}
function disableStartbutton() {
  startButton.removeEventListener("click", startCountdown) 
  startButton.setAttribute("disabled","disabled")
}
enableStartbutton()

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  const timeDisplay = document.getElementById("time")
  disableStartbutton()
  //check if timer is already initiated and stop it from being called again while running if the button is clicked
  if (timer) {
    clearInterval(timer)
    console.log("timer is initiated");
  } else {
    console.log("timer is not initiated");
  }
  // Your code goes here ...
  timer = setInterval((time) => {
    remainingTime -= 1;
    console.log(remainingTime);
    timeDisplay.innerText = remainingTime;
    console.log("startCountdown called!");
    if (remainingTime <= 0) {
      clearInterval(timer)
      showToast();
      //enableStartbutton()
    }
  }, 100)
}


/* const counterElement = document.getElementById("counter")

counterElement.innerText

let index = 1
const myinterval = setInterval(() => {
    counterElement.innerText = index;
    index++
    if (index >= 100) {
        clearInterval(myinterval)
    }
}, 10); */



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
