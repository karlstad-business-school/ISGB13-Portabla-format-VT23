'use strict';

window.addEventListener('load', silverfisk);


function silverfisk(){
    window.fetch('https://restcountries.com/v3.1/name/sweden')
        .then(function(response){
            console.log(response);
            return response.json();
        }).then(function(data) {
            console.log(data);
            document.querySelector('#preloader').classList.add('d-none');

            let countryData = data[0];

            let bild = document.createElement('img');
            bild.setAttribute('src',countryData.flags.png);
            bild.setAttribute('alt', countryData.flags.alt);

            document.querySelector('main').appendChild(bild);







        });
}