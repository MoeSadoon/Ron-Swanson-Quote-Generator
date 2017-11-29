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
    else {
        console,log("error!");
    }
  }
  XHR.open("GET", url);
  XHR.send();
})