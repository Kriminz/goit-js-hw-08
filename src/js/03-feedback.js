import throttle from 'lodash.throttle';
// 
const form = document.querySelector('.feedback-form');

const formData = {};

const LOCALSTORAGE_KEY = "feedback-form-state";
// 

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmitForm);

checkForm();

function onInputForm(e){
  formData[e.target.name] = e.target.value;

  const savedData = JSON.stringify(formData);
  localStorage.setItem(LOCALSTORAGE_KEY, savedData);
}

function onSubmitForm(e) {
  e.preventDefault();

  e.target.reset();

  localStorage.removeItem(LOCALSTORAGE_KEY);

  const savedData = JSON.stringify(formData);
  const parsetData = JSON.parse(savedData);
  console.log(parsetData);
}

function checkForm() {
  const savedFormData = localStorage.getItem(LOCALSTORAGE_KEY);

  if(savedFormData){
    form.value = savedFormData;
  }
}