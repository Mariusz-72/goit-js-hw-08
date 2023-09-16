
'use strict';
import throttle from 'lodash.throttle';  //import modułu lodash//

const actualData = 'feedback-from-state';  //klucz do localStorage//

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input [name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');



const saveDataToLocoalStorage = throttle(() => {
    const formData = {
        email: emailInput.value,
        message: messageTextarea.value,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}, 500);

emailInput.addEventListener('input', saveDataToLocoalStorage);
messageTextarea.addEventListener('input', saveDataToLocoalStorage);


function fillFormFromLocalStorage() {
    const savedData = localStorage.getItem(localStorageKey);

    if (savedData) {
        const formData = JSON.parse(savedData);
        emailInput.value = formData.email;
        messageTextarea.value = formData.message;
    }
}

window.addEventListener('load', fillFromLocalStorage);

//utworzenie formData z danymi z pól formularza ://
const formData = {
    email: emailInput.value,
    message: messageText.value,
};

console.log('Dane z formularza:', formData); // wyświetli dane jakie idą do localStorage//
 
localStorage.removeItem(localStorageKey); //czyszczenie localStorage po wysłaniu formularza//

function clearLocalStorage() {
    localStorage.removeItem(localStorageKey);
}

window.addEventListener('load', clearLocalStorage);

