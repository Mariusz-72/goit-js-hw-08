
'use strict';
import throttle from 'lodash.throttle';  //import modułu lodash//

const LOCALSTORAGE_KEY = 'feedback-form-state';  

const form = document.querySelector('.feedback-form');

let formState = {
    email: '',
    message: ''
};                     //deklaracja zmiennych dla email i  message//

const checkStorage = localStorage.getItem(LOCALSTORAGE_KEY);
 if (checkStorage) {                                          //sprawdzam czy w localStorage pod kluczem feedback-form...  są dane//
    formState = JSON.parse(checkStorage);
        form.elements.email.value = formState.email;
        form.elements.message.value = formState.message;
    }               //.. jak są to pobieranie danych z formularza do formState//


const throttledSave = throttle((data) => {                         //uruchomienie funkcji throttledSave która zapisuje do localStorage z opóźnieniem//
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
    
}, 500);




function saveData(event) {                               //funkcja saveData  aktualizuje formState i uruchamia throttledSave do zapisu w localStorage (z opóźnieniem)//
    formState[event.target.name] = event.target.value;
    throttledSave(formState)
}

form.addEventListener("input", saveData);  // nasłuch na input które ma wywołać saveData - przy każdej wprowadzonej zmianie w formularzu//

const sentForm = eventSent => {                //funkcja sentForm do odsługi "submit'a"//
    eventSent.preventDefault();
    const {
        elements: { email, message } } = eventSent.currentTarget;
    const objectData = {
        email: email.value,                        //zapis danych z pól formularza do obiektu objectData//
        message: message.value,
    };
    console.log(objectData);               //logowanie tych danych do konsoli//
    localStorage.removeItem(LOCALSTORAGE_KEY);    //usunięcie danych z localStorage//
    formState = {
        email: '',
        message: ''
    };
    form.reset();                                   // reset formState i wyczyszczenie formularza//
};

form.addEventListener('submit', sentForm);  //nasłuch na "submit" aby wywołać funkcję sentForm//