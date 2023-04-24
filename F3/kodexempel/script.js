// Xml-api: https://www3.kau.se/tentamenslista/rss.xml    med cors-proxy: 
'use strict';

window.addEventListener('load', ()=> {
    window.fetch('https://cors-anywhere.herokuapp.com/https://www3.kau.se/tentamenslista/rss.xml').then(response=>response.text()).then(handleData)
});

function handleData(xmlString) {
    //console.log(xmlString);

    let parser = new window.DOMParser();
    let xmlDOM = parser.parseFromString(xmlString, 'application/xml');

    let items = xmlDOM.querySelectorAll('item');

    let ul = document.createElement('ul');
    ul.className = 'list-group';

    document.querySelector('main').appendChild(ul);

    items.forEach((item)=>{
        console.log(item);
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        ul.appendChild(li);

        let h5 = document.createElement('h5');
        let rubrik = item.querySelector('title').textContent;
        h5.textContent = rubrik;
        li.appendChild(h5);

        let p = document.createElement('p');
        let desc = item.querySelector('description').textContent;
        p.innerHTML = desc;
        li.appendChild(p);



    });


}




