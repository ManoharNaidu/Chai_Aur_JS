# Projects related to DOM

## Project Link (Hitesh's)

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project-1

```javascript
const btns = document.querySelectorAll(".button");
const body = document.querySelector("body");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    body.style.backgroundColor = e.target.id;
  });
});
```

## Project-2

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
