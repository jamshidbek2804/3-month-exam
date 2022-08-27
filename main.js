let elSelect = document.querySelector(".form-select");
let elDemo = document.querySelector("#demo");
let elDemo2 = document.querySelector("#demo-2");
let elDemo3 = document.querySelector("#demo-3");
let elDemo4 = document.querySelector("#demo-4");
let elLabel = document.querySelector("label");
const form = document.querySelector("form");
const forms = document.querySelector(".form");
const lastForm = document.querySelector(".last-form");

let breadType = ["Yupqa", "Qalin", "O'rta-qalin"];
let arr = [];

for (i = 0; i < breadType.length; i++) {
  let newOption = document.createElement("option");
  newOption.textContent = breadType[i];
  elSelect.appendChild(newOption);
}

elSelect.addEventListener("change", () => {
  elDemo.textContent = elSelect.value;
});

form.addEventListener("change", function (evt) {
  elDemo2.textContent = evt.target.value;
});

forms.addEventListener("change", function (evt) {
  elDemo3.textContent = evt.target.value;
});

lastForm.addEventListener("change", function (evt) {
  elDemo4.textContent = evt.target.value;
});

function myFunction() {
  document.getElementById("myForm").submit();
}
