/*const STORAGE_KEY = 'feedback-msg';
const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', () => {
  const formData = new FormData(form);
  const email = formData.get('email');
  const message = formData.get('message');

  saveToLS('email', email);
  saveToLS('message', message);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  const message = formData.get('message');
  form.reset();

  localStorage.removeItem('name');
  localStorage.removeItem('message');
  localStorage.removeItem('userData');
});

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}
window.addEventListener('DOMContentLoaded', () => {
  const email = loadFromLS('email');
  const message = loadFromLS('message');
  form.elements.email.value = email;
  form.elements.message.value = message;
});*/

const STORAGE_KEY = 'feedback-form-state';
let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');

// Load data from local storage when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  const savedData = loadFromLS(STORAGE_KEY);
  if (savedData) {
    formData = savedData;
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
});

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveToLS(STORAGE_KEY, formData);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
    form.reset();
  }
});

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  if (!json) {
    return null;
  }
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return null;
  }
}
