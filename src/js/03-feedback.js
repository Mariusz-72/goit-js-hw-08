
'use strict';
import throttle from 'lodash.throttle';  //import modułu lodash//

const LOCALSTORAGE_KEY = 'feedback-form-state';  

const form = document.querySelector('.feedback-form');

const emailInput = form.querySelector('input[name="email"]')
const messageTextarea = form.querySelector('textarea[name="message"]')

let formState = {      //deklaracja zmiennych dla email i  message//
  email: '',
  message: '',
};                    


function validateForm() {                                     //walidacja formularza//
  if (!formState.email || !formState.message) {
    alert('required fields: "email"  and  "message" ');

    return false;
  }

  return true;
}


const checkStorage = localStorage.getItem(LOCALSTORAGE_KEY);
 if (checkStorage) {                                          //sprawdzam czy w localStorage pod kluczem feedback-form...  są dane//
    formState = JSON.parse(checkStorage);
        emailInput.value = formState.email;
        messageTextarea.value = formState.message;
    }               //.. jak są to pobieranie danych z formularza do formState//


const throttledSave = throttle((data) => {                         //uruchomienie funkcji throttledSave która zapisuje do localStorage z opóźnieniem//
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
    
}, 500);




function saveData(event) {                               //funkcja saveData  aktualizuje formState i uruchamia throttledSave do zapisu w localStorage (z opóźnieniem)//
  formState[event.target.name] = event.target.value;
  throttledSave(formState)                          
}

form.addEventListener("input", saveData);  // nasłuch na input które ma wywołać saveData - przy każdej wprowadzonej zmianie w formularzu//

function loadDataFromLocalStorage() {
    const savedData = localStorage.getItem(LOCALSTORAGE_KEY);   //pobranie danych z localStorage 
    if (savedData) {
        formState = JSON.parse(savedData);
        emailInput.value = formState.email;                         //.. i przypisanie wartości (sparsowanych) początkowych do pól w formularzu
        messageTextarea.value = formState.message;
    }
}

function onLoad() {
    loadDataFromLocalStorage();
}


window.addEventListener('load', onLoad); //wywołanie onLoad po załadowaniu strony

const sentForm = event => {                //funkcja sentForm do odsługi "submit'a"//
    eventSent.preventDefault(); 
    if (validateForm()) {                       // jeśli validateForm zwraca true to pobierane są email i message
      const {
        elements: { email, message },
      } = eventSent.currentTarget;
      const objectData = {                                //...  i dodawane do obiektu objectData
        email: email.value, 
        message: message.value,
      };
      console.log(objectData); //logowanie tych danych do konsoli //
      localStorage.removeItem(LOCALSTORAGE_KEY); //usunięcie danych z localStorage//
      formState = {
        email: '',
        message: '',
      };
      form.reset();                  // reset formState i wyczyszczenie formularza//
    }    
};

form.addEventListener('submit', sentForm);  //nasłuch na "submit" aby wywołać funkcję sentForm//