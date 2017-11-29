'use strict';

const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const quoteTxt = document.getElementById('quote');


//Using XML HTTP Requests (XHR button):
document.getElementById('xhr').addEventListener("click", () => {
  let XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200) {
      let data = JSON.parse(XHR.responseText);
      quoteTxt.innerText = data;
    }
  }
  XHR.open("GET", url);
  XHR.send();
})

//Using Fetch API (Fetch button):
document.getElementById('fetch').addEventListener("click", () => {
    fetch(url)
    .then(function(response) {
      if(!response.ok) {
        throw Error(response.status)
      }
      let data = response.json();
      return data
    })
    .then(function(data) {
      quoteTxt.innerText = data[0];
    })
    .catch(function(err) {
      console.log(err);
    })
  })