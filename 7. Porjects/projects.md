# Projects related to DOM

## Project Link (Hitesh's)

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project-1

```javascript
console.log("Manohar");

const btns = document.querySelectorAll(".button");
const body = document.querySelector("body");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    body.style.backgroundColor = e.target.id;
  });
});
```
