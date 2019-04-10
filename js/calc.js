var sum = "";

// Display

var display = document.getElementById("screen");

// Numbers

var buttons = document.querySelectorAll(".buttonNum");

for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener("click" , function(event) {
    sum += this.innerHTML;
    display.innerHTML = sum;
  })
}

// Operators

var operators = document.querySelectorAll(".operator");

for (var i = 0; i < operators.length; i++) {
  var operator = operators[i];
  operator.addEventListener("click" , function(event) {
    sum += " " + this.innerHTML + " ";
    display.innerHTML = sum;
  })
}

// Equals

var equal = document.getElementsByClassName("equals")[0];

equal.addEventListener("click", function(event) {
  display.innerHTML = eval(sum);
})

// AC

var clear = document.getElementsByClassName("buttonClear")[0];

clear.addEventListener("click", function(event) {
  sum = "";
  display.innerHTML = "Sparta Calculator";
})
