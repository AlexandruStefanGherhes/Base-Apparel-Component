const input = document.querySelector(".input_field");
const form = document.querySelector(".form");
const errorIcon = document.querySelector(".error_icon");
const errorText = document.querySelector(".input_error");
console.log(input);
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkEmail(input);
});

function generateText(text, color) {
  errorText.style.display = "block";
  errorText.textContent = text;
  errorText.style.color = color;
}

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    errorIcon.style.display = "none";
    generateText("You have succesfully signed up", "green");
    input.style.border = "";
    input.value = "";
    setTimeout(() => {
      errorText.style.display = "none";
    }, 2000);
  } else {
    errorIcon.style.display = "block";
    generateText("Please enter a valid email adress", "red");

    input.style.border = "2px solid red";
  }
}
