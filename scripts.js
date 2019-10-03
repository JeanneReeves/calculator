// Simple arithmetic calculator app.

/**
 * 3. Log the value of the select and the inputs.
 */

function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function remainder(a, b) {
  return a % b;
}

const form = document.querySelector("form");

// Use an anonymous callback function as the 2nd argument.
form.addEventListener("submit", function(event) {
  //Prevent the default browser behavior - DON'T submit
  event.preventDefault();
});
