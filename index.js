const form = document.querySelector("form");
const inpt = document.querySelector("input");
const btn = document.querySelector(".button");

function ValidateEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.value.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

btn.addEventListener("click", function() {
  if (ValidateEmail(document.form1.text) === false) {
    btn.classList.add("warn");
    form.classList.add("msg");
    inpt.classList.add("error");
  }
});

inpt.addEventListener("click", function() {
  btn.classList.remove("warn");
  form.classList.remove("msg");
  inpt.classList.remove("error");
});
