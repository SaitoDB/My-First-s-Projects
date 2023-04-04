const display = document.querySelector("input[name='display']");
const buttons = document.querySelectorAll("input[type='button']");
const operators = document.querySelectorAll(".operators");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.value;
    if (value !== "=" && value !== "AC" && value !== "DE" && value !== ".") {
      display.value += value;
    } else if (value === "=") {
      display.value = eval(display.value);
    } else if (value === "AC") {
      display.value = "";
    } else if (value === "DE") {
      display.value = display.value.toString().slice(0, -1);
    } else if (value === ".") {
      if (!display.value.includes(".")) {
        display.value += ".";
      }
    }
  });
});