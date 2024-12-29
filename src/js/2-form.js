console.log('Form');

'use strict';
const formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

// Функція для збереження даних у локальне сховище
const saveToLocalStorage = () => {
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
};

// Функція для завантаження даних із локального сховища
const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    return JSON.parse(savedData);
  } else {
    return null;
  }
};

// Заповнення форми даними з локального сховища при завантаженні сторінки
const savedData = loadFromLocalStorage();
if (savedData) {
  formData.email = savedData.email || "";
  formData.message = savedData.message || "";

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// Слухач для події input
form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  formData[name] = value;
  saveToLocalStorage();
});

// Слухач для події submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Перевірка на заповнення всіх полів
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }
    
// Виведення даних у консоль
  console.log(formData);

  // Очищення локального сховища, об'єкта formData і форми
  localStorage.removeItem(localStorageKey);
  formData.email = "";
  formData.message = "";
  form.reset();
});

