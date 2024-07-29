# Projects related to DOM

## Project Link (Hitesh's)

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project-1: Background Color Changer

```javascript
const btns = document.querySelectorAll(".button");
const body = document.querySelector("body");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    body.style.backgroundColor = e.target.id;
  });
});
```

## Project-2: BMI Calculator

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const hieght = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (hieght == "" || hieght < 0 || isNaN(hieght)) {
    results.innerHTML = "Please give a valid height value";
  } else if (weight == "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight value";
  } else {
    const BMI = (weight / ((hieght * hieght) / 10000)).toFixed(2);
    let result = "";
    if (BMI < 18.6) {
      result = "Underweight";
    } else if (BMI >= 18.6 && BMI < 24.9) {
      result = "Normal Weight";
    } else {
      result = "Overweight";
    }
    results.innerHTML = `<span>BMI: ${BMI}, ${result}</span>`;
  }
});
```

## Project-3: Digital Clock

```javascript
const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project-4: Guess Number

```javascript
let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.getElementById("subt");
const userInput = document.getElementById("guessField");
const previousGuess = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Enter a valid number");
    userInput.value = "";
  } else if (guess < 1) {
    alert("Number should be greater than 1");
    userInput.value = "";
  } else if (guess > 100) {
    alert("Number should be less than 100");
    userInput.value = "";
  } else {
    if (numGuess === 10) {
      displayGuess(guess);
      displatMessage(`Game over, the random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displatMessage("You've guessed right");
    endGame();
  } else if (guess < randomNum) displatMessage("Number is TOOOO low");
  else displatMessage("Number is TOO high");
}

function displayGuess(guess) {
  userInput.value = "";
  previousGuess.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displatMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function newGame() {
  const newGame = document.querySelector("#newGame");
  newGame.addEventListener("click", function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    numGuess = 1;
    previousGuess.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("diabled");
    lowOrHi.innerHTML = "";
    startOver.removeChild(p);
  });
}

function endGame() {
  userInput.innerHTML = "";
  userInput.setAttribute("disables", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id = "newGame" >Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
```
