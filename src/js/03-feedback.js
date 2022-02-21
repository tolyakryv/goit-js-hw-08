import throttle from "lodash.throttle";

let formData = {};
// let inputData;
// let textareaData;
const KEY = "feedback-form-state";
const Form = document.querySelector(".feedback-form");
// const refs = {
//   form: document.querySelector(".feedback-form"),
//   input: document.querySelector(".feedback-form input"),
//   textarea: document.querySelector(".feedback-form textarea"),
// };

Form.addEventListener("submit", onFormSubmit);
Form.addEventListener("input", throttle(onInputForm, 500));
// refs.input.addEventListener("input", onInput);
// refs.textarea.addEventListener("input", onTextareaInput);
// ----запись в память------

// function onInput(evt) {
//   inputData = evt.target.value;
// }
// function onTextareaInput(evt) {
//   textareaData = evt.target.value;
// }
// function onInputForm() {
//   if (formData) {
//     formData.email = inputData;
//     formData.message = textareaData;
//     localStorage.setItem(KEY, JSON.stringify(formData));
//     console.log(localStorage);
//   }
// }
function onInputForm(evt) {
  if (formData) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(KEY, JSON.stringify(formData));
  }
}

// ----update-input------
function updateInput() {
  const savedMessage = JSON.parse(localStorage.getItem(KEY));
  if (savedMessage) {
    Form.message.value = savedMessage.message;
    Form.email.value = savedMessage.email;
    formData.email = savedMessage.email;
    formData.message = savedMessage.message;
    console.log(savedMessage);
  }
}

updateInput();
// ----submitForm-------------
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(KEY);
}
