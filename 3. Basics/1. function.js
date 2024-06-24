// destructuring
function UserLoginMessage({ username }) {
  return `Welcome ${username}, you are now logged in!`;
}
console.log(UserLoginMessage((username = "John Doe")));

function calculateCartPrice(val1, ...items) {
  console.log(items);
  return items.reduce((acc, item) => acc + item.price, 0);
}
console.log(calculateCartPrice({ price: 10 }, { price: 20 }, { price: 30 }));
