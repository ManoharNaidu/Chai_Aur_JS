// IIFE is used to avoid polluting the global scope. It is a function that is executed immediately after it is created.

(function one() {
    console.log('One is called');
})(); // semi-colon is required here

( () => (console.log('Two is called')) )();

(  (name) => (console.log(`Hello ${name}`))  )('Batman')

