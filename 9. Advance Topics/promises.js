const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 2000);
});

promiseOne.then((result) => {
  console.log(result);
});
