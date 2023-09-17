
'use strict';
import throttle from 'lodash.throttle';  //import modułu lodash//

const LOCALSTORAGE_KEY = 'feedback-form-state';  

const form = document.querySelector('.feedback-form');

let formState = {
    email: '',
    message: ''
};

const checkStorage = localStorage.getItem(LOCALSTORAGE_KEY);
 if (checkStorage) {
    formState = JSON.parse(checkStorage);
        form.elements.email.value = formState.email;
        form.elements.message.value = formState.message;
    }


const throttledSave = throttle((data) => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
    
}, 500);




function saveData(event) {
    formState[event.target.name] = event.target.value;
    throttledSave(formState)
}

form.addEventListener("input", saveData);

const sentForm = eventSent => {
    eventSent.preventDefault();
    const {
        elements: { email, message } } = eventSent.currentTarget;
    const objectData = {
        email: email.value,
        message: message.value,
    };
    console.log(objectData);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    formState = {
        email: '',
        message: ''
    };
    form.reset();
};

form.addEventListener('submit', sentForm);