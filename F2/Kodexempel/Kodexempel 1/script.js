/**
 * Makes a request to https://restcountries.eu/rest/v2/name/{query} and displays a table with the results.
 * @param {string} query The user’s search query
 * @param {HTMLElement} container The <tbody> element that the result will be printed to
 */
function search(query, container) {
  // TODO: Rewrite to match the specification
  //console.log('test');
  window.fetch('https://restcountries.com/v3.1/name/' + query)
    .then(function(response) {
      //console.log('r');
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      //tömm content2
      container.innerHTML=null;
      for(let i = 0; i < data.length ; i++) {

      

      let countryData = data[i];

     

      let card = document.createElement('div');
      card.classList.add('card');
      card.style.maxWidth = '20rem';
      card.style.width ='25%';
      container.appendChild(card);

      let cardImage = document.createElement('img');
      cardImage.className = 'card-img-top';
      cardImage.setAttribute('src',countryData.flags.png);
      card.appendChild(cardImage);

      let cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      card.appendChild(cardBody);

      let cardTitle = document.createElement('h5');
      cardTitle.className = 'card-title';
      cardTitle.textContent = countryData.name.common;
      cardBody.appendChild(cardTitle);

      let capital = document.createElement('p');
      capital.className = 'card-text';
      capital.innerHTML = '<b>' + countryData.capital[0] + '</b>';
      cardBody.appendChild(capital);

      let area = document.createElement('p');
      area.classList.add('card-text');
      area.innerHTML = 'Area: ' + countryData.area + 'km<sup>2</sup>';
      cardBody.appendChild(area);

      let population = document.createElement('p');
      population.className = 'card-text';
      population.innerHTML = '<b>Population:</b> ' + countryData.population;
      cardBody.appendChild(population);

    }

      document.querySelector('#preloader').classList.add('d-none');
    });
}

window.addEventListener('load', function(){
  document.querySelector('form').addEventListener('submit', function(fisk){
    fisk.preventDefault();
    document.querySelector('#preloader').classList.remove('d-none');
    console.log('inte skickat!');
    let q = document.querySelector('#search').value;
    search(q, document.querySelector('#content2'));
  });

  document.querySelector('#preloader').classList.add('d-none');
});
