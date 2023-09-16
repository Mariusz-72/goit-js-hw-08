'use strict';
import Player from '@vimeo/player';                      //import potrzebnych modułów, odtwarzacz i lodash.throttle - do obsługi tej funkcji//
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');    //dostanie się do elem. iframe ...//
const player = new Player(iframe);                      //...i odpalenie odtwarzacza na podstawie tych danych//
const LOCALSTORAGE_KEY = 'videoplayer-current-time';        //definicja klucza w którym zapisze się czas odtwarzania//

    player.on('play', function () {                // dane z dokumentacji , obsługa zdarzenia "play" da info w konsoli//
    console.log('played the video!');
});

    player.getVideoTitle().then(function (title) {
    console.log('title:', title);                            // pobranie i wyświetlenie tytułu//
});

const timeUpdate = throttle(data => {                           // funkcja zapisu czasu w localStorage z ograniczeniem do 1s. //
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}, 1000);

player.on('timeupdate', timeUpdate)  // nasłuch na zdarzenie zmiany czasu odtwarzacza i przypisanie "timeUPdate" jako obsługi tego zdarzenia //

player.on('loaded', () => {                                      //zdarzenie loaded wykonuje się jak odtw. jest załadowany i gotowy//
    const savedTimeUpdate = localStorage.getItem(LOCALSTORAGE_KEY);        // odczyt z localStorage zapisanego czasu i przypisanie go do savedTimeUpdt.//
    if (savedTimeUpdate) {                                                        // warunek - jak w Storage jest zapisany jakiś czas to...//
        player
            .setCurrentTime(Number.parseFloat(savedTimeUpdate))    //... ustawia czas na ten zapisany , z tym ze w Storage jest ciąg znaków więc trzeba to sparsować na number//
            .catch(function (error) {                                 // obsługa błędu //
                switch (error.name) {
                    case 'RangeError':
                        break;
                    default:
                        break;
                }
            });
    }
});