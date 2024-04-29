window.onload = function () {
  var inputBox = document.getElementById("inputBox");
  var container = document.getElementById("container");

  container.addEventListener("click", function (e) {
    handleButtonClick(e.target.id);
  });

  var equalsButton = document.getElementById("Button=");
  equalsButton.addEventListener("click", performCalculation);

  var clearButton = document.getElementById("ButtonC");
  clearButton.addEventListener("click", clearInput);

  function handleButtonClick(buttonId) {
    if (buttonId !== "ButtonC" && buttonId !== "Button=") {
      var button = document.getElementById(buttonId);
      var buttonValue = buttonId.replace("Button", "");
      updateInput(buttonValue);
    }
  }

  function updateInput(buttonValue) {
    inputBox.value += buttonValue;
  }

  function performCalculation() {
    if (inputBox.value === ".") {
      alert("Please Enter a Mathematical Expression");
    } else {
      inputBox.value = eval(inputBox.value);
    }
  }

  function clearInput() {
    inputBox.value = "";
  }
};
